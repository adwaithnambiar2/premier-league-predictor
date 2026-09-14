/**
 * Match Predictor Module
 * Implements a sophisticated prediction algorithm considering multiple factors
 */

const Predictor = (function() {
    // Weights for different prediction factors (must sum to 1.0)
    const WEIGHTS = {
        form: 0.25,           // Recent form weight
        homeAdvantage: 0.15,  // Home/away performance
        headToHead: 0.15,     // Historical matchups
        leaguePosition: 0.15, // Current standing
        goalsScored: 0.15,    // Offensive capability
        goalsConceded: 0.10,  // Defensive capability
        xG: 0.05              // Expected goals (advanced metric)
    };

    // Home advantage boost
    const HOME_ADVANTAGE_FACTOR = 1.15;

    /**
     * Calculate form score (0-1) from recent results
     */
    function calculateFormScore(form) {
        if (!form || form.length === 0) return 0.5;

        const points = form.reduce((sum, result) => {
            switch (result) {
                case 'W': return sum + 3;
                case 'D': return sum + 1;
                case 'L': return sum + 0;
                default: return sum;
            }
        }, 0);

        // Max possible points = form.length * 3
        return points / (form.length * 3);
    }

    /**
     * Calculate strength rating from team stats (0-100)
     */
    function calculateTeamStrength(team, isHome) {
        const record = isHome ? team.homeRecord : team.awayRecord;
        const totalGames = record.played || 1;

        // Win rate component
        const winRate = record.won / totalGames;

        // Goals component
        const goalsPerGame = record.goalsFor / totalGames;
        const goalsAgainstPerGame = record.goalsAgainst / totalGames;
        const goalDiffPerGame = (goalsPerGame - goalsAgainstPerGame + 3) / 6; // Normalize to 0-1

        // Points per game
        const ppg = ((record.won * 3) + record.drawn) / totalGames;
        const normalizedPpg = ppg / 3; // Max 3 ppg

        // Combined strength
        const strength = (winRate * 0.4 + goalDiffPerGame * 0.3 + normalizedPpg * 0.3);

        return Math.min(100, Math.max(0, strength * 100));
    }

    /**
     * Calculate expected goals based on team stats
     */
    function calculateExpectedGoals(attackTeam, defendTeam, isHome) {
        const attackRecord = isHome ? attackTeam.homeRecord : attackTeam.awayRecord;
        const defendRecord = isHome ? defendTeam.awayRecord : defendTeam.homeRecord;

        // Base expected goals from actual scoring rate
        const attackGoalsPerGame = attackRecord.goalsFor / (attackRecord.played || 1);
        const defendGoalsAgainstPerGame = defendRecord.goalsAgainst / (defendRecord.played || 1);

        // xG adjustment if available
        const xGFactor = attackTeam.stats.xG ?
            (attackTeam.stats.xG / (attackTeam.played || 1)) / Math.max(attackGoalsPerGame, 0.5) : 1;

        // Shot accuracy factor
        const shotAccuracyFactor = (attackTeam.stats.shotsOnTarget / attackTeam.stats.shotsPerGame) || 0.35;

        // Calculate expected goals
        let expectedGoals = (attackGoalsPerGame + defendGoalsAgainstPerGame) / 2;

        // Apply xG adjustment
        expectedGoals *= xGFactor;

        // Home advantage
        if (isHome) {
            expectedGoals *= HOME_ADVANTAGE_FACTOR;
        }

        return Math.max(0, expectedGoals);
    }

    /**
     * Generate score prediction using Poisson distribution
     */
    function generateScorePrediction(homeXG, awayXG) {
        // Poisson probability function
        function poissonProb(lambda, k) {
            return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
        }

        function factorial(n) {
            if (n <= 1) return 1;
            return n * factorial(n - 1);
        }

        // Calculate most likely scores (0-5 goals each)
        let maxProb = 0;
        let predictedHome = 0;
        let predictedAway = 0;

        for (let h = 0; h <= 5; h++) {
            for (let a = 0; a <= 5; a++) {
                const prob = poissonProb(homeXG, h) * poissonProb(awayXG, a);
                if (prob > maxProb) {
                    maxProb = prob;
                    predictedHome = h;
                    predictedAway = a;
                }
            }
        }

        // Also calculate result probabilities
        let homeWinProb = 0;
        let drawProb = 0;
        let awayWinProb = 0;

        for (let h = 0; h <= 8; h++) {
            for (let a = 0; a <= 8; a++) {
                const prob = poissonProb(homeXG, h) * poissonProb(awayXG, a);
                if (h > a) homeWinProb += prob;
                else if (h < a) awayWinProb += prob;
                else drawProb += prob;
            }
        }

        return {
            homeGoals: predictedHome,
            awayGoals: predictedAway,
            homeWinProb: homeWinProb * 100,
            drawProb: drawProb * 100,
            awayWinProb: awayWinProb * 100
        };
    }

    /**
     * Calculate head-to-head advantage
     */
    function calculateH2HAdvantage(h2hData, team1Id, team2Id) {
        if (!h2hData || h2hData.matches === 0) {
            return { team1: 0.5, team2: 0.5 };
        }

        const minId = Math.min(team1Id, team2Id);
        const isTeam1First = team1Id === minId;

        const team1Wins = isTeam1First ? h2hData.team1Wins : h2hData.team2Wins;
        const team2Wins = isTeam1First ? h2hData.team2Wins : h2hData.team1Wins;

        const total = team1Wins + team2Wins + h2hData.draws;
        if (total === 0) return { team1: 0.5, team2: 0.5 };

        // Calculate advantage with draws split
        const team1Advantage = (team1Wins + h2hData.draws * 0.5) / total;
        const team2Advantage = (team2Wins + h2hData.draws * 0.5) / total;

        return {
            team1: team1Advantage,
            team2: team2Advantage
        };
    }

    /**
     * Calculate league position factor (higher position = higher score)
     */
    function calculatePositionFactor(position) {
        // Position 1 = 1.0, Position 20 = 0.0
        return (21 - position) / 20;
    }

    /**
     * Main prediction function
     */
    async function predictMatch(homeTeamId, awayTeamId) {
        // Fetch all required data
        const [homeTeam, awayTeam, h2hData] = await Promise.all([
            DataAPI.getTeamById(homeTeamId),
            DataAPI.getTeamById(awayTeamId),
            DataAPI.getHeadToHead(homeTeamId, awayTeamId)
        ]);

        if (!homeTeam || !awayTeam) {
            throw new Error('Team data not found');
        }

        // Calculate individual factors
        const factors = {
            // Form scores
            homeForm: calculateFormScore(homeTeam.form),
            awayForm: calculateFormScore(awayTeam.form),

            // Team strength (home/away specific)
            homeStrength: calculateTeamStrength(homeTeam, true),
            awayStrength: calculateTeamStrength(awayTeam, false),

            // Position factors
            homePositionFactor: calculatePositionFactor(homeTeam.position),
            awayPositionFactor: calculatePositionFactor(awayTeam.position),

            // Goals per game
            homeGoalsPerGame: homeTeam.goalsFor / (homeTeam.played || 1),
            awayGoalsPerGame: awayTeam.goalsFor / (awayTeam.played || 1),

            // Goals conceded per game
            homeGoalsConcededPerGame: homeTeam.goalsAgainst / (homeTeam.played || 1),
            awayGoalsConcededPerGame: awayTeam.goalsAgainst / (awayTeam.played || 1),

            // H2H advantage
            h2hAdvantage: calculateH2HAdvantage(h2hData, homeTeamId, awayTeamId)
        };

        // Calculate expected goals
        const homeXG = calculateExpectedGoals(homeTeam, awayTeam, true);
        const awayXG = calculateExpectedGoals(awayTeam, homeTeam, false);

        // Generate score prediction
        const scorePrediction = generateScorePrediction(homeXG, awayXG);

        // Calculate weighted overall scores
        let homeScore = 0;
        let awayScore = 0;

        // Form weight
        homeScore += factors.homeForm * WEIGHTS.form;
        awayScore += factors.awayForm * WEIGHTS.form;

        // Home advantage weight
        homeScore += (factors.homeStrength / 100) * WEIGHTS.homeAdvantage * HOME_ADVANTAGE_FACTOR;
        awayScore += (factors.awayStrength / 100) * WEIGHTS.homeAdvantage;

        // H2H weight
        homeScore += factors.h2hAdvantage.team1 * WEIGHTS.headToHead;
        awayScore += factors.h2hAdvantage.team2 * WEIGHTS.headToHead;

        // League position weight
        homeScore += factors.homePositionFactor * WEIGHTS.leaguePosition;
        awayScore += factors.awayPositionFactor * WEIGHTS.leaguePosition;

        // Goals scored weight (normalized)
        const maxGoalsPerGame = 3;
        homeScore += Math.min(factors.homeGoalsPerGame / maxGoalsPerGame, 1) * WEIGHTS.goalsScored;
        awayScore += Math.min(factors.awayGoalsPerGame / maxGoalsPerGame, 1) * WEIGHTS.goalsScored;

        // Goals conceded weight (inverted - fewer is better)
        homeScore += (1 - Math.min(factors.homeGoalsConcededPerGame / maxGoalsPerGame, 1)) * WEIGHTS.goalsConceded;
        awayScore += (1 - Math.min(factors.awayGoalsConcededPerGame / maxGoalsPerGame, 1)) * WEIGHTS.goalsConceded;

        // xG weight
        if (homeTeam.stats.xG && awayTeam.stats.xG) {
            const maxXG = 60;
            homeScore += (homeTeam.stats.xG / maxXG) * WEIGHTS.xG;
            awayScore += (awayTeam.stats.xG / maxXG) * WEIGHTS.xG;
        }

        // Normalize scores to percentages
        const totalScore = homeScore + awayScore;
        const normalizedHomeScore = (homeScore / totalScore) * 100;
        const normalizedAwayScore = (awayScore / totalScore) * 100;

        // Calculate confidence level (based on data quality and score difference)
        const scoreDiff = Math.abs(normalizedHomeScore - normalizedAwayScore);
        const dataQuality = h2hData && h2hData.matches > 5 ? 1 : 0.8;
        const confidence = Math.min(95, Math.max(50, 60 + scoreDiff * dataQuality));

        // Build prediction result
        return {
            homeTeam: {
                id: homeTeam.id,
                name: homeTeam.name,
                shortName: homeTeam.shortName,
                badge: homeTeam.badge,
                color: homeTeam.primaryColor
            },
            awayTeam: {
                id: awayTeam.id,
                name: awayTeam.name,
                shortName: awayTeam.shortName,
                badge: awayTeam.badge,
                color: awayTeam.primaryColor
            },
            prediction: {
                homeWinProbability: scorePrediction.homeWinProb.toFixed(1),
                drawProbability: scorePrediction.drawProb.toFixed(1),
                awayWinProbability: scorePrediction.awayWinProb.toFixed(1),
                predictedScore: {
                    home: scorePrediction.homeGoals,
                    away: scorePrediction.awayGoals
                },
                expectedGoals: {
                    home: homeXG.toFixed(2),
                    away: awayXG.toFixed(2)
                },
                confidence: confidence.toFixed(0),
                mostLikelyOutcome: getMostLikelyOutcome(scorePrediction)
            },
            factors: {
                form: {
                    home: (factors.homeForm * 100).toFixed(0),
                    away: (factors.awayForm * 100).toFixed(0),
                    weight: (WEIGHTS.form * 100).toFixed(0) + '%'
                },
                homeAdvantage: {
                    home: (factors.homeStrength).toFixed(0),
                    away: (factors.awayStrength).toFixed(0),
                    weight: (WEIGHTS.homeAdvantage * 100).toFixed(0) + '%'
                },
                headToHead: {
                    home: (factors.h2hAdvantage.team1 * 100).toFixed(0),
                    away: (factors.h2hAdvantage.team2 * 100).toFixed(0),
                    weight: (WEIGHTS.headToHead * 100).toFixed(0) + '%',
                    totalMatches: h2hData ? h2hData.matches : 0
                },
                leaguePosition: {
                    home: homeTeam.position,
                    away: awayTeam.position,
                    weight: (WEIGHTS.leaguePosition * 100).toFixed(0) + '%'
                },
                attack: {
                    home: factors.homeGoalsPerGame.toFixed(2),
                    away: factors.awayGoalsPerGame.toFixed(2),
                    weight: (WEIGHTS.goalsScored * 100).toFixed(0) + '%'
                },
                defense: {
                    home: factors.homeGoalsConcededPerGame.toFixed(2),
                    away: factors.awayGoalsConcededPerGame.toFixed(2),
                    weight: (WEIGHTS.goalsConceded * 100).toFixed(0) + '%'
                }
            },
            headToHead: h2hData,
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Get most likely outcome description
     */
    function getMostLikelyOutcome(scorePrediction) {
        const { homeWinProb, drawProb, awayWinProb } = scorePrediction;

        if (homeWinProb > drawProb && homeWinProb > awayWinProb) {
            if (homeWinProb > 55) return 'Strong Home Win';
            return 'Home Win';
        } else if (awayWinProb > drawProb && awayWinProb > homeWinProb) {
            if (awayWinProb > 55) return 'Strong Away Win';
            return 'Away Win';
        } else {
            if (drawProb > 30) return 'Likely Draw';
            return 'Close Match';
        }
    }

    /**
     * Batch predict multiple fixtures
     */
    async function predictFixtures(fixtures) {
        const predictions = await Promise.all(
            fixtures.map(fixture =>
                predictMatch(fixture.homeTeamId, fixture.awayTeamId)
                    .then(prediction => ({
                        fixtureId: fixture.id,
                        ...prediction
                    }))
                    .catch(error => ({
                        fixtureId: fixture.id,
                        error: error.message
                    }))
            )
        );
        return predictions;
    }

    /**
     * Get prediction explanation text
     */
    function getExplanation(prediction) {
        const { homeTeam, awayTeam, prediction: pred, factors } = prediction;

        let explanation = [];

        // Form analysis
        if (parseInt(factors.form.home) > parseInt(factors.form.away) + 20) {
            explanation.push(`${homeTeam.name} is in significantly better form.`);
        } else if (parseInt(factors.form.away) > parseInt(factors.form.home) + 20) {
            explanation.push(`${awayTeam.name} is in significantly better form.`);
        }

        // Home advantage
        explanation.push(`Playing at home gives ${homeTeam.name} an advantage.`);

        // Head to head
        if (factors.headToHead.totalMatches > 5) {
            if (parseInt(factors.headToHead.home) > 60) {
                explanation.push(`${homeTeam.name} has a strong historical record in this fixture.`);
            } else if (parseInt(factors.headToHead.away) > 60) {
                explanation.push(`${awayTeam.name} has historically performed well in this fixture.`);
            }
        }

        // League position
        const posDiff = factors.leaguePosition.away - factors.leaguePosition.home;
        if (Math.abs(posDiff) >= 10) {
            const betterTeam = posDiff > 0 ? homeTeam.name : awayTeam.name;
            explanation.push(`${betterTeam} is significantly higher in the table.`);
        }

        // Attack vs Defense
        const homeAttack = parseFloat(factors.attack.home);
        const awayDefense = parseFloat(factors.defense.away);
        if (homeAttack > 2 && awayDefense > 1.5) {
            explanation.push(`${homeTeam.name}'s attack could exploit ${awayTeam.name}'s defensive weaknesses.`);
        }

        return explanation.join(' ');
    }

    // Public API
    return {
        predictMatch,
        predictFixtures,
        getExplanation,
        calculateFormScore,
        WEIGHTS
    };
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Predictor;
}
