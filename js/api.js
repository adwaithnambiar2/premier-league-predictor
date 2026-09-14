/**
 * API Module - Handles data fetching, caching, and external API integration
 * Supports both live API data and fallback to mock data
 *
 * Uses Football-Data.org API for live Premier League data
 * Free tier: 10 calls/minute
 */

const DataAPI = (function() {
    // Configuration - Football-Data.org API
    const CONFIG = {
        API_KEY: localStorage.getItem('footballApiKey') || null,
        API_BASE_URL: 'https://api.football-data.org/v4',
        CACHE_DURATION: 5 * 60 * 1000, // 5 minutes for live data
        COMPETITION_CODE: 'PL', // Premier League
        SEASON: 2024
    };

    // Team ID mapping from Football-Data.org to our internal IDs
    const TEAM_ID_MAP = {
        65: 1,   // Manchester City
        57: 2,   // Arsenal
        64: 3,   // Liverpool
        58: 4,   // Aston Villa
        73: 5,   // Tottenham
        61: 6,   // Chelsea
        67: 7,   // Newcastle
        66: 8,   // Manchester United
        397: 9,  // Brighton
        563: 10, // West Ham
        1044: 11, // Bournemouth
        63: 12,  // Fulham
        354: 13, // Crystal Palace
        402: 14, // Brentford
        351: 15, // Nottingham Forest
        62: 16,  // Everton
        76: 17,  // Wolves
        338: 18, // Leicester
        349: 19, // Ipswich
        340: 20  // Southampton
    };

    // Reverse mapping
    const INTERNAL_TO_API_MAP = Object.fromEntries(
        Object.entries(TEAM_ID_MAP).map(([k, v]) => [v, parseInt(k)])
    );

    // Cache storage
    const cache = new Map();

    /**
     * Set API key for live data
     */
    function setApiKey(key) {
        CONFIG.API_KEY = key;
        localStorage.setItem('footballApiKey', key);
    }

    /**
     * Get API key status
     */
    function hasApiKey() {
        return CONFIG.API_KEY !== null && CONFIG.API_KEY.length > 0;
    }

    /**
     * Cache helper functions
     */
    function getCached(key) {
        const item = cache.get(key);
        if (item && Date.now() - item.timestamp < CONFIG.CACHE_DURATION) {
            return item.data;
        }
        return null;
    }

    function setCache(key, data) {
        cache.set(key, {
            data: data,
            timestamp: Date.now()
        });
    }

    /**
     * Generic API fetch with caching and error handling
     * Uses Football-Data.org API format
     */
    async function fetchFromApi(endpoint) {
        if (!CONFIG.API_KEY) {
            throw new Error('API key not configured');
        }

        const cacheKey = `api_${endpoint}`;
        const cached = getCached(cacheKey);
        if (cached) return cached;

        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}${endpoint}`, {
                method: 'GET',
                headers: {
                    'X-Auth-Token': CONFIG.API_KEY
                }
            });

            if (response.status === 429) {
                console.warn('API rate limit reached, using cached/mock data');
                throw new Error('Rate limit exceeded');
            }

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            setCache(cacheKey, data);
            return data;
        } catch (error) {
            console.error('API fetch failed:', error);
            throw error;
        }
    }

    /**
     * Get all teams - with live standings data merged
     */
    async function getTeams() {
        const cacheKey = 'teams';
        const cached = getCached(cacheKey);
        if (cached) return cached;

        // Try to get live standings which include team data
        if (CONFIG.API_KEY) {
            try {
                const standings = await getStandings();
                if (standings && standings.length > 0) {
                    // Merge with mock data for additional stats
                    const teams = standings.map(team => {
                        const mockTeam = PREMIER_LEAGUE_DATA.teams.find(t => t.id === team.id) || {};
                        return {
                            ...mockTeam,
                            ...team,
                            badge: team.badge || mockTeam.badge
                        };
                    });
                    setCache(cacheKey, teams);
                    return teams;
                }
            } catch (error) {
                console.log('Falling back to mock data for teams:', error.message);
            }
        }

        // Fallback to mock data
        const mockTeams = PREMIER_LEAGUE_DATA.teams;
        setCache(cacheKey, mockTeams);
        return mockTeams;
    }

    /**
     * Get live match scores
     */
    async function getLiveScores() {
        if (!CONFIG.API_KEY) {
            return [];
        }

        try {
            const data = await fetchFromApi(`/competitions/${CONFIG.COMPETITION_CODE}/matches?status=LIVE,IN_PLAY,PAUSED`);
            if (data.matches) {
                return data.matches.map(match => ({
                    id: match.id,
                    homeTeamId: TEAM_ID_MAP[match.homeTeam.id] || match.homeTeam.id,
                    awayTeamId: TEAM_ID_MAP[match.awayTeam.id] || match.awayTeam.id,
                    homeTeam: match.homeTeam.name,
                    awayTeam: match.awayTeam.name,
                    homeBadge: match.homeTeam.crest,
                    awayBadge: match.awayTeam.crest,
                    homeScore: match.score?.fullTime?.home ?? match.score?.halfTime?.home ?? 0,
                    awayScore: match.score?.fullTime?.away ?? match.score?.halfTime?.away ?? 0,
                    status: match.status,
                    minute: match.minute || ''
                }));
            }
        } catch (error) {
            console.log('Could not fetch live scores:', error.message);
        }
        return [];
    }

    /**
     * Get recent results
     */
    async function getRecentResults(limit = 10) {
        if (!CONFIG.API_KEY) {
            return [];
        }

        try {
            const data = await fetchFromApi(`/competitions/${CONFIG.COMPETITION_CODE}/matches?status=FINISHED&limit=${limit}`);
            if (data.matches) {
                return data.matches.slice(-limit).reverse().map(match => ({
                    id: match.id,
                    homeTeamId: TEAM_ID_MAP[match.homeTeam.id] || match.homeTeam.id,
                    awayTeamId: TEAM_ID_MAP[match.awayTeam.id] || match.awayTeam.id,
                    homeTeam: match.homeTeam.name,
                    awayTeam: match.awayTeam.name,
                    homeBadge: match.homeTeam.crest,
                    awayBadge: match.awayTeam.crest,
                    homeScore: match.score?.fullTime?.home,
                    awayScore: match.score?.fullTime?.away,
                    date: match.utcDate.split('T')[0],
                    matchday: match.matchday
                }));
            }
        } catch (error) {
            console.log('Could not fetch recent results:', error.message);
        }
        return [];
    }

    /**
     * Get team by ID
     */
    async function getTeamById(teamId) {
        const teams = await getTeams();
        return teams.find(t => t.id === parseInt(teamId));
    }

    /**
     * Get league standings - Live from Football-Data.org
     */
    async function getStandings() {
        const cacheKey = 'standings';
        const cached = getCached(cacheKey);
        if (cached) return cached;

        if (CONFIG.API_KEY) {
            try {
                const data = await fetchFromApi(`/competitions/${CONFIG.COMPETITION_CODE}/standings`);
                if (data.standings && data.standings.length > 0) {
                    // Transform API data to our format
                    const standings = data.standings[0].table.map(entry => {
                        const internalId = TEAM_ID_MAP[entry.team.id] || entry.team.id;
                        const mockTeam = PREMIER_LEAGUE_DATA.teams.find(t => t.id === internalId) || {};

                        return {
                            id: internalId,
                            name: entry.team.name,
                            shortName: entry.team.shortName || entry.team.tla,
                            badge: entry.team.crest || mockTeam.badge,
                            position: entry.position,
                            played: entry.playedGames,
                            won: entry.won,
                            drawn: entry.draw,
                            lost: entry.lost,
                            goalsFor: entry.goalsFor,
                            goalsAgainst: entry.goalsAgainst,
                            goalDifference: entry.goalDifference,
                            points: entry.points,
                            form: (entry.form || '').split(',').filter(f => f),
                            ...mockTeam, // Include additional stats from mock data
                            // Override with live data
                            position: entry.position,
                            played: entry.playedGames,
                            won: entry.won,
                            drawn: entry.draw,
                            lost: entry.lost,
                            goalsFor: entry.goalsFor,
                            goalsAgainst: entry.goalsAgainst,
                            goalDifference: entry.goalDifference,
                            points: entry.points
                        };
                    });
                    setCache(cacheKey, standings);
                    return standings;
                }
            } catch (error) {
                console.log('Falling back to mock data for standings:', error.message);
            }
        }

        // Fallback - sort teams by position
        const teams = [...PREMIER_LEAGUE_DATA.teams].sort((a, b) => a.position - b.position);
        setCache(cacheKey, teams);
        return teams;
    }

    /**
     * Get all players - Uses expanded data if available
     */
    async function getPlayers(filters = {}) {
        const cacheKey = `players_${JSON.stringify(filters)}`;
        const cached = getCached(cacheKey);
        if (cached) return cached;

        // Use expanded players data if available, otherwise fallback to basic mock data
        let players = [];
        if (typeof EXPANDED_PLAYERS !== 'undefined' && EXPANDED_PLAYERS.length > 0) {
            players = [...EXPANDED_PLAYERS];
        } else {
            players = [...PREMIER_LEAGUE_DATA.players];
        }

        // Apply filters
        if (filters.teamId) {
            players = players.filter(p => p.teamId === parseInt(filters.teamId));
        }
        if (filters.position) {
            players = players.filter(p => p.position === filters.position);
        }
        if (filters.nationality) {
            players = players.filter(p => p.nationality === filters.nationality);
        }
        if (filters.minGoals !== undefined) {
            players = players.filter(p => p.goals >= filters.minGoals);
        }
        if (filters.minAssists !== undefined) {
            players = players.filter(p => p.assists >= filters.minAssists);
        }
        if (filters.minAppearances !== undefined) {
            players = players.filter(p => p.appearances >= filters.minAppearances);
        }
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            players = players.filter(p =>
                p.name.toLowerCase().includes(searchLower) ||
                p.nationality.toLowerCase().includes(searchLower)
            );
        }

        // Apply sorting - Default is descending (highest first)
        if (filters.sortBy) {
            players.sort((a, b) => {
                const aVal = a[filters.sortBy] || 0;
                const bVal = b[filters.sortBy] || 0;
                // Default to descending (highest to lowest)
                if (filters.sortOrder === 'asc') {
                    return aVal - bVal;
                }
                return bVal - aVal;
            });
        } else {
            // Default sort by goals descending (highest first)
            players.sort((a, b) => (b.goals || 0) - (a.goals || 0));
        }

        // Apply limit
        if (filters.limit) {
            players = players.slice(0, filters.limit);
        }

        setCache(cacheKey, players);
        return players;
    }

    /**
     * Get all unique nationalities from players
     */
    async function getAllNationalities() {
        const cacheKey = 'nationalities';
        const cached = getCached(cacheKey);
        if (cached) return cached;

        const players = await getPlayers();
        const nationalities = [...new Set(players.map(p => p.nationality))].sort();
        setCache(cacheKey, nationalities);
        return nationalities;
    }

    /**
     * Get team history (trophies, season records, manager history)
     */
    async function getTeamHistory(teamId) {
        const cacheKey = `team_history_${teamId}`;
        const cached = getCached(cacheKey);
        if (cached) return cached;

        // Use TEAM_HISTORY if available
        if (typeof TEAM_HISTORY !== 'undefined' && TEAM_HISTORY[teamId]) {
            const history = TEAM_HISTORY[teamId];
            setCache(cacheKey, history);
            return history;
        }

        // Return empty structure if no history available
        return {
            name: '',
            founded: null,
            stadium: '',
            capacity: 0,
            trophies: {
                premierLeague: { count: 0, years: [] },
                faCup: { count: 0, years: [] },
                leagueCup: { count: 0, years: [] },
                championsLeague: { count: 0, years: [] },
                communityShield: { count: 0, years: [] }
            },
            managers: [],
            seasonHistory: [],
            stats5Year: {
                avgPosition: 0,
                avgPoints: 0,
                totalGoals: 0,
                totalConceded: 0,
                winRate: 0
            }
        };
    }

    /**
     * Get player statistics leaderboard
     */
    async function getPlayerLeaderboard(stat = 'goals', limit = 20) {
        const cacheKey = `leaderboard_${stat}_${limit}`;
        const cached = getCached(cacheKey);
        if (cached) return cached;

        const players = await getPlayers({ sortBy: stat, limit });
        setCache(cacheKey, players);
        return players;
    }

    /**
     * Get player by ID
     */
    async function getPlayerById(playerId) {
        const players = await getPlayers();
        return players.find(p => p.id === parseInt(playerId));
    }

    /**
     * Get top scorers
     */
    async function getTopScorers(limit = 20) {
        const players = await getPlayers({ sortBy: 'goals' });
        return players.slice(0, limit);
    }

    /**
     * Get top assist providers
     */
    async function getTopAssists(limit = 20) {
        const players = await getPlayers({ sortBy: 'assists' });
        return players.slice(0, limit);
    }

    /**
     * Get clean sheets leaders (goalkeepers)
     */
    async function getCleanSheetLeaders(limit = 10) {
        const players = await getPlayers({ position: 'Goalkeeper', sortBy: 'cleanSheets' });
        return players.slice(0, limit);
    }

    /**
     * Get fixtures - Live from Football-Data.org
     */
    async function getFixtures(options = {}) {
        const cacheKey = `fixtures_${JSON.stringify(options)}`;
        const cached = getCached(cacheKey);
        if (cached) return cached;

        if (CONFIG.API_KEY) {
            try {
                let endpoint = `/competitions/${CONFIG.COMPETITION_CODE}/matches`;
                if (options.status === 'scheduled') {
                    endpoint += '?status=SCHEDULED';
                } else if (options.status === 'finished') {
                    endpoint += '?status=FINISHED';
                }

                const data = await fetchFromApi(endpoint);
                if (data.matches) {
                    // Transform API data to our format
                    const fixtures = data.matches.map(match => {
                        const homeId = TEAM_ID_MAP[match.homeTeam.id] || match.homeTeam.id;
                        const awayId = TEAM_ID_MAP[match.awayTeam.id] || match.awayTeam.id;

                        return {
                            id: match.id,
                            homeTeamId: homeId,
                            awayTeamId: awayId,
                            homeTeam: match.homeTeam.name,
                            awayTeam: match.awayTeam.name,
                            homeBadge: match.homeTeam.crest,
                            awayBadge: match.awayTeam.crest,
                            date: match.utcDate.split('T')[0],
                            time: new Date(match.utcDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
                            venue: match.venue || 'TBC',
                            status: match.status.toLowerCase(),
                            homeScore: match.score?.fullTime?.home,
                            awayScore: match.score?.fullTime?.away,
                            matchday: match.matchday
                        };
                    });

                    // Filter upcoming fixtures
                    let filteredFixtures = fixtures;
                    if (options.status === 'scheduled') {
                        filteredFixtures = fixtures.filter(f => f.status === 'scheduled' || f.status === 'timed');
                    }

                    setCache(cacheKey, filteredFixtures);
                    return filteredFixtures;
                }
            } catch (error) {
                console.log('Falling back to mock data for fixtures:', error.message);
            }
        }

        // Fallback to mock data
        let fixtures = [...PREMIER_LEAGUE_DATA.fixtures];

        if (options.status === 'scheduled') {
            fixtures = fixtures.filter(f => f.status === 'scheduled');
        }

        setCache(cacheKey, fixtures);
        return fixtures;
    }

    /**
     * Get head-to-head data between two teams
     */
    async function getHeadToHead(team1Id, team2Id) {
        const minId = Math.min(team1Id, team2Id);
        const maxId = Math.max(team1Id, team2Id);
        const key = `${minId}-${maxId}`;

        const cacheKey = `h2h_${key}`;
        const cached = getCached(cacheKey);
        if (cached) return cached;

        if (CONFIG.API_KEY) {
            try {
                const data = await fetchFromApi(`/fixtures/headtohead?h2h=${team1Id}-${team2Id}&last=10`);
                if (data.response) {
                    setCache(cacheKey, data.response);
                    return data.response;
                }
            } catch (error) {
                console.log('Falling back to mock data for H2H');
            }
        }

        // Fallback to mock data
        const h2hData = PREMIER_LEAGUE_DATA.headToHead[key] || {
            matches: 0,
            team1Wins: 0,
            team2Wins: 0,
            draws: 0,
            recentMatches: [],
            avgGoalsPerMatch: 0,
            avgTeam1Goals: 0,
            avgTeam2Goals: 0
        };

        setCache(cacheKey, h2hData);
        return h2hData;
    }

    /**
     * Get team's recent form (last N matches)
     */
    async function getTeamForm(teamId, count = 5) {
        const team = await getTeamById(teamId);
        if (team && team.form) {
            return team.form.slice(0, count);
        }
        return [];
    }

    /**
     * Get players by team
     */
    async function getTeamPlayers(teamId) {
        return await getPlayers({ teamId: parseInt(teamId), sortBy: 'goals' });
    }

    /**
     * Search across teams and players
     */
    async function search(query) {
        const queryLower = query.toLowerCase();

        const teams = await getTeams();
        const players = await getPlayers();

        const matchedTeams = teams.filter(t =>
            t.name.toLowerCase().includes(queryLower) ||
            t.shortName.toLowerCase().includes(queryLower)
        );

        const matchedPlayers = players.filter(p =>
            p.name.toLowerCase().includes(queryLower) ||
            p.nationality.toLowerCase().includes(queryLower)
        );

        return {
            teams: matchedTeams.slice(0, 5),
            players: matchedPlayers.slice(0, 10)
        };
    }

    /**
     * Get team statistics comparison
     */
    async function compareTeams(team1Id, team2Id) {
        const [team1, team2] = await Promise.all([
            getTeamById(team1Id),
            getTeamById(team2Id)
        ]);

        if (!team1 || !team2) {
            throw new Error('One or both teams not found');
        }

        return {
            team1,
            team2,
            comparison: {
                possession: { team1: team1.stats.possession, team2: team2.stats.possession },
                shotsPerGame: { team1: team1.stats.shotsPerGame, team2: team2.stats.shotsPerGame },
                passAccuracy: { team1: team1.stats.passAccuracy, team2: team2.stats.passAccuracy },
                tacklesWon: { team1: team1.stats.tacklesWon, team2: team2.stats.tacklesWon },
                cleanSheets: { team1: team1.stats.cleanSheets, team2: team2.stats.cleanSheets },
                goalsScored: { team1: team1.goalsFor, team2: team2.goalsFor },
                goalsConceded: { team1: team1.goalsAgainst, team2: team2.goalsAgainst }
            }
        };
    }

    /**
     * Clear all cached data
     */
    function clearCache() {
        cache.clear();
    }

    /**
     * Get data source info
     */
    function getDataSource() {
        return {
            isLive: CONFIG.API_KEY !== null && CONFIG.API_KEY.length > 0,
            lastUpdated: PREMIER_LEAGUE_DATA.lastUpdated,
            season: PREMIER_LEAGUE_DATA.season,
            apiName: 'Football-Data.org'
        };
    }

    /**
     * Refresh all data (clear cache and refetch)
     */
    async function refreshData() {
        clearCache();
        await getStandings();
        await getTeams();
        return true;
    }

    // Public API
    return {
        setApiKey,
        hasApiKey,
        getTeams,
        getTeamById,
        getStandings,
        getPlayers,
        getPlayerById,
        getTopScorers,
        getTopAssists,
        getCleanSheetLeaders,
        getFixtures,
        getHeadToHead,
        getTeamForm,
        getTeamPlayers,
        search,
        compareTeams,
        clearCache,
        getDataSource,
        getLiveScores,
        getRecentResults,
        refreshData,
        // New exports for expanded data
        getAllNationalities,
        getTeamHistory,
        getPlayerLeaderboard
    };
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DataAPI;
}
