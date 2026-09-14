# premier-league-predictor
A Premier League match prediction web app with team statistics, player data, head-to-head analysis, and optional live API integration.
Premier League Match Predictor ⚽

A comprehensive Premier League match prediction web application featuring AI-powered predictions, detailed team and player statistics, head-to-head analysis, and beautiful visualizations.

Features

Match Predictions

AI-Powered Predictions: Sophisticated algorithm considering multiple factors

Win Probabilities: Home win, draw, and away win percentages

Predicted Scorelines: Based on expected goals (xG) calculations

Confidence Levels: Transparent prediction confidence scores

Factor Breakdown: See how form, position, H2H, and more influence the prediction

Team Statistics

Complete League Table: Live standings with form guides

Detailed Team Pages: Deep dive into each team's performance

Home vs Away Analysis: Split performance statistics

Offensive/Defensive Ratings: Visual rating systems

Key Metrics: Possession, shots, pass accuracy, tackles, and more

Player Statistics

Top Scorers & Assists: League-wide leaderboards

Goalkeeper Stats: Clean sheets and saves

Detailed Player Profiles: Complete individual statistics

Position-Based Filters: Sort by position, team, or stat category

Player Ratings: Calculated performance ratings

Head-to-Head Analysis

Historical Records: Win/loss/draw history between teams

Recent Meetings: Last 5 match results

Average Goals: Goals per match statistics

Side-by-Side Comparison: Current season stats comparison

Additional Features

Dark/Light Theme: Toggle between themes

Responsive Design: Works on mobile, tablet, and desktop

Search Functionality: Find teams and players quickly

Fixture List: Upcoming matches with quick prediction access

API Integration: Optional live data from API-Football

Quick Start

Option 1: Direct Opening (Simplest)

Download or clone this repository

Open index.html directly in your web browser

That's it! The app works offline with mock data

Option 2: Local Server (Recommended)

Using Python:

cd premier-league-predictor
python -m http.server 8000
# Open http://localhost:8000 in your browser

Using Node.js:

npx serve premier-league-predictor
# Open the provided URL in your browser

Using VS Code Live Server:

Install the "Live Server" extension

Right-click index.html and select "Open with Live Server"

Project Structure

premier-league-predictor/
├── index.html          # Main HTML entry point
├── css/
│   └── styles.css      # Complete styling with theme support
├── js/
│   ├── main.js         # Main application logic & UI
│   ├── api.js          # Data fetching & caching
│   ├── predictor.js    # Prediction algorithm
│   └── stats.js        # Statistics calculations
├── data/
│   ├── mock-data.js    # Core mock dataset
│   └── expanded-data.js # Expanded team and player data
├── assets/             # Images & icons (optional)
└── README.md           # This file

Using Live Data (Optional)

The app works perfectly with the included mock data, but you can connect to live data:

Get a free API key from Football-Data.org

Click "Configure API" in the footer

Enter your API key

The app will now fetch live Premier League data

Note: The free tier has rate limits. Mock data is comprehensive and updated for the 2024-25 season.

Prediction Algorithm

The prediction model considers multiple weighted factors:

Factor

Weight

Description

Form

25%

Recent match results (last 5 games)

Home Advantage

15%

Home/away performance differential

Head-to-Head

15%

Historical matchup record

League Position

15%

Current standing in the table

Goals Scored

15%

Attacking capability

Goals Conceded

10%

Defensive capability

Expected Goals

5%

Advanced xG metrics

Score Prediction

Uses a Poisson distribution model based on:

Team's expected goals (xG)

Opponent's expected goals against (xGA)

Home advantage factor (1.15x)

Technical Details

Technologies Used

Vanilla JavaScript (ES6+)

CSS3 with Custom Properties (CSS Variables)

HTML5 Semantic markup

No build tools required - runs directly in browser

Browser Support

Chrome 80+

Firefox 75+

Safari 13+

Edge 80+

Features

Single Page Application (SPA) architecture

Client-side routing with hash-based navigation

Local storage for theme preference and API key

Debounced search functionality

Lazy loading of data

Responsive grid layouts with CSS Grid/Flexbox

Customization

Changing Theme Colors

Edit the CSS variables in css/styles.css:

:root {
    --pl-purple: #38003c;
    --pl-green: #00ff85;
    --accent-primary: var(--pl-green);
    /* ... */
}

Modifying Prediction Weights

Edit the WEIGHTS object in js/predictor.js:

const WEIGHTS = {
    form: 0.25,
    homeAdvantage: 0.15,
    // ... adjust as needed
};

Adding Teams/Players

Update the PREMIER_LEAGUE_DATA object in data/mock-data.js.

Data Structure

Team Object

{
    id: 1,
    name: "Manchester City",
    shortName: "MCI",
    stadium: "Etihad Stadium",
    position: 1,
    played: 22,
    won: 16,
    drawn: 4,
    lost: 2,
    goalsFor: 52,
    goalsAgainst: 18,
    points: 52,
    form: ["W", "W", "D", "W", "W"],
    stats: {
        possession: 65.2,
        shotsPerGame: 18.4,
        // ...
    }
}

Player Object

{
    id: 1,
    name: "Erling Haaland",
    teamId: 1,
    position: "Forward",
    goals: 18,
    assists: 5,
    appearances: 21,
    // ...
}

Screenshots

Home Page

The home page features:

Hero section with league statistics

Quick prediction tool

Mini standings table

Upcoming fixtures

Top scorers

Prediction Page

Select any two teams to get:

Win probability percentages

Predicted scoreline

Confidence meter

Factor breakdown

Analysis explanation

Team Detail Page

Comprehensive view including:

Season record

Form guide

Offensive/defensive ratings

Home vs away split

Squad list

Contributing

Contributions are welcome! Feel free to:

Fork the repository

Create a feature branch

Submit a pull request

License

This project is for educational and demonstration purposes. Premier League and team data are used under fair use for non-commercial purposes.

Acknowledgments

Premier League for the inspiration

Football-Data.org for the optional live-data API

Google Fonts for typography

Disclaimer: This is a fan-made project for educational purposes. Predictions are based on statistical models and should not be used for betting purposes. All team names, logos, and data are property of their respective owners.
