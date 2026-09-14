/**
 * Statistics Calculation Module
 * Provides utilities for calculating and formatting football statistics
 */

const Stats = (function() {
    /**
     * Calculate points per game
     */
    function pointsPerGame(team) {
        if (!team.played || team.played === 0) return 0;
        return (team.points / team.played).toFixed(2);
    }

    /**
     * Calculate goals per game
     */
    function goalsPerGame(team) {
        if (!team.played || team.played === 0) return 0;
        return (team.goalsFor / team.played).toFixed(2);
    }

    /**
     * Calculate goals conceded per game
     */
    function goalsConcededPerGame(team) {
        if (!team.played || team.played === 0) return 0;
        return (team.goalsAgainst / team.played).toFixed(2);
    }

    /**
     * Calculate win percentage
     */
    function winPercentage(team) {
        if (!team.played || team.played === 0) return 0;
        return ((team.won / team.played) * 100).toFixed(1);
    }

    /**
     * Calculate clean sheet percentage
     */
    function cleanSheetPercentage(team) {
        if (!team.played || team.played === 0) return 0;
        return ((team.stats.cleanSheets / team.played) * 100).toFixed(1);
    }

    /**
     * Calculate home vs away performance ratio
     */
    function homeAwayRatio(team) {
        const homePoints = (team.homeRecord.won * 3) + team.homeRecord.drawn;
        const awayPoints = (team.awayRecord.won * 3) + team.awayRecord.drawn;

        const homePPG = homePoints / (team.homeRecord.played || 1);
        const awayPPG = awayPoints / (team.awayRecord.played || 1);

        return {
            home: homePPG.toFixed(2),
            away: awayPPG.toFixed(2),
            ratio: (homePPG / (awayPPG || 1)).toFixed(2)
        };
    }

    /**
     * Calculate form points (last N games)
     */
    function formPoints(form) {
        if (!form || form.length === 0) return 0;
        return form.reduce((sum, result) => {
            switch (result) {
                case 'W': return sum + 3;
                case 'D': return sum + 1;
                default: return sum;
            }
        }, 0);
    }

    /**
     * Calculate form as percentage
     */
    function formPercentage(form) {
        if (!form || form.length === 0) return 0;
        const points = formPoints(form);
        const maxPoints = form.length * 3;
        return ((points / maxPoints) * 100).toFixed(1);
    }

    /**
     * Get form string with colors
     */
    function getFormHTML(form) {
        if (!form || form.length === 0) return '';

        return form.map(result => {
            let className = '';
            switch (result) {
                case 'W': className = 'form-win'; break;
                case 'D': className = 'form-draw'; break;
                case 'L': className = 'form-loss'; break;
            }
            return `<span class="form-badge ${className}">${result}</span>`;
        }).join('');
    }

    /**
     * Calculate player's goal contribution
     */
    function goalContribution(player) {
        return player.goals + player.assists;
    }

    /**
     * Calculate player's minutes per goal
     */
    function minutesPerGoal(player) {
        if (!player.goals || player.goals === 0) return '∞';
        return Math.round(player.minutesPlayed / player.goals);
    }

    /**
     * Calculate player's minutes per goal contribution
     */
    function minutesPerContribution(player) {
        const contributions = goalContribution(player);
        if (contributions === 0) return '∞';
        return Math.round(player.minutesPlayed / contributions);
    }

    /**
     * Calculate player rating (0-10 scale)
     */
    function calculatePlayerRating(player, position) {
        let rating = 6.0; // Base rating

        switch (position) {
            case 'Forward':
                // Goals weight
                rating += Math.min(player.goals * 0.15, 2);
                // Assists weight
                rating += Math.min(player.assists * 0.1, 1);
                // Shot accuracy
                rating += (player.shotAccuracy / 100) * 0.5;
                break;

            case 'Midfielder':
                // Goals + assists
                rating += Math.min((player.goals + player.assists) * 0.1, 1.5);
                // Pass completion
                rating += ((player.passCompletion - 75) / 25) * 0.8;
                // Tackles
                rating += Math.min(player.tackles * 0.02, 0.5);
                break;

            case 'Defender':
                // Tackles weight
                rating += Math.min(player.tackles * 0.03, 1);
                // Interceptions
                rating += Math.min(player.interceptions * 0.04, 1);
                // Pass completion
                rating += ((player.passCompletion - 75) / 25) * 0.5;
                // Clean sheets (if applicable)
                break;

            case 'Goalkeeper':
                // Clean sheets
                rating += Math.min(player.cleanSheets * 0.15, 1.5);
                // Saves
                rating += Math.min(player.saves * 0.02, 1);
                // Pass completion
                rating += ((player.passCompletion - 60) / 40) * 0.5;
                break;
        }

        // Penalty for cards
        rating -= player.yellowCards * 0.05;
        rating -= player.redCards * 0.3;

        return Math.max(5, Math.min(10, rating)).toFixed(1);
    }

    /**
     * Compare two players
     */
    function comparePlayers(player1, player2) {
        const stats = [
            { name: 'Goals', p1: player1.goals, p2: player2.goals },
            { name: 'Assists', p1: player1.assists, p2: player2.assists },
            { name: 'Appearances', p1: player1.appearances, p2: player2.appearances },
            { name: 'Minutes', p1: player1.minutesPlayed, p2: player2.minutesPlayed },
            { name: 'Shot Accuracy', p1: player1.shotAccuracy, p2: player2.shotAccuracy, suffix: '%' },
            { name: 'Pass Completion', p1: player1.passCompletion, p2: player2.passCompletion, suffix: '%' },
            { name: 'Tackles', p1: player1.tackles, p2: player2.tackles },
            { name: 'Interceptions', p1: player1.interceptions, p2: player2.interceptions }
        ];

        return stats.map(stat => ({
            ...stat,
            winner: stat.p1 > stat.p2 ? 1 : (stat.p2 > stat.p1 ? 2 : 0)
        }));
    }

    /**
     * Calculate team offensive rating (0-100)
     */
    function offensiveRating(team) {
        const gpg = team.goalsFor / (team.played || 1);
        const spg = team.stats.shotsPerGame;
        const sot = team.stats.shotsOnTarget;
        const xg = team.stats.xG || (gpg * team.played);

        // Weighted combination
        const rating = (
            (gpg / 3) * 40 +           // Goals per game (max ~3)
            (spg / 20) * 20 +          // Shots per game (max ~20)
            (sot / spg) * 20 +         // Shot accuracy
            (xg / (team.played || 1)) / 3 * 20  // xG performance
        );

        return Math.min(100, Math.max(0, rating)).toFixed(0);
    }

    /**
     * Calculate team defensive rating (0-100)
     */
    function defensiveRating(team) {
        const gcpg = team.goalsAgainst / (team.played || 1);
        const cleanSheetRate = team.stats.cleanSheets / (team.played || 1);
        const tackles = team.stats.tacklesWon;
        const interceptions = team.stats.interceptions;
        const xga = team.stats.xGA || (gcpg * team.played);

        // Invert goals conceded (fewer = better)
        const gcpgScore = Math.max(0, (3 - gcpg) / 3);

        // Weighted combination
        const rating = (
            gcpgScore * 40 +
            cleanSheetRate * 30 +
            (tackles / 20) * 15 +
            (interceptions / 15) * 15
        );

        return Math.min(100, Math.max(0, rating)).toFixed(0);
    }

    /**
     * Format large numbers with K/M suffix
     */
    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    /**
     * Format minutes as hours and minutes
     */
    function formatMinutes(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    }

    /**
     * Get position color class
     */
    function getPositionClass(position) {
        if (position <= 4) return 'position-champions';
        if (position === 5) return 'position-europa';
        if (position === 6) return 'position-conference';
        if (position >= 18) return 'position-relegation';
        return '';
    }

    /**
     * Calculate team ranking in specific category
     */
    function getTeamRanking(teams, teamId, category) {
        const sorted = [...teams].sort((a, b) => {
            switch (category) {
                case 'goals': return b.goalsFor - a.goalsFor;
                case 'defense': return a.goalsAgainst - b.goalsAgainst;
                case 'cleanSheets': return b.stats.cleanSheets - a.stats.cleanSheets;
                case 'possession': return b.stats.possession - a.stats.possession;
                case 'form': return formPoints(b.form) - formPoints(a.form);
                default: return a.position - b.position;
            }
        });

        const rank = sorted.findIndex(t => t.id === teamId) + 1;
        return { rank, total: sorted.length };
    }

    /**
     * Generate chart data for team performance over time
     */
    function generateFormChartData(form) {
        const labels = form.map((_, i) => `Match ${form.length - i}`).reverse();
        const data = form.map(result => {
            switch (result) {
                case 'W': return 3;
                case 'D': return 1;
                case 'L': return 0;
            }
        }).reverse();

        const cumulativePoints = [];
        data.reduce((acc, val, i) => {
            cumulativePoints[i] = acc + val;
            return cumulativePoints[i];
        }, 0);

        return { labels, data, cumulativePoints };
    }

    /**
     * Calculate head-to-head statistics summary
     */
    function h2hSummary(h2hData, team1Id, team2Id) {
        if (!h2hData || h2hData.matches === 0) {
            return {
                totalMatches: 0,
                team1Wins: 0,
                team2Wins: 0,
                draws: 0,
                team1WinRate: '0',
                team2WinRate: '0',
                drawRate: '0',
                avgGoals: '0',
                recentMatches: []
            };
        }

        const minId = Math.min(team1Id, team2Id);
        const isTeam1First = team1Id === minId;

        const team1Wins = isTeam1First ? h2hData.team1Wins : h2hData.team2Wins;
        const team2Wins = isTeam1First ? h2hData.team2Wins : h2hData.team1Wins;

        return {
            totalMatches: h2hData.matches,
            team1Wins,
            team2Wins,
            draws: h2hData.draws,
            team1WinRate: ((team1Wins / h2hData.matches) * 100).toFixed(1),
            team2WinRate: ((team2Wins / h2hData.matches) * 100).toFixed(1),
            drawRate: ((h2hData.draws / h2hData.matches) * 100).toFixed(1),
            avgGoals: h2hData.avgGoalsPerMatch?.toFixed(1) || '0',
            recentMatches: h2hData.recentMatches || []
        };
    }

    /**
     * Get league statistics summary
     */
    async function getLeagueSummary() {
        const teams = await DataAPI.getTeams();
        const players = await DataAPI.getPlayers();

        const totalGoals = teams.reduce((sum, t) => sum + t.goalsFor, 0);
        const totalMatches = teams.reduce((sum, t) => sum + t.played, 0) / 2;
        const goalsPerMatch = (totalGoals / totalMatches).toFixed(2);

        const topScorer = players.reduce((max, p) => p.goals > max.goals ? p : max, players[0]);
        const topAssister = players.reduce((max, p) => p.assists > max.assists ? p : max, players[0]);

        return {
            totalGoals,
            totalMatches: Math.round(totalMatches),
            goalsPerMatch,
            topScorer: { name: topScorer.name, goals: topScorer.goals },
            topAssister: { name: topAssister.name, assists: topAssister.assists },
            cleanSheets: teams.reduce((sum, t) => sum + t.stats.cleanSheets, 0),
            avgPossession: (teams.reduce((sum, t) => sum + t.stats.possession, 0) / teams.length).toFixed(1)
        };
    }

    // Public API
    return {
        pointsPerGame,
        goalsPerGame,
        goalsConcededPerGame,
        winPercentage,
        cleanSheetPercentage,
        homeAwayRatio,
        formPoints,
        formPercentage,
        getFormHTML,
        goalContribution,
        minutesPerGoal,
        minutesPerContribution,
        calculatePlayerRating,
        comparePlayers,
        offensiveRating,
        defensiveRating,
        formatNumber,
        formatMinutes,
        getPositionClass,
        getTeamRanking,
        generateFormChartData,
        h2hSummary,
        getLeagueSummary
    };
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Stats;
}
