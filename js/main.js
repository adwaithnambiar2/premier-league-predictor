/**
 * Premier League Match Predictor - Main Application
 * Handles UI, navigation, rendering, and user interactions
 */

const App = (function() {
    // State management
    const state = {
        currentPage: 'home',
        selectedTeam: null,
        selectedPlayer: null,
        compareTeams: { home: null, away: null },
        comparePlayers: [],
        theme: localStorage.getItem('theme') || 'dark',
        favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
        charts: {}
    };

    // DOM Elements cache
    let elements = {};

    /**
     * Initialize the application
     */
    async function init() {
        cacheElements();
        setupEventListeners();
        applyTheme(state.theme);
        updateApiStatusIndicator();
        await loadInitialData();
        navigateTo('home');
    }

    /**
     * Update the API status indicator in header
     */
    function updateApiStatusIndicator() {
        const indicator = document.getElementById('api-indicator');
        const label = document.getElementById('api-label');
        if (!indicator || !label) return;

        const dataSource = DataAPI.getDataSource();
        if (dataSource.isLive) {
            indicator.className = 'api-indicator online';
            label.textContent = 'Live';
        } else {
            indicator.className = 'api-indicator offline';
            label.textContent = 'Mock';
        }
    }

    /**
     * Team slug mapping for CSS classes
     */
    const TEAM_SLUGS = {
        'Arsenal': 'arsenal',
        'Aston Villa': 'aston-villa',
        'Bournemouth': 'bournemouth',
        'AFC Bournemouth': 'bournemouth',
        'Brentford': 'brentford',
        'Brighton & Hove Albion': 'brighton',
        'Brighton': 'brighton',
        'Chelsea': 'chelsea',
        'Crystal Palace': 'crystal-palace',
        'Everton': 'everton',
        'Fulham': 'fulham',
        'Ipswich Town': 'ipswich',
        'Ipswich': 'ipswich',
        'Leicester City': 'leicester',
        'Leicester': 'leicester',
        'Liverpool': 'liverpool',
        'Manchester City': 'man-city',
        'Manchester United': 'man-united',
        'Newcastle United': 'newcastle',
        'Newcastle': 'newcastle',
        'Nottingham Forest': 'nottingham',
        'Southampton': 'southampton',
        'Tottenham Hotspur': 'tottenham',
        'Tottenham': 'tottenham',
        'West Ham United': 'west-ham',
        'West Ham': 'west-ham',
        'Wolverhampton Wanderers': 'wolves',
        'Wolves': 'wolves'
    };

    /**
     * Apply team color theme to the page
     */
    function applyTeamTheme(teamName) {
        const slug = TEAM_SLUGS[teamName] || '';
        const body = document.body;

        // Remove any existing team themes
        body.className = body.className.replace(/team-theme-\w+(-\w+)?/g, '').trim();

        if (slug) {
            body.classList.add(`team-theme-${slug}`);

            // Also set CSS variables directly for elements that need them
            const team = PREMIER_LEAGUE_DATA.teams.find(t => t.name === teamName);
            if (team) {
                document.documentElement.style.setProperty('--team-primary', team.primaryColor);
                document.documentElement.style.setProperty('--team-secondary', team.secondaryColor);
            }
        }
    }

    /**
     * Clear team theme
     */
    function clearTeamTheme() {
        const body = document.body;
        body.className = body.className.replace(/team-theme-\w+(-\w+)?/g, '').trim();
        document.documentElement.style.removeProperty('--team-primary');
        document.documentElement.style.removeProperty('--team-secondary');
    }

    /**
     * Cache frequently used DOM elements
     */
    function cacheElements() {
        elements = {
            mainContent: document.getElementById('main-content'),
            navLinks: document.querySelectorAll('.nav-link'),
            themeToggle: document.getElementById('theme-toggle'),
            searchInput: document.getElementById('search-input'),
            searchResults: document.getElementById('search-results'),
            mobileMenuBtn: document.getElementById('mobile-menu-btn'),
            mobileMenu: document.getElementById('mobile-menu'),
            loadingOverlay: document.getElementById('loading-overlay')
        };
    }

    /**
     * Setup event listeners
     */
    function setupEventListeners() {
        // Navigation
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.page;
                navigateTo(page);
                closeMobileMenu();
            });
        });

        // Theme toggle
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', toggleTheme);
        }

        // Search
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
            elements.searchInput.addEventListener('focus', () => {
                elements.searchResults.classList.add('active');
            });
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-container')) {
                    elements.searchResults.classList.remove('active');
                }
            });
        }

        // Mobile menu
        if (elements.mobileMenuBtn) {
            elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }

        // Keyboard navigation
        document.addEventListener('keydown', handleKeyboard);
    }

    /**
     * Navigate to a page
     */
    async function navigateTo(page, params = {}) {
        showLoading();
        state.currentPage = page;

        // Clear team theme for non-team pages
        if (page !== 'team' && page !== 'player') {
            clearTeamTheme();
        }

        // Update active nav link
        elements.navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === page);
        });

        // Update URL
        const url = params.id ? `#${page}/${params.id}` : `#${page}`;
        history.pushState({ page, params }, '', url);

        try {
            switch (page) {
                case 'home':
                    await renderHomePage();
                    break;
                case 'predict':
                    await renderPredictPage();
                    break;
                case 'standings':
                    await renderStandingsPage();
                    break;
                case 'teams':
                    await renderTeamsPage();
                    break;
                case 'team':
                    await renderTeamDetailPage(params.id);
                    break;
                case 'players':
                    await renderPlayersPage();
                    break;
                case 'player':
                    await renderPlayerDetailPage(params.id);
                    break;
                case 'h2h':
                    await renderH2HPage();
                    break;
                case 'fixtures':
                    await renderFixturesPage();
                    break;
                default:
                    await renderHomePage();
            }
        } catch (error) {
            console.error('Navigation error:', error);
            renderError('Failed to load page. Please try again.');
        }

        hideLoading();
        window.scrollTo(0, 0);
    }

    /**
     * Load initial data
     */
    async function loadInitialData() {
        try {
            await Promise.all([
                DataAPI.getTeams(),
                DataAPI.getStandings()
            ]);
        } catch (error) {
            console.error('Failed to load initial data:', error);
        }
    }

    /**
     * Render Home Page
     */
    async function renderHomePage() {
        const [standings, fixtures, leagueSummary] = await Promise.all([
            DataAPI.getStandings(),
            DataAPI.getFixtures({ status: 'scheduled' }),
            Stats.getLeagueSummary()
        ]);

        const topScorers = await DataAPI.getTopScorers(5);
        const upcomingFixtures = fixtures.slice(0, 5);

        elements.mainContent.innerHTML = `
            <div class="home-page">
                <section class="hero-section">
                    <div class="hero-content">
                        <h1 class="hero-title">Premier League<br><span class="gradient-text">Match Predictor</span></h1>
                        <p class="hero-subtitle">AI-powered predictions based on real statistics, form analysis, and historical data</p>
                        <div class="hero-actions">
                            <button class="btn btn-primary btn-lg" onclick="App.navigateTo('predict')">
                                <span class="btn-icon">&#9917;</span> Make Prediction
                            </button>
                            <button class="btn btn-secondary btn-lg" onclick="App.navigateTo('standings')">
                                View Standings
                            </button>
                        </div>
                    </div>
                    <div class="hero-stats">
                        <div class="hero-stat-card">
                            <span class="stat-value">${leagueSummary.totalGoals}</span>
                            <span class="stat-label">Goals Scored</span>
                        </div>
                        <div class="hero-stat-card">
                            <span class="stat-value">${leagueSummary.goalsPerMatch}</span>
                            <span class="stat-label">Goals/Match</span>
                        </div>
                        <div class="hero-stat-card">
                            <span class="stat-value">${leagueSummary.cleanSheets}</span>
                            <span class="stat-label">Clean Sheets</span>
                        </div>
                    </div>
                </section>

                <div class="home-grid">
                    <section class="card standings-preview">
                        <div class="card-header">
                            <h2>League Standings</h2>
                            <button class="btn btn-link" onclick="App.navigateTo('standings')">View All</button>
                        </div>
                        <div class="mini-table">
                            ${renderMiniStandings(standings.slice(0, 6))}
                        </div>
                    </section>

                    <section class="card fixtures-preview">
                        <div class="card-header">
                            <h2>Upcoming Fixtures</h2>
                            <button class="btn btn-link" onclick="App.navigateTo('fixtures')">View All</button>
                        </div>
                        <div class="fixtures-list">
                            ${await renderUpcomingFixtures(upcomingFixtures, standings)}
                        </div>
                    </section>

                    <section class="card top-scorers-preview">
                        <div class="card-header">
                            <h2>Top Scorers</h2>
                            <button class="btn btn-link" onclick="App.navigateTo('players')">View All</button>
                        </div>
                        <div class="scorers-list">
                            ${await renderTopScorers(topScorers)}
                        </div>
                    </section>

                    <section class="card quick-predict">
                        <div class="card-header">
                            <h2>Quick Prediction</h2>
                        </div>
                        <div class="quick-predict-form">
                            <select id="quick-home-team" class="team-select">
                                <option value="">Select Home Team</option>
                                ${standings.map(t => `<option value="${t.id}">${t.badge} ${t.name}</option>`).join('')}
                            </select>
                            <span class="vs-badge">VS</span>
                            <select id="quick-away-team" class="team-select">
                                <option value="">Select Away Team</option>
                                ${standings.map(t => `<option value="${t.id}">${t.badge} ${t.name}</option>`).join('')}
                            </select>
                            <button class="btn btn-primary" onclick="App.quickPredict()">Predict</button>
                        </div>
                        <div id="quick-predict-result"></div>
                    </section>
                </div>
            </div>
        `;
    }

    /**
     * Render Prediction Page
     */
    async function renderPredictPage() {
        const teams = await DataAPI.getTeams();

        elements.mainContent.innerHTML = `
            <div class="predict-page">
                <header class="page-header">
                    <h1>Match Predictor</h1>
                    <p>Select two teams to get our AI-powered match prediction</p>
                </header>

                <div class="predict-container">
                    <div class="team-selector home-team-selector">
                        <h3>Home Team</h3>
                        <div class="team-grid" id="home-team-grid">
                            ${teams.map(t => `
                                <button class="team-card ${state.compareTeams.home === t.id ? 'selected' : ''}"
                                    data-team-id="${t.id}"
                                    onclick="App.selectTeamForPrediction('home', ${t.id})"
                                    style="--team-color: ${t.primaryColor}">
                                    <span class="team-badge"><img src="${t.badge}" alt="${t.name}" onerror="this.style.display='none'"></span>
                                    <span class="team-name">${t.shortName}</span>
                                    <span class="team-position">${t.position}${getOrdinalSuffix(t.position)}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="vs-divider">
                        <span class="vs-circle">VS</span>
                    </div>

                    <div class="team-selector away-team-selector">
                        <h3>Away Team</h3>
                        <div class="team-grid" id="away-team-grid">
                            ${teams.map(t => `
                                <button class="team-card ${state.compareTeams.away === t.id ? 'selected' : ''}"
                                    data-team-id="${t.id}"
                                    onclick="App.selectTeamForPrediction('away', ${t.id})"
                                    style="--team-color: ${t.primaryColor}">
                                    <span class="team-badge"><img src="${t.badge}" alt="${t.name}" onerror="this.style.display='none'"></span>
                                    <span class="team-name">${t.shortName}</span>
                                    <span class="team-position">${t.position}${getOrdinalSuffix(t.position)}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="predict-action">
                    <button class="btn btn-primary btn-xl" id="predict-btn" onclick="App.runPrediction()" disabled>
                        <span class="btn-icon">&#128302;</span> Generate Prediction
                    </button>
                </div>

                <div id="prediction-result" class="prediction-result"></div>
            </div>
        `;

        updatePredictButton();
    }

    /**
     * Select team for prediction
     */
    function selectTeamForPrediction(side, teamId) {
        state.compareTeams[side] = teamId;

        // Update UI
        const gridId = side === 'home' ? 'home-team-grid' : 'away-team-grid';
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.querySelectorAll('.team-card').forEach(card => {
                card.classList.toggle('selected', parseInt(card.dataset.teamId) === teamId);
            });
        }

        updatePredictButton();
    }

    /**
     * Update predict button state
     */
    function updatePredictButton() {
        const btn = document.getElementById('predict-btn');
        if (btn) {
            const canPredict = state.compareTeams.home && state.compareTeams.away &&
                state.compareTeams.home !== state.compareTeams.away;
            btn.disabled = !canPredict;
        }
    }

    /**
     * Run prediction
     */
    async function runPrediction() {
        const { home, away } = state.compareTeams;
        if (!home || !away) return;

        const resultDiv = document.getElementById('prediction-result');
        resultDiv.innerHTML = '<div class="loading-spinner"></div>';

        try {
            const prediction = await Predictor.predictMatch(home, away);
            renderPredictionResult(prediction);
        } catch (error) {
            resultDiv.innerHTML = `<div class="error-message">Failed to generate prediction: ${error.message}</div>`;
        }
    }

    /**
     * Render prediction result
     */
    function renderPredictionResult(prediction) {
        const resultDiv = document.getElementById('prediction-result');
        const explanation = Predictor.getExplanation(prediction);

        resultDiv.innerHTML = `
            <div class="prediction-card animate-in">
                <div class="prediction-header">
                    <div class="prediction-team home">
                        <span class="team-badge large"><img src="${prediction.homeTeam.badge}" alt="${prediction.homeTeam.name}" onerror="this.style.display='none'"></span>
                        <span class="team-name">${prediction.homeTeam.name}</span>
                        <span class="team-prob">${prediction.prediction.homeWinProbability}%</span>
                    </div>

                    <div class="prediction-score">
                        <div class="predicted-scoreline">
                            <span class="score home">${prediction.prediction.predictedScore.home}</span>
                            <span class="score-divider">-</span>
                            <span class="score away">${prediction.prediction.predictedScore.away}</span>
                        </div>
                        <div class="prediction-outcome ${prediction.prediction.mostLikelyOutcome.toLowerCase().replace(' ', '-')}">
                            ${prediction.prediction.mostLikelyOutcome}
                        </div>
                        <div class="draw-prob">Draw: ${prediction.prediction.drawProbability}%</div>
                    </div>

                    <div class="prediction-team away">
                        <span class="team-badge large"><img src="${prediction.awayTeam.badge}" alt="${prediction.awayTeam.name}" onerror="this.style.display='none'"></span>
                        <span class="team-name">${prediction.awayTeam.name}</span>
                        <span class="team-prob">${prediction.prediction.awayWinProbability}%</span>
                    </div>
                </div>

                <div class="probability-bar">
                    <div class="prob-segment home" style="width: ${prediction.prediction.homeWinProbability}%"></div>
                    <div class="prob-segment draw" style="width: ${prediction.prediction.drawProbability}%"></div>
                    <div class="prob-segment away" style="width: ${prediction.prediction.awayWinProbability}%"></div>
                </div>

                <div class="confidence-meter">
                    <span class="confidence-label">Confidence Level</span>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${prediction.prediction.confidence}%"></div>
                    </div>
                    <span class="confidence-value">${prediction.prediction.confidence}%</span>
                </div>

                <div class="prediction-details">
                    <div class="detail-section">
                        <h4>Expected Goals (xG)</h4>
                        <div class="xg-display">
                            <span class="xg home">${prediction.prediction.expectedGoals.home}</span>
                            <span class="xg-label">xG</span>
                            <span class="xg away">${prediction.prediction.expectedGoals.away}</span>
                        </div>
                    </div>

                    <div class="detail-section factors">
                        <h4>Prediction Factors</h4>
                        <div class="factors-grid">
                            ${renderPredictionFactors(prediction)}
                        </div>
                    </div>

                    <div class="detail-section explanation">
                        <h4>Analysis</h4>
                        <p>${explanation}</p>
                    </div>

                    ${prediction.headToHead && prediction.headToHead.matches > 0 ? `
                        <div class="detail-section h2h-mini">
                            <h4>Head to Head (Last ${prediction.headToHead.recentMatches?.length || 0} Matches)</h4>
                            <div class="h2h-stats">
                                <span class="h2h-stat">${prediction.factors.headToHead.home}% ${prediction.homeTeam.shortName}</span>
                                <span class="h2h-stat">${100 - parseInt(prediction.factors.headToHead.home) - parseInt(prediction.factors.headToHead.away)}% Draw</span>
                                <span class="h2h-stat">${prediction.factors.headToHead.away}% ${prediction.awayTeam.shortName}</span>
                            </div>
                        </div>
                    ` : ''}
                </div>

                <div class="prediction-actions">
                    <button class="btn btn-secondary" onclick="App.sharePrediction()">
                        <span class="btn-icon">&#128279;</span> Share
                    </button>
                    <button class="btn btn-secondary" onclick="App.navigateTo('h2h')">
                        View Full H2H Analysis
                    </button>
                </div>
            </div>
        `;

        // Animate probability bars
        setTimeout(() => {
            resultDiv.querySelector('.prediction-card').classList.add('visible');
        }, 100);
    }

    /**
     * Render prediction factors
     */
    function renderPredictionFactors(prediction) {
        const factors = prediction.factors;
        return `
            <div class="factor-row">
                <span class="factor-label">Form (${factors.form.weight})</span>
                <div class="factor-bar-container">
                    <div class="factor-bar home" style="width: ${factors.form.home}%"></div>
                    <div class="factor-bar away" style="width: ${factors.form.away}%"></div>
                </div>
                <span class="factor-values">${factors.form.home} - ${factors.form.away}</span>
            </div>
            <div class="factor-row">
                <span class="factor-label">Home/Away (${factors.homeAdvantage.weight})</span>
                <div class="factor-bar-container">
                    <div class="factor-bar home" style="width: ${factors.homeAdvantage.home}%"></div>
                    <div class="factor-bar away" style="width: ${factors.homeAdvantage.away}%"></div>
                </div>
                <span class="factor-values">${factors.homeAdvantage.home} - ${factors.homeAdvantage.away}</span>
            </div>
            <div class="factor-row">
                <span class="factor-label">Position</span>
                <span class="factor-values">${factors.leaguePosition.home}${getOrdinalSuffix(factors.leaguePosition.home)} - ${factors.leaguePosition.away}${getOrdinalSuffix(factors.leaguePosition.away)}</span>
            </div>
            <div class="factor-row">
                <span class="factor-label">Goals/Game</span>
                <span class="factor-values">${factors.attack.home} - ${factors.attack.away}</span>
            </div>
            <div class="factor-row">
                <span class="factor-label">Conceded/Game</span>
                <span class="factor-values">${factors.defense.home} - ${factors.defense.away}</span>
            </div>
        `;
    }

    /**
     * Quick predict from home page
     */
    async function quickPredict() {
        const homeSelect = document.getElementById('quick-home-team');
        const awaySelect = document.getElementById('quick-away-team');
        const resultDiv = document.getElementById('quick-predict-result');

        const homeId = parseInt(homeSelect.value);
        const awayId = parseInt(awaySelect.value);

        if (!homeId || !awayId || homeId === awayId) {
            resultDiv.innerHTML = '<p class="error-text">Please select two different teams</p>';
            return;
        }

        resultDiv.innerHTML = '<div class="loading-spinner small"></div>';

        try {
            const prediction = await Predictor.predictMatch(homeId, awayId);
            resultDiv.innerHTML = `
                <div class="quick-prediction-result">
                    <div class="qp-teams">
                        <span>${prediction.homeTeam.badge} ${prediction.homeTeam.shortName}</span>
                        <span class="qp-score">${prediction.prediction.predictedScore.home} - ${prediction.prediction.predictedScore.away}</span>
                        <span>${prediction.awayTeam.shortName} ${prediction.awayTeam.badge}</span>
                    </div>
                    <div class="qp-probs">
                        <span class="prob home">${prediction.prediction.homeWinProbability}%</span>
                        <span class="prob draw">${prediction.prediction.drawProbability}%</span>
                        <span class="prob away">${prediction.prediction.awayWinProbability}%</span>
                    </div>
                    <button class="btn btn-link" onclick="App.navigateTo('predict')">Detailed Analysis</button>
                </div>
            `;
        } catch (error) {
            resultDiv.innerHTML = `<p class="error-text">${error.message}</p>`;
        }
    }

    /**
     * Render Standings Page
     */
    async function renderStandingsPage() {
        const standings = await DataAPI.getStandings();

        elements.mainContent.innerHTML = `
            <div class="standings-page">
                <header class="page-header">
                    <h1>League Standings</h1>
                    <p>2024-25 Premier League Season</p>
                </header>

                <div class="standings-legend">
                    <span class="legend-item champions"><span class="legend-dot"></span> Champions League</span>
                    <span class="legend-item europa"><span class="legend-dot"></span> Europa League</span>
                    <span class="legend-item conference"><span class="legend-dot"></span> Conference League</span>
                    <span class="legend-item relegation"><span class="legend-dot"></span> Relegation</span>
                </div>

                <div class="standings-table-container">
                    <table class="standings-table">
                        <thead>
                            <tr>
                                <th class="col-pos">#</th>
                                <th class="col-team">Team</th>
                                <th class="col-played">P</th>
                                <th class="col-won">W</th>
                                <th class="col-drawn">D</th>
                                <th class="col-lost">L</th>
                                <th class="col-gf">GF</th>
                                <th class="col-ga">GA</th>
                                <th class="col-gd">GD</th>
                                <th class="col-points">Pts</th>
                                <th class="col-form">Form</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${standings.map(team => `
                                <tr class="team-row ${Stats.getPositionClass(team.position)}" onclick="App.navigateTo('team', {id: ${team.id}})">
                                    <td class="col-pos">${team.position}</td>
                                    <td class="col-team">
                                        <span class="team-badge"><img src="${team.badge}" alt="${team.name}" onerror="this.style.display='none'"></span>
                                        <span class="team-name">${team.name}</span>
                                    </td>
                                    <td class="col-played">${team.played}</td>
                                    <td class="col-won">${team.won}</td>
                                    <td class="col-drawn">${team.drawn}</td>
                                    <td class="col-lost">${team.lost}</td>
                                    <td class="col-gf">${team.goalsFor}</td>
                                    <td class="col-ga">${team.goalsAgainst}</td>
                                    <td class="col-gd ${team.goalDifference > 0 ? 'positive' : team.goalDifference < 0 ? 'negative' : ''}">${team.goalDifference > 0 ? '+' : ''}${team.goalDifference}</td>
                                    <td class="col-points"><strong>${team.points}</strong></td>
                                    <td class="col-form">${Stats.getFormHTML(team.form)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    /**
     * Render Teams Page
     */
    async function renderTeamsPage() {
        const teams = await DataAPI.getTeams();

        elements.mainContent.innerHTML = `
            <div class="teams-page">
                <header class="page-header">
                    <h1>All Teams</h1>
                    <p>Click on a team for detailed statistics</p>
                </header>

                <div class="teams-grid">
                    ${teams.map(team => `
                        <div class="team-card-large" onclick="App.navigateTo('team', {id: ${team.id}})" style="--team-color: ${team.primaryColor}">
                            <div class="team-card-header">
                                <span class="team-badge xlarge"><img src="${team.badge}" alt="${team.name}" onerror="this.style.display='none'"></span>
                                <div class="team-info">
                                    <h3>${team.name}</h3>
                                    <p>${team.stadium}</p>
                                </div>
                            </div>
                            <div class="team-card-stats">
                                <div class="stat">
                                    <span class="stat-value">${team.position}${getOrdinalSuffix(team.position)}</span>
                                    <span class="stat-label">Position</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">${team.points}</span>
                                    <span class="stat-label">Points</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">${team.goalsFor}</span>
                                    <span class="stat-label">Goals</span>
                                </div>
                            </div>
                            <div class="team-form">
                                ${Stats.getFormHTML(team.form)}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Render Team Detail Page
     */
    async function renderTeamDetailPage(teamId) {
        const [team, players] = await Promise.all([
            DataAPI.getTeamById(teamId),
            DataAPI.getTeamPlayers(teamId)
        ]);

        if (!team) {
            renderError('Team not found');
            return;
        }

        // Apply team theme for global styling
        applyTeamTheme(team.name);

        const offRating = Stats.offensiveRating(team);
        const defRating = Stats.defensiveRating(team);
        const homeAway = Stats.homeAwayRatio(team);

        elements.mainContent.innerHTML = `
            <div class="team-detail-page" style="--team-color: ${team.primaryColor}; --team-secondary: ${team.secondaryColor}">
                <header class="team-header">
                    <button class="btn btn-back" onclick="App.navigateTo('teams')">&#8592; Back</button>
                    <div class="team-hero">
                        <span class="team-badge hero-badge"><img src="${team.badge}" alt="${team.name}" onerror="this.style.display='none'"></span>
                        <div class="team-hero-info">
                            <h1>${team.name}</h1>
                            <p class="team-meta">${team.stadium} | Est. ${team.founded} | Manager: ${team.manager}</p>
                        </div>
                    </div>
                </header>

                <div class="team-overview-grid">
                    <div class="overview-card position-card">
                        <h3>League Position</h3>
                        <div class="big-stat">${team.position}<sup>${getOrdinalSuffix(team.position)}</sup></div>
                        <div class="stat-details">
                            <span>${team.points} pts</span>
                            <span>${team.played} played</span>
                        </div>
                    </div>

                    <div class="overview-card record-card">
                        <h3>Season Record</h3>
                        <div class="record-grid">
                            <div class="record-item won"><span>${team.won}</span> Won</div>
                            <div class="record-item drawn"><span>${team.drawn}</span> Drawn</div>
                            <div class="record-item lost"><span>${team.lost}</span> Lost</div>
                        </div>
                    </div>

                    <div class="overview-card goals-card">
                        <h3>Goals</h3>
                        <div class="goals-display">
                            <div class="goals-for">
                                <span class="goals-value">${team.goalsFor}</span>
                                <span class="goals-label">Scored</span>
                            </div>
                            <div class="goals-diff ${team.goalDifference >= 0 ? 'positive' : 'negative'}">
                                ${team.goalDifference >= 0 ? '+' : ''}${team.goalDifference}
                            </div>
                            <div class="goals-against">
                                <span class="goals-value">${team.goalsAgainst}</span>
                                <span class="goals-label">Conceded</span>
                            </div>
                        </div>
                    </div>

                    <div class="overview-card form-card">
                        <h3>Recent Form</h3>
                        <div class="form-large">${Stats.getFormHTML(team.form)}</div>
                        <p class="form-summary">${Stats.formPoints(team.form)} points from last ${team.form.length} games</p>
                    </div>
                </div>

                <div class="team-stats-section">
                    <h2>Detailed Statistics</h2>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>Attack Rating</h4>
                                <span class="rating-badge">${offRating}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill attack" style="width: ${offRating}%"></div>
                            </div>
                            <div class="stat-details">
                                <span>${Stats.goalsPerGame(team)} goals/game</span>
                                <span>${team.stats.shotsPerGame} shots/game</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <div class="stat-header">
                                <h4>Defense Rating</h4>
                                <span class="rating-badge">${defRating}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill defense" style="width: ${defRating}%"></div>
                            </div>
                            <div class="stat-details">
                                <span>${Stats.goalsConcededPerGame(team)} conceded/game</span>
                                <span>${team.stats.cleanSheets} clean sheets</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <h4>Possession</h4>
                            <div class="circular-progress" data-value="${team.stats.possession}">
                                <span class="progress-value">${team.stats.possession}%</span>
                            </div>
                        </div>

                        <div class="stat-card">
                            <h4>Pass Accuracy</h4>
                            <div class="circular-progress" data-value="${team.stats.passAccuracy}">
                                <span class="progress-value">${team.stats.passAccuracy}%</span>
                            </div>
                        </div>
                    </div>

                    <div class="home-away-section">
                        <h3>Home vs Away</h3>
                        <div class="home-away-grid">
                            <div class="venue-card home">
                                <h4>Home</h4>
                                <div class="venue-stats">
                                    <span class="venue-record">${team.homeRecord.won}W ${team.homeRecord.drawn}D ${team.homeRecord.lost}L</span>
                                    <span class="venue-goals">${team.homeRecord.goalsFor} scored, ${team.homeRecord.goalsAgainst} conceded</span>
                                    <span class="venue-ppg">${homeAway.home} pts/game</span>
                                </div>
                            </div>
                            <div class="venue-card away">
                                <h4>Away</h4>
                                <div class="venue-stats">
                                    <span class="venue-record">${team.awayRecord.won}W ${team.awayRecord.drawn}D ${team.awayRecord.lost}L</span>
                                    <span class="venue-goals">${team.awayRecord.goalsFor} scored, ${team.awayRecord.goalsAgainst} conceded</span>
                                    <span class="venue-ppg">${homeAway.away} pts/game</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="additional-stats">
                        <h3>Match Statistics</h3>
                        <div class="stats-table">
                            <div class="stat-row"><span>Shots on Target</span><span>${team.stats.shotsOnTarget}</span></div>
                            <div class="stat-row"><span>Tackles Won</span><span>${team.stats.tacklesWon}</span></div>
                            <div class="stat-row"><span>Interceptions</span><span>${team.stats.interceptions}</span></div>
                            <div class="stat-row"><span>Corners</span><span>${team.stats.corners}</span></div>
                            <div class="stat-row"><span>Fouls</span><span>${team.stats.fouls}</span></div>
                            <div class="stat-row"><span>Offsides</span><span>${team.stats.offsides}</span></div>
                            <div class="stat-row"><span>Expected Goals (xG)</span><span>${team.stats.xG}</span></div>
                            <div class="stat-row"><span>Expected Goals Against (xGA)</span><span>${team.stats.xGA}</span></div>
                        </div>
                    </div>
                </div>

                <div class="team-players-section">
                    <h2>Squad</h2>
                    <div class="players-table-container">
                        <table class="players-table">
                            <thead>
                                <tr>
                                    <th>Player</th>
                                    <th>Position</th>
                                    <th>Apps</th>
                                    <th>Goals</th>
                                    <th>Assists</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${players.map(p => `
                                    <tr onclick="App.navigateTo('player', {id: ${p.id}})">
                                        <td>
                                            <span class="player-name">${p.name}</span>
                                            <span class="player-nationality">${p.nationality}</span>
                                        </td>
                                        <td><span class="position-badge ${p.position.toLowerCase()}">${p.position}</span></td>
                                        <td>${p.appearances}</td>
                                        <td>${p.goals}</td>
                                        <td>${p.assists}</td>
                                        <td><span class="rating-badge">${Stats.calculatePlayerRating(p, p.position)}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                ${renderTeamHistorySection(teamId, team)}
            </div>
        `;

        initCircularProgress();
    }

    /**
     * Render Team History Section
     */
    function renderTeamHistorySection(teamId, team) {
        const history = typeof TEAM_HISTORY !== 'undefined' ? TEAM_HISTORY[teamId] : null;
        if (!history) return '';

        const trophyIcons = {
            premierLeague: '🏆',
            faCup: '🏆',
            leagueCup: '🏆',
            championsLeague: '⭐',
            communityShield: '🛡️'
        };

        const trophyNames = {
            premierLeague: 'Premier League',
            faCup: 'FA Cup',
            leagueCup: 'League Cup',
            championsLeague: 'Champions League',
            communityShield: 'Community Shield'
        };

        // Render trophies
        const renderTrophies = () => {
            const trophyList = Object.entries(history.trophies || {})
                .filter(([, data]) => data.count > 0)
                .map(([key, data]) => `
                    <div class="trophy-item">
                        <span class="trophy-icon">${trophyIcons[key] || '🏆'}</span>
                        <div class="trophy-details">
                            <div class="trophy-name">${trophyNames[key] || key}</div>
                            <div class="trophy-years">${data.years.slice(-5).join(', ') || 'N/A'}</div>
                        </div>
                        <span class="trophy-count">${data.count}</span>
                    </div>
                `).join('');

            if (!trophyList) return '<p style="color: var(--text-muted); text-align: center;">No major trophies</p>';
            return trophyList;
        };

        // Render managers
        const renderManagers = () => {
            return (history.managers || []).slice(0, 5).map((m, i) => `
                <div class="manager-item ${m.to === null ? 'current' : ''}">
                    <div>
                        <div class="manager-name">${m.name}</div>
                        <div class="manager-tenure">${m.from} - ${m.to || 'Present'}</div>
                    </div>
                    ${m.trophies > 0 ? `<div class="manager-trophies">🏆 ${m.trophies}</div>` : ''}
                </div>
            `).join('');
        };

        // Render season history
        const renderSeasonHistory = () => {
            return (history.seasonHistory || []).slice(0, 5).map(s => {
                const positionClass = s.position <= 4 ? 'top4' : (s.position >= 18 ? 'relegation' : 'mid');
                const barWidth = Math.max(10, ((21 - s.position) / 20) * 100);
                return `
                    <div class="season-bar-item">
                        <span class="season-label">${s.season}</span>
                        <div class="season-bar">
                            <div class="season-bar-fill" style="width: ${barWidth}%">${s.points} pts</div>
                        </div>
                        <span class="season-position ${positionClass}">${s.position}${getOrdinalSuffix(s.position)}</span>
                    </div>
                `;
            }).join('');
        };

        // Render 5-year stats
        const stats5Year = history.stats5Year || {};

        return `
            <div class="team-history-section">
                <h2>Club History & Records</h2>
                <div class="history-grid">
                    <div class="trophy-cabinet">
                        <h3>🏆 Trophy Cabinet</h3>
                        <div class="trophy-list">
                            ${renderTrophies()}
                        </div>
                    </div>

                    <div class="manager-history">
                        <h3>Recent Managers</h3>
                        <div class="manager-list">
                            ${renderManagers()}
                        </div>
                    </div>

                    <div class="season-history-chart">
                        <h3>Season-by-Season Performance</h3>
                        <div class="season-bars">
                            ${renderSeasonHistory()}
                        </div>
                    </div>

                    <div class="five-year-stats">
                        <h3>5-Year Statistical Trends</h3>
                        <div class="stats-summary-grid">
                            <div class="stat-summary-item">
                                <span class="stat-big">${stats5Year.avgPosition?.toFixed(1) || 'N/A'}</span>
                                <span class="stat-desc">Avg Position</span>
                            </div>
                            <div class="stat-summary-item">
                                <span class="stat-big">${stats5Year.avgPoints?.toFixed(0) || 'N/A'}</span>
                                <span class="stat-desc">Avg Points</span>
                            </div>
                            <div class="stat-summary-item">
                                <span class="stat-big">${stats5Year.totalGoals || 'N/A'}</span>
                                <span class="stat-desc">Total Goals</span>
                            </div>
                            <div class="stat-summary-item">
                                <span class="stat-big">${stats5Year.totalConceded || 'N/A'}</span>
                                <span class="stat-desc">Total Conceded</span>
                            </div>
                            <div class="stat-summary-item">
                                <span class="stat-big">${stats5Year.winRate?.toFixed(1) || 'N/A'}%</span>
                                <span class="stat-desc">Win Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render Players Page
     */
    async function renderPlayersPage() {
        const [players, teams, nationalities] = await Promise.all([
            DataAPI.getPlayers({ sortBy: 'goals' }),
            DataAPI.getTeams(),
            DataAPI.getAllNationalities()
        ]);

        const teamMap = new Map(teams.map(t => [t.id, t]));
        const totalPlayers = players.length;

        // Calculate aggregate stats
        const totalGoals = players.reduce((sum, p) => sum + (p.goals || 0), 0);
        const totalAssists = players.reduce((sum, p) => sum + (p.assists || 0), 0);

        elements.mainContent.innerHTML = `
            <div class="players-page players-page-enhanced">
                <div class="players-hero">
                    <h1>Premier League Players</h1>
                    <p>${totalPlayers} players across all 20 Premier League clubs</p>
                    <div class="players-stats-bar">
                        <div class="players-stat-item">
                            <span class="stat-num">${totalPlayers}</span>
                            <span class="stat-text">Players</span>
                        </div>
                        <div class="players-stat-item">
                            <span class="stat-num">${totalGoals}</span>
                            <span class="stat-text">Goals</span>
                        </div>
                        <div class="players-stat-item">
                            <span class="stat-num">${totalAssists}</span>
                            <span class="stat-text">Assists</span>
                        </div>
                        <div class="players-stat-item">
                            <span class="stat-num">20</span>
                            <span class="stat-text">Teams</span>
                        </div>
                    </div>
                </div>

                <div class="player-search-enhanced">
                    <div class="search-wrapper">
                        <input type="text" id="filter-search" class="player-search-input" placeholder="Search players by name, team, or nationality..." oninput="App.filterPlayers()">
                    </div>
                    <div class="view-toggle">
                        <button class="active" data-view="table" onclick="App.switchPlayerView('table')" title="Table View">📋</button>
                        <button data-view="cards" onclick="App.switchPlayerView('cards')" title="Card View">🃏</button>
                        <button data-view="rosters" onclick="App.switchPlayerView('rosters')" title="Team Rosters">👥</button>
                    </div>
                </div>

                <div class="players-filters">
                    <div class="filter-group">
                        <label>Position</label>
                        <select id="filter-position" onchange="App.filterPlayers()">
                            <option value="">All Positions</option>
                            <option value="Goalkeeper">Goalkeeper</option>
                            <option value="Defender">Defender</option>
                            <option value="Midfielder">Midfielder</option>
                            <option value="Forward">Forward</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Team</label>
                        <select id="filter-team" onchange="App.filterPlayers()">
                            <option value="">All Teams</option>
                            ${teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Nationality</label>
                        <select id="filter-nationality" onchange="App.filterPlayers()">
                            <option value="">All Nationalities</option>
                            ${nationalities.map(n => `<option value="${n}">${n}</option>`).join('')}
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Sort By</label>
                        <select id="filter-sort" onchange="App.filterPlayers()">
                            <option value="goals">Goals</option>
                            <option value="assists">Assists</option>
                            <option value="appearances">Appearances</option>
                            <option value="minutesPlayed">Minutes Played</option>
                            <option value="shotAccuracy">Shot Accuracy</option>
                            <option value="passCompletion">Pass Completion</option>
                            <option value="tackles">Tackles</option>
                            <option value="interceptions">Interceptions</option>
                            <option value="yellowCards">Yellow Cards</option>
                            <option value="cleanSheets">Clean Sheets</option>
                        </select>
                    </div>
                </div>

                <div class="stat-tabs">
                    <button class="stat-tab active" data-tab="all" onclick="App.switchPlayerTab('all')">All Players</button>
                    <button class="stat-tab" data-tab="scorers" onclick="App.switchPlayerTab('scorers')">Top Scorers</button>
                    <button class="stat-tab" data-tab="assists" onclick="App.switchPlayerTab('assists')">Top Assists</button>
                    <button class="stat-tab" data-tab="keepers" onclick="App.switchPlayerTab('keepers')">Goalkeepers</button>
                </div>

                <div id="players-count" class="players-count">Showing ${players.length} players</div>

                <div id="players-content" class="players-content">
                    ${renderPlayersTable(players, teamMap)}
                </div>
            </div>
        `;
    }

    /**
     * Switch player view mode
     */
    async function switchPlayerView(view) {
        // Update toggle buttons
        document.querySelectorAll('.view-toggle button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });

        const content = document.getElementById('players-content');
        const [players, teams] = await Promise.all([
            DataAPI.getPlayers({ sortBy: 'goals' }),
            DataAPI.getTeams()
        ]);
        const teamMap = new Map(teams.map(t => [t.id, t]));

        if (view === 'rosters') {
            content.innerHTML = renderTeamRosters(teams, players);
        } else if (view === 'cards') {
            content.innerHTML = renderPlayersCards(players, teamMap);
        } else {
            content.innerHTML = renderPlayersTable(players, teamMap);
        }
    }

    /**
     * Render team rosters view
     */
    function renderTeamRosters(teams, players) {
        return `
            <div class="team-rosters-grid">
                ${teams.sort((a, b) => a.position - b.position).map(team => {
                    const teamPlayers = players.filter(p => p.teamId === team.id);
                    const goalkeepers = teamPlayers.filter(p => p.position === 'Goalkeeper');
                    const defenders = teamPlayers.filter(p => p.position === 'Defender');
                    const midfielders = teamPlayers.filter(p => p.position === 'Midfielder');
                    const forwards = teamPlayers.filter(p => p.position === 'Forward');

                    return `
                        <div class="team-roster-card" style="--team-color: ${team.primaryColor}">
                            <div class="team-roster-header" style="background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor || team.primaryColor})">
                                <img src="${team.badge}" alt="${team.name}" onerror="this.style.display='none'">
                                <div>
                                    <div class="team-name">${team.name}</div>
                                    <div class="team-position">${team.position}${getOrdinalSuffix(team.position)} - ${teamPlayers.length} players</div>
                                </div>
                            </div>
                            <div class="roster-positions">
                                ${goalkeepers.length > 0 ? `
                                    <div class="roster-position-group">
                                        <h4>Goalkeepers (${goalkeepers.length})</h4>
                                        <div class="roster-players">
                                            ${goalkeepers.map(p => `
                                                <span class="roster-player" onclick="App.navigateTo('player', {id: ${p.id}})">
                                                    <span class="player-number">${p.number || ''}</span>
                                                    ${p.name}
                                                </span>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                                ${defenders.length > 0 ? `
                                    <div class="roster-position-group">
                                        <h4>Defenders (${defenders.length})</h4>
                                        <div class="roster-players">
                                            ${defenders.map(p => `
                                                <span class="roster-player" onclick="App.navigateTo('player', {id: ${p.id}})">
                                                    <span class="player-number">${p.number || ''}</span>
                                                    ${p.name}
                                                </span>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                                ${midfielders.length > 0 ? `
                                    <div class="roster-position-group">
                                        <h4>Midfielders (${midfielders.length})</h4>
                                        <div class="roster-players">
                                            ${midfielders.map(p => `
                                                <span class="roster-player" onclick="App.navigateTo('player', {id: ${p.id}})">
                                                    <span class="player-number">${p.number || ''}</span>
                                                    ${p.name}
                                                </span>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                                ${forwards.length > 0 ? `
                                    <div class="roster-position-group">
                                        <h4>Forwards (${forwards.length})</h4>
                                        <div class="roster-players">
                                            ${forwards.map(p => `
                                                <span class="roster-player" onclick="App.navigateTo('player', {id: ${p.id}})">
                                                    <span class="player-number">${p.number || ''}</span>
                                                    ${p.name}
                                                </span>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    /**
     * Render players as cards
     */
    function renderPlayersCards(players, teamMap) {
        return `
            <div class="players-cards-grid">
                ${players.slice(0, 50).map(p => {
                    const team = teamMap.get(p.teamId);
                    return `
                        <div class="player-card-enhanced" style="--team-color: ${team?.primaryColor || 'var(--accent-primary)'}" onclick="App.navigateTo('player', {id: ${p.id}})">
                            <div class="player-card-header">
                                <span class="player-card-number">${p.number || '#'}</span>
                                <div class="player-card-info">
                                    <h3>${p.name}</h3>
                                    <span class="player-team">${team?.name || 'Unknown'}</span>
                                </div>
                            </div>
                            <div class="player-card-stats">
                                <div class="player-card-stat">
                                    <span class="stat-val">${p.goals || 0}</span>
                                    <span class="stat-label">Goals</span>
                                </div>
                                <div class="player-card-stat">
                                    <span class="stat-val">${p.assists || 0}</span>
                                    <span class="stat-label">Assists</span>
                                </div>
                                <div class="player-card-stat">
                                    <span class="stat-val">${p.appearances || 0}</span>
                                    <span class="stat-label">Apps</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
            ${players.length > 50 ? `<p style="text-align: center; margin-top: 1rem; color: var(--text-muted);">Showing top 50 players. Use filters to narrow down results.</p>` : ''}
        `;
    }

    /**
     * Render players table
     */
    function renderPlayersTable(players, teamMap) {
        return `
            <table class="players-table full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Apps</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>Mins</th>
                        <th>Shot %</th>
                        <th>Pass %</th>
                        <th>Cards</th>
                    </tr>
                </thead>
                <tbody>
                    ${players.map((p, i) => {
                        const team = teamMap.get(p.teamId);
                        return `
                            <tr onclick="App.navigateTo('player', {id: ${p.id}})">
                                <td>${i + 1}</td>
                                <td>
                                    <div class="player-cell">
                                        <span class="player-name">${p.name}</span>
                                        <span class="player-nationality">${p.nationality}</span>
                                    </div>
                                </td>
                                <td><span class="team-badge small">${team ? `<img src="${team.badge}" alt="${team.name}" onerror="this.style.display='none'">` : ''}</span> ${team ? team.shortName : ''}</td>
                                <td><span class="position-badge ${p.position.toLowerCase()}">${p.position.substring(0, 3)}</span></td>
                                <td>${p.appearances}</td>
                                <td class="highlight">${p.goals}</td>
                                <td class="highlight">${p.assists}</td>
                                <td>${p.minutesPlayed}</td>
                                <td>${p.shotAccuracy}%</td>
                                <td>${p.passCompletion}%</td>
                                <td>
                                    <span class="card-count yellow">${p.yellowCards}</span>
                                    ${p.redCards > 0 ? `<span class="card-count red">${p.redCards}</span>` : ''}
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    /**
     * Filter players
     */
    async function filterPlayers() {
        const position = document.getElementById('filter-position').value;
        const teamId = document.getElementById('filter-team').value;
        const sortBy = document.getElementById('filter-sort').value;
        const search = document.getElementById('filter-search').value;

        const filters = { sortBy };
        if (position) filters.position = position;
        if (teamId) filters.teamId = parseInt(teamId);
        if (search) filters.search = search;

        const [players, teams] = await Promise.all([
            DataAPI.getPlayers(filters),
            DataAPI.getTeams()
        ]);

        const teamMap = new Map(teams.map(t => [t.id, t]));
        const content = document.getElementById('players-content');
        content.innerHTML = renderPlayersTable(players, teamMap);
    }

    /**
     * Switch player stats tab
     */
    async function switchPlayerTab(tab) {
        document.querySelectorAll('.stat-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.tab === tab);
        });

        const content = document.getElementById('players-content');
        const teams = await DataAPI.getTeams();
        const teamMap = new Map(teams.map(t => [t.id, t]));

        let players;
        switch (tab) {
            case 'scorers':
                players = await DataAPI.getTopScorers(30);
                break;
            case 'assists':
                players = await DataAPI.getTopAssists(30);
                break;
            case 'keepers':
                players = await DataAPI.getCleanSheetLeaders(20);
                break;
            default:
                players = await DataAPI.getPlayers({ sortBy: 'goals' });
        }

        content.innerHTML = renderPlayersTable(players, teamMap);
    }

    /**
     * Render Player Detail Page
     */
    async function renderPlayerDetailPage(playerId) {
        const [player, teams] = await Promise.all([
            DataAPI.getPlayerById(playerId),
            DataAPI.getTeams()
        ]);

        if (!player) {
            renderError('Player not found');
            return;
        }

        const team = teams.find(t => t.id === player.teamId);

        // Apply team theme for the player's team
        if (team) {
            applyTeamTheme(team.name);
        }

        const rating = Stats.calculatePlayerRating(player, player.position);

        elements.mainContent.innerHTML = `
            <div class="player-detail-page" style="--team-color: ${team ? team.primaryColor : '#38003c'}">
                <header class="player-header">
                    <button class="btn btn-back" onclick="App.navigateTo('players')">&#8592; Back</button>
                </header>

                <div class="player-hero">
                    <div class="player-hero-content">
                        <div class="player-photo-container">
                            <div class="player-photo">
                                <div class="player-photo-placeholder">
                                    &#9917;
                                </div>
                            </div>
                            ${team ? `
                                <div class="player-team-badge-overlay">
                                    <img src="${team.badge}" alt="${team.name}" onerror="this.parentElement.style.display='none'">
                                </div>
                            ` : ''}
                        </div>
                        <div class="player-info">
                            <h1>${player.name}</h1>
                            <div class="player-meta">
                                <span class="position-badge ${player.position.toLowerCase()}">${player.position}</span>
                                <span class="nationality">${player.nationality}</span>
                                <span class="age">${player.age} years old</span>
                            </div>
                            <div class="player-team">
                                ${team ? `<span class="team-badge"><img src="${team.badge}" alt="${team.name}" onerror="this.style.display='none'"></span> ${team.name}` : ''}
                            </div>
                        </div>
                        <div class="player-rating-circle">
                            <span class="rating-value">${rating}</span>
                            <span class="rating-label">Rating</span>
                        </div>
                    </div>
                </div>

                <div class="player-stats-grid">
                    <div class="stat-card primary">
                        <span class="stat-icon">&#9917;</span>
                        <div class="stat-content">
                            <span class="stat-value">${player.goals}</span>
                            <span class="stat-label">Goals</span>
                        </div>
                    </div>
                    <div class="stat-card primary">
                        <span class="stat-icon">&#127919;</span>
                        <div class="stat-content">
                            <span class="stat-value">${player.assists}</span>
                            <span class="stat-label">Assists</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-content">
                            <span class="stat-value">${player.appearances}</span>
                            <span class="stat-label">Appearances</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-content">
                            <span class="stat-value">${Stats.formatMinutes(player.minutesPlayed)}</span>
                            <span class="stat-label">Minutes</span>
                        </div>
                    </div>
                </div>

                ${player.position !== 'Goalkeeper' ? `
                    <div class="goal-contributions-section">
                        <h3>Goal Contributions</h3>
                        <div class="contributions-chart">
                            <div class="contribution-bar">
                                <span class="contribution-label">Goals</span>
                                <div class="contribution-track">
                                    <div class="contribution-fill goals" style="width: ${Math.min(player.goals * 4, 100)}%">
                                        ${player.goals > 2 ? `<span class="contribution-value">${player.goals}</span>` : ''}
                                    </div>
                                </div>
                                <span class="contribution-count">${player.goals}</span>
                            </div>
                            <div class="contribution-bar">
                                <span class="contribution-label">Assists</span>
                                <div class="contribution-track">
                                    <div class="contribution-fill assists" style="width: ${Math.min(player.assists * 4, 100)}%">
                                        ${player.assists > 2 ? `<span class="contribution-value">${player.assists}</span>` : ''}
                                    </div>
                                </div>
                                <span class="contribution-count">${player.assists}</span>
                            </div>
                        </div>
                        <div class="contributions-total">
                            <div class="total-stat">
                                <span class="total-value">${player.goals + player.assists}</span>
                                <span class="total-label">Total Contributions</span>
                            </div>
                            <div class="total-stat">
                                <span class="total-value">${player.appearances > 0 ? ((player.goals + player.assists) / player.appearances).toFixed(2) : '0'}</span>
                                <span class="total-label">Per Game</span>
                            </div>
                        </div>
                    </div>
                ` : ''}

                <div class="player-detailed-stats">
                    <section class="stat-section">
                        <h3>Attacking</h3>
                        <div class="stat-bars">
                            <div class="stat-bar-item">
                                <span class="stat-name">Shot Accuracy</span>
                                <div class="stat-bar">
                                    <div class="stat-fill" style="width: ${player.shotAccuracy}%"></div>
                                </div>
                                <span class="stat-val">${player.shotAccuracy}%</span>
                            </div>
                            <div class="stat-bar-item">
                                <span class="stat-name">Shots on Target</span>
                                <div class="stat-bar">
                                    <div class="stat-fill" style="width: ${Math.min(player.shotsOnTarget, 50) * 2}%"></div>
                                </div>
                                <span class="stat-val">${player.shotsOnTarget}</span>
                            </div>
                            <div class="stat-bar-item">
                                <span class="stat-name">Minutes per Goal</span>
                                <span class="stat-val">${Stats.minutesPerGoal(player)}</span>
                            </div>
                        </div>
                    </section>

                    <section class="stat-section">
                        <h3>Passing</h3>
                        <div class="stat-bars">
                            <div class="stat-bar-item">
                                <span class="stat-name">Pass Completion</span>
                                <div class="stat-bar">
                                    <div class="stat-fill" style="width: ${player.passCompletion}%"></div>
                                </div>
                                <span class="stat-val">${player.passCompletion}%</span>
                            </div>
                        </div>
                    </section>

                    <section class="stat-section">
                        <h3>Defensive</h3>
                        <div class="stat-bars">
                            <div class="stat-bar-item">
                                <span class="stat-name">Tackles</span>
                                <div class="stat-bar">
                                    <div class="stat-fill" style="width: ${Math.min(player.tackles, 100)}%"></div>
                                </div>
                                <span class="stat-val">${player.tackles}</span>
                            </div>
                            <div class="stat-bar-item">
                                <span class="stat-name">Interceptions</span>
                                <div class="stat-bar">
                                    <div class="stat-fill" style="width: ${Math.min(player.interceptions, 50) * 2}%"></div>
                                </div>
                                <span class="stat-val">${player.interceptions}</span>
                            </div>
                        </div>
                    </section>

                    <section class="stat-section">
                        <h3>Discipline</h3>
                        <div class="cards-display">
                            <div class="card-stat yellow">
                                <span class="card-icon"></span>
                                <span class="card-value">${player.yellowCards}</span>
                                <span class="card-label">Yellow Cards</span>
                            </div>
                            <div class="card-stat red">
                                <span class="card-icon"></span>
                                <span class="card-value">${player.redCards}</span>
                                <span class="card-label">Red Cards</span>
                            </div>
                        </div>
                    </section>

                    ${player.position === 'Goalkeeper' ? `
                        <section class="stat-section">
                            <h3>Goalkeeper Stats</h3>
                            <div class="stat-bars">
                                <div class="stat-bar-item">
                                    <span class="stat-name">Clean Sheets</span>
                                    <span class="stat-val">${player.cleanSheets}</span>
                                </div>
                                <div class="stat-bar-item">
                                    <span class="stat-name">Saves</span>
                                    <span class="stat-val">${player.saves}</span>
                                </div>
                            </div>
                        </section>
                    ` : ''}
                </div>
            </div>
        `;
    }

    /**
     * Render H2H Page
     */
    async function renderH2HPage() {
        const teams = await DataAPI.getTeams();

        elements.mainContent.innerHTML = `
            <div class="h2h-page">
                <header class="page-header">
                    <h1>Head to Head Analysis</h1>
                    <p>Compare historical matchups between any two teams</p>
                </header>

                <div class="h2h-selector">
                    <div class="h2h-team-select">
                        <label>Team 1</label>
                        <select id="h2h-team1" onchange="App.loadH2H()">
                            <option value="">Select Team</option>
                            ${teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="vs-badge-large">VS</div>
                    <div class="h2h-team-select">
                        <label>Team 2</label>
                        <select id="h2h-team2" onchange="App.loadH2H()">
                            <option value="">Select Team</option>
                            ${teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div id="h2h-content" class="h2h-content">
                    <p class="h2h-placeholder">Select two teams to see their head-to-head statistics</p>
                </div>
            </div>
        `;
    }

    /**
     * Load H2H data
     */
    async function loadH2H() {
        const team1Id = parseInt(document.getElementById('h2h-team1').value);
        const team2Id = parseInt(document.getElementById('h2h-team2').value);
        const content = document.getElementById('h2h-content');

        if (!team1Id || !team2Id || team1Id === team2Id) {
            content.innerHTML = '<p class="h2h-placeholder">Select two different teams</p>';
            // Reset team colors
            document.documentElement.style.removeProperty('--h2h-team1-color');
            document.documentElement.style.removeProperty('--h2h-team2-color');
            return;
        }

        content.innerHTML = '<div class="loading-spinner"></div>';

        try {
            const [team1, team2, h2hData, comparison] = await Promise.all([
                DataAPI.getTeamById(team1Id),
                DataAPI.getTeamById(team2Id),
                DataAPI.getHeadToHead(team1Id, team2Id),
                DataAPI.compareTeams(team1Id, team2Id)
            ]);

            // Set team colors as CSS variables
            document.documentElement.style.setProperty('--h2h-team1-color', team1.primaryColor);
            document.documentElement.style.setProperty('--h2h-team2-color', team2.primaryColor);

            const summary = Stats.h2hSummary(h2hData, team1Id, team2Id);

            // Render timeline matches
            const renderTimelineMatches = (matches) => {
                if (!matches || matches.length === 0) return '';
                return matches.map(m => {
                    const homeTeam = m.home === team1Id ? team1 : team2;
                    const awayTeam = m.home === team1Id ? team2 : team1;
                    const homeScore = m.homeScore;
                    const awayScore = m.awayScore;

                    let matchClass = 'draw-match';
                    if (homeScore > awayScore) {
                        matchClass = m.home === team1Id ? 'team1-win' : 'team2-win';
                    } else if (awayScore > homeScore) {
                        matchClass = m.home === team1Id ? 'team2-win' : 'team1-win';
                    }

                    return `
                        <div class="timeline-match ${matchClass}">
                            <div class="timeline-match-header">
                                <span class="timeline-date">${formatDate(m.date)}</span>
                                <span class="timeline-venue">${homeTeam.stadium || 'Stadium'}</span>
                            </div>
                            <div class="timeline-score">
                                <div class="timeline-team home">
                                    <span class="timeline-team-name">${homeTeam.shortName}</span>
                                    <span class="team-badge small"><img src="${homeTeam.badge}" alt="${homeTeam.name}" onerror="this.style.display='none'"></span>
                                </div>
                                <span class="timeline-goals">${homeScore} - ${awayScore}</span>
                                <div class="timeline-team away">
                                    <span class="team-badge small"><img src="${awayTeam.badge}" alt="${awayTeam.name}" onerror="this.style.display='none'"></span>
                                    <span class="timeline-team-name">${awayTeam.shortName}</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            };

            // Add teams-selected class to page
            document.querySelector('.h2h-page').classList.add('teams-selected');

            content.innerHTML = `
                <div class="h2h-results">
                    <!-- Clash Header -->
                    <div class="h2h-clash-header">
                        <div class="h2h-clash-team team1">
                            <div class="team-crest">
                                <img src="${team1.badge}" alt="${team1.name}" onerror="this.parentElement.innerHTML='⚽'">
                            </div>
                            <span class="team-name">${team1.name}</span>
                            <div class="team-stats-mini">
                                <span><span class="stat-val">${team1.position}</span>Position</span>
                                <span><span class="stat-val">${team1.points}</span>Points</span>
                                <span><span class="stat-val">${team1.goalsFor}</span>Goals</span>
                            </div>
                        </div>

                        <div class="h2h-vs-clash">
                            <div class="clash-line"></div>
                            <span class="vs-text">VS</span>
                            <div class="clash-line"></div>
                        </div>

                        <div class="h2h-clash-team team2">
                            <div class="team-crest">
                                <img src="${team2.badge}" alt="${team2.name}" onerror="this.parentElement.innerHTML='⚽'">
                            </div>
                            <span class="team-name">${team2.name}</span>
                            <div class="team-stats-mini">
                                <span><span class="stat-val">${team2.position}</span>Position</span>
                                <span><span class="stat-val">${team2.points}</span>Points</span>
                                <span><span class="stat-val">${team2.goalsFor}</span>Goals</span>
                            </div>
                        </div>
                    </div>

                    <!-- H2H Record Summary -->
                    <div class="h2h-overview">
                        <div class="h2h-team">
                            <span class="h2h-wins">${summary.team1Wins} Wins</span>
                            <span class="h2h-win-rate">${summary.team1WinRate}%</span>
                        </div>

                        <div class="h2h-summary">
                            <div class="total-matches">
                                <span class="value">${summary.totalMatches}</span>
                                <span class="label">Total Matches</span>
                            </div>
                            <div class="draws">
                                <span class="value">${summary.draws}</span>
                                <span class="label">Draws</span>
                            </div>
                            <div class="avg-goals">
                                <span class="value">${summary.avgGoals}</span>
                                <span class="label">Avg Goals/Match</span>
                            </div>
                        </div>

                        <div class="h2h-team">
                            <span class="h2h-wins">${summary.team2Wins} Wins</span>
                            <span class="h2h-win-rate">${summary.team2WinRate}%</span>
                        </div>
                    </div>

                    <div class="h2h-bar">
                        <div class="h2h-bar-segment team1" style="width: ${summary.team1WinRate}%"></div>
                        <div class="h2h-bar-segment draw" style="width: ${summary.drawRate}%"></div>
                        <div class="h2h-bar-segment team2" style="width: ${summary.team2WinRate}%"></div>
                    </div>
                    <div class="h2h-bar-labels">
                        <span class="h2h-bar-label team1"><span class="color-dot"></span>${team1.shortName} ${summary.team1WinRate}%</span>
                        <span class="h2h-bar-label draw"><span class="color-dot"></span>Draw ${summary.drawRate}%</span>
                        <span class="h2h-bar-label team2"><span class="color-dot"></span>${team2.shortName} ${summary.team2WinRate}%</span>
                    </div>

                    <!-- Split Stats Comparison -->
                    <div class="h2h-split-stats">
                        <div class="h2h-split-side team1">
                            <h4>${team1.shortName} Season Stats</h4>
                            <div class="split-stat-row"><span class="split-stat-label">Wins</span><span class="split-stat-value">${team1.won}</span></div>
                            <div class="split-stat-row"><span class="split-stat-label">Goals Scored</span><span class="split-stat-value">${team1.goalsFor}</span></div>
                            <div class="split-stat-row"><span class="split-stat-label">Goals Conceded</span><span class="split-stat-value">${team1.goalsAgainst}</span></div>
                            <div class="split-stat-row"><span class="split-stat-label">Clean Sheets</span><span class="split-stat-value">${team1.stats?.cleanSheets || 0}</span></div>
                            <div class="split-stat-row"><span class="split-stat-label">Possession</span><span class="split-stat-value">${team1.stats?.possession || 0}%</span></div>
                        </div>
                        <div class="h2h-split-side team2">
                            <h4>${team2.shortName} Season Stats</h4>
                            <div class="split-stat-row"><span class="split-stat-value">${team2.won}</span><span class="split-stat-label">Wins</span></div>
                            <div class="split-stat-row"><span class="split-stat-value">${team2.goalsFor}</span><span class="split-stat-label">Goals Scored</span></div>
                            <div class="split-stat-row"><span class="split-stat-value">${team2.goalsAgainst}</span><span class="split-stat-label">Goals Conceded</span></div>
                            <div class="split-stat-row"><span class="split-stat-value">${team2.stats?.cleanSheets || 0}</span><span class="split-stat-label">Clean Sheets</span></div>
                            <div class="split-stat-row"><span class="split-stat-value">${team2.stats?.possession || 0}%</span><span class="split-stat-label">Possession</span></div>
                        </div>
                    </div>

                    <div class="h2h-probability-section">
                        <h4>Historical Win Probability</h4>
                        <div class="probability-visual">
                            <div class="prob-circle team1" style="--prob: ${summary.team1WinRate}">
                                <span class="prob-value">${summary.team1WinRate}%</span>
                                <span class="prob-label">${team1.shortName}</span>
                            </div>
                            <div class="prob-circle draw" style="--prob: ${summary.drawRate}">
                                <span class="prob-value">${summary.drawRate}%</span>
                                <span class="prob-label">Draw</span>
                            </div>
                            <div class="prob-circle team2" style="--prob: ${summary.team2WinRate}">
                                <span class="prob-value">${summary.team2WinRate}%</span>
                                <span class="prob-label">${team2.shortName}</span>
                            </div>
                        </div>
                    </div>

                    ${summary.recentMatches && summary.recentMatches.length > 0 ? `
                        <div class="h2h-timeline">
                            <h4>Recent Meetings Timeline</h4>
                            <div class="timeline-container">
                                ${renderTimelineMatches(summary.recentMatches)}
                            </div>
                        </div>
                    ` : `
                        <div class="h2h-timeline">
                            <h4>Recent Meetings</h4>
                            <p class="h2h-placeholder">No historical match data available for this matchup</p>
                        </div>
                    `}

                    <div class="stats-comparison">
                        <h3>Current Season Comparison</h3>
                        <div class="comparison-grid">
                            ${renderComparisonStats(comparison, team1, team2)}
                        </div>
                    </div>

                    <div class="h2h-action">
                        <button class="btn btn-primary btn-lg" onclick="App.selectTeamForPrediction('home', ${team1Id}); App.selectTeamForPrediction('away', ${team2Id}); App.navigateTo('predict');">
                            Predict This Match
                        </button>
                    </div>
                </div>
            `;
        } catch (error) {
            content.innerHTML = `<p class="error-text">Error loading data: ${error.message}</p>`;
        }
    }

    /**
     * Render comparison stats
     */
    function renderComparisonStats(comparison, team1 = null, team2 = null) {
        const stats = comparison.comparison;
        const labels = {
            possession: 'Possession',
            shotsPerGame: 'Shots/Game',
            passAccuracy: 'Pass Accuracy',
            tacklesWon: 'Tackles Won',
            cleanSheets: 'Clean Sheets',
            goalsScored: 'Goals Scored',
            goalsConceded: 'Goals Conceded'
        };

        const team1Color = team1 ? team1.primaryColor : 'var(--pl-magenta)';
        const team2Color = team2 ? team2.primaryColor : 'var(--pl-cyan)';

        return Object.entries(stats).map(([key, val]) => {
            const total = val.team1 + val.team2 || 1;
            const team1Pct = (val.team1 / total) * 100;
            const team2Pct = (val.team2 / total) * 100;
            const winner = val.team1 > val.team2 ? 'team1' : (val.team2 > val.team1 ? 'team2' : 'draw');

            return `
                <div class="comparison-row">
                    <span class="comp-value team1 ${winner === 'team1' ? 'winner' : ''}" style="color: ${team1Color}">${typeof val.team1 === 'number' ? val.team1.toFixed(1) : val.team1}</span>
                    <div class="comp-bar-container">
                        <div class="comp-bar team1" style="width: ${team1Pct}%; background: ${team1Color}"></div>
                        <span class="comp-label">${labels[key]}</span>
                        <div class="comp-bar team2" style="width: ${team2Pct}%; background: ${team2Color}"></div>
                    </div>
                    <span class="comp-value team2 ${winner === 'team2' ? 'winner' : ''}" style="color: ${team2Color}">${typeof val.team2 === 'number' ? val.team2.toFixed(1) : val.team2}</span>
                </div>
            `;
        }).join('');
    }

    /**
     * Render Fixtures Page
     */
    async function renderFixturesPage() {
        const [fixtures, teams] = await Promise.all([
            DataAPI.getFixtures({ status: 'scheduled' }),
            DataAPI.getTeams()
        ]);

        const teamMap = new Map(teams.map(t => [t.id, t]));

        elements.mainContent.innerHTML = `
            <div class="fixtures-page">
                <header class="page-header">
                    <h1>Upcoming Fixtures</h1>
                    <p>Click on any match to generate a prediction</p>
                </header>

                <div class="fixtures-grid">
                    ${fixtures.map(f => {
                        const home = teamMap.get(f.homeTeamId);
                        const away = teamMap.get(f.awayTeamId);
                        if (!home || !away) return '';

                        return `
                            <div class="fixture-card" onclick="App.selectTeamForPrediction('home', ${f.homeTeamId}); App.selectTeamForPrediction('away', ${f.awayTeamId}); App.navigateTo('predict');">
                                <div class="fixture-date">${formatDate(f.date)} - ${f.time}</div>
                                <div class="fixture-teams">
                                    <div class="fixture-team home">
                                        <span class="team-badge large"><img src="${home.badge}" alt="${home.name}" onerror="this.style.display='none'"></span>
                                        <span class="team-name">${home.name}</span>
                                        <span class="team-form">${Stats.getFormHTML(home.form.slice(0, 3))}</span>
                                    </div>
                                    <div class="fixture-vs">VS</div>
                                    <div class="fixture-team away">
                                        <span class="team-badge large"><img src="${away.badge}" alt="${away.name}" onerror="this.style.display='none'"></span>
                                        <span class="team-name">${away.name}</span>
                                        <span class="team-form">${Stats.getFormHTML(away.form.slice(0, 3))}</span>
                                    </div>
                                </div>
                                <div class="fixture-venue">${f.venue}</div>
                                <button class="btn btn-sm btn-primary">Predict Match</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    // Helper Functions

    function renderMiniStandings(teams) {
        return `
            <table class="mini-standings-table">
                <thead>
                    <tr><th>#</th><th>Team</th><th>P</th><th>GD</th><th>Pts</th></tr>
                </thead>
                <tbody>
                    ${teams.map(t => `
                        <tr class="${Stats.getPositionClass(t.position)}" onclick="App.navigateTo('team', {id: ${t.id}})">
                            <td>${t.position}</td>
                            <td><span class="team-badge small"><img src="${t.badge}" alt="${t.name}" onerror="this.style.display='none'"></span> ${t.shortName}</td>
                            <td>${t.played}</td>
                            <td class="${t.goalDifference > 0 ? 'positive' : t.goalDifference < 0 ? 'negative' : ''}">${t.goalDifference > 0 ? '+' : ''}${t.goalDifference}</td>
                            <td><strong>${t.points}</strong></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    async function renderUpcomingFixtures(fixtures, teams) {
        const teamMap = new Map(teams.map(t => [t.id, t]));

        if (!fixtures || fixtures.length === 0) {
            return '<p class="no-fixtures">No upcoming fixtures scheduled</p>';
        }

        return fixtures.map(f => {
            const home = teamMap.get(f.homeTeamId);
            const away = teamMap.get(f.awayTeamId);
            if (!home || !away) return '';

            return `
                <div class="fixture-mini-card" onclick="App.selectTeamForPrediction('home', ${f.homeTeamId}); App.selectTeamForPrediction('away', ${f.awayTeamId}); App.navigateTo('predict');">
                    <div class="fixture-mini-date">${formatDate(f.date)}</div>
                    <div class="fixture-mini-teams">
                        <div class="fixture-mini-team home">
                            <img src="${home.badge}" alt="${home.name}" class="fixture-mini-badge" onerror="this.style.display='none'">
                            <span class="fixture-mini-name">${home.shortName}</span>
                        </div>
                        <span class="fixture-mini-vs">VS</span>
                        <div class="fixture-mini-team away">
                            <span class="fixture-mini-name">${away.shortName}</span>
                            <img src="${away.badge}" alt="${away.name}" class="fixture-mini-badge" onerror="this.style.display='none'">
                        </div>
                    </div>
                    <div class="fixture-mini-venue">${f.venue || home.stadium || ''}</div>
                </div>
            `;
        }).join('');
    }

    async function renderTopScorers(players) {
        const teams = await DataAPI.getTeams();
        const teamMap = new Map(teams.map(t => [t.id, t]));

        return players.map((p, i) => {
            const team = teamMap.get(p.teamId);
            return `
                <div class="scorer-item" onclick="App.navigateTo('player', {id: ${p.id}})">
                    <span class="scorer-rank">${i + 1}</span>
                    <div class="scorer-info">
                        <span class="scorer-name">${p.name}</span>
                        <span class="scorer-team">${team ? team.badge : ''} ${team ? team.shortName : ''}</span>
                    </div>
                    <span class="scorer-goals">${p.goals}</span>
                </div>
            `;
        }).join('');
    }

    function getOrdinalSuffix(n) {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    /**
     * Render team badge as image
     */
    function renderBadge(badge, size = 'medium', alt = 'Team badge') {
        // Check if badge is a URL (image)
        if (badge && (badge.startsWith('http') || badge.startsWith('/'))) {
            const sizeClass = size ? `badge-${size}` : '';
            return `<img src="${badge}" alt="${alt}" class="team-badge-img ${sizeClass}" onerror="this.style.display='none'">`;
        }
        // Fallback to emoji/text
        return badge || '';
    }

    // Make renderBadge available globally
    window.renderBadge = renderBadge;

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Theme Functions

    function toggleTheme() {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(state.theme);
        localStorage.setItem('theme', state.theme);
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (elements.themeToggle) {
            elements.themeToggle.innerHTML = theme === 'dark' ? '&#9728;' : '&#9790;';
        }
    }

    // Search Functions

    async function handleSearch(e) {
        const query = e.target.value.trim();

        if (query.length < 2) {
            elements.searchResults.innerHTML = '';
            elements.searchResults.classList.remove('active');
            return;
        }

        const results = await DataAPI.search(query);

        let html = '';

        if (results.teams.length > 0) {
            html += '<div class="search-section"><h4>Teams</h4>';
            html += results.teams.map(t => `
                <div class="search-item" onclick="App.navigateTo('team', {id: ${t.id}})">
                    <span class="team-badge"><img src="${t.badge}" alt="${t.name}" onerror="this.style.display='none'"></span> ${t.name}
                </div>
            `).join('');
            html += '</div>';
        }

        if (results.players.length > 0) {
            html += '<div class="search-section"><h4>Players</h4>';
            html += results.players.map(p => `
                <div class="search-item" onclick="App.navigateTo('player', {id: ${p.id}})">
                    ${p.name} <span class="search-meta">${p.position}</span>
                </div>
            `).join('');
            html += '</div>';
        }

        if (!html) {
            html = '<div class="search-no-results">No results found</div>';
        }

        elements.searchResults.innerHTML = html;
        elements.searchResults.classList.add('active');
    }

    // Mobile Menu Functions

    function toggleMobileMenu() {
        elements.mobileMenu.classList.toggle('active');
        elements.mobileMenuBtn.classList.toggle('active');
    }

    function closeMobileMenu() {
        elements.mobileMenu.classList.remove('active');
        elements.mobileMenuBtn.classList.remove('active');
    }

    // Loading Functions

    function showLoading() {
        if (elements.loadingOverlay) {
            elements.loadingOverlay.classList.add('active');
        }
    }

    function hideLoading() {
        if (elements.loadingOverlay) {
            elements.loadingOverlay.classList.remove('active');
        }
    }

    // Keyboard Navigation

    function handleKeyboard(e) {
        if (e.key === 'Escape') {
            elements.searchResults.classList.remove('active');
            closeMobileMenu();
        }
    }

    // Initialize circular progress elements

    function initCircularProgress() {
        document.querySelectorAll('.circular-progress').forEach(el => {
            const value = parseFloat(el.dataset.value);
            el.style.setProperty('--progress', value);
        });
    }

    // Error rendering

    function renderError(message) {
        elements.mainContent.innerHTML = `
            <div class="error-page">
                <h2>Oops!</h2>
                <p>${message}</p>
                <button class="btn btn-primary" onclick="App.navigateTo('home')">Go Home</button>
            </div>
        `;
    }

    // Share prediction

    function sharePrediction() {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: 'Premier League Match Prediction',
                url: url
            });
        } else {
            navigator.clipboard.writeText(url);
            alert('Link copied to clipboard!');
        }
    }

    // Handle browser back/forward

    window.addEventListener('popstate', (e) => {
        if (e.state) {
            navigateTo(e.state.page, e.state.params || {});
        }
    });

    // Handle initial hash route

    function handleInitialRoute() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const [page, id] = hash.split('/');
            navigateTo(page, id ? { id: parseInt(id) } : {});
        }
    }

    // Initialize on DOM ready

    document.addEventListener('DOMContentLoaded', () => {
        init().then(() => {
            handleInitialRoute();
        });
    });

    // Public API
    return {
        init,
        navigateTo,
        selectTeamForPrediction,
        runPrediction,
        quickPredict,
        filterPlayers,
        switchPlayerTab,
        switchPlayerView,
        loadH2H,
        sharePrediction,
        toggleTheme
    };
})();
