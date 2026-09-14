<div align="center">

# ⚽ Premier League Match Predictor

### Explore teams, compare statistics, and predict Premier League results.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Football Data](https://img.shields.io/badge/Football--Data.org-Live_Data-00A86B?style=for-the-badge)](https://www.football-data.org/)

**Responsive design · Statistical predictions · Optional live data · No build tools**

</div>

---

## About the Project

Premier League Match Predictor is a responsive, browser-based application for exploring league data and estimating match outcomes. Users can compare clubs, review standings and player statistics, inspect head-to-head performance, and generate predicted scorelines with win, draw, and loss probabilities.

The application works immediately with its included **2024-25 sample dataset**. Users may also enter their own Football-Data.org API key to request available live standings, fixtures, and match results.

> **Disclaimer:** This is an independent, fan-made educational project. It is not affiliated with or endorsed by the Premier League. Predictions are statistical estimates and should not be used for betting.

## Highlights

| Feature | What it provides |
| --- | --- |
| 🎯 Match predictions | Home-win, draw, and away-win probabilities with a predicted scoreline |
| 📊 Team analytics | League position, form, attacking metrics, defensive metrics, and home/away performance |
| 👤 Player statistics | Goals, assists, clean sheets, saves, ratings, and position-based filters |
| 🤝 Head-to-head comparison | Recent meetings, historical results, and side-by-side team statistics |
| 📅 Fixtures and standings | Upcoming matches, results, form guides, and a complete league table |
| 🌗 Responsive interface | Dark/light themes and layouts designed for desktop, tablet, and mobile |
| 🔌 Optional live data | Football-Data.org integration with automatic fallback to sample data |

## Prediction Model

The prediction engine combines several weighted football-performance factors:

| Factor | Weight |
| --- | ---: |
| Recent form | 25% |
| Home advantage | 15% |
| Head-to-head record | 15% |
| League position | 15% |
| Goals scored | 15% |
| Goals conceded | 10% |
| Expected goals | 5% |

Predicted scorelines are calculated with a **Poisson distribution model** using expected goals, expected goals against, and a home-advantage multiplier.

## Quick Start

No installation or build step is required.

### Open directly

1. Download or clone the repository.
2. Open `index.html` in a modern web browser.

### Run a local server (recommended)

```bash
git clone https://github.com/adwaithnambiar2/premier-league-predictor.git
cd premier-league-predictor
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. You can also use the **Live Server** extension in Visual Studio Code.

## Live Data Setup

The project runs without an API key. To use available live data:

1. Create a free API key at [Football-Data.org](https://www.football-data.org/client/register).
2. Open the application.
3. Select **Configure API** in the footer or the data-status control in the header.
4. Paste your API key and select **Save & Refresh**.

The key is stored only in your browser's local storage and is not included in the repository. Football-Data.org rate limits and browser-access policies may apply.

## Project Structure

```text
premier-league-predictor/
├── index.html              # Application shell and API settings modal
├── css/
│   └── styles.css          # Responsive layouts, components, and themes
├── data/
│   ├── mock-data.js        # Core sample league dataset
│   └── expanded-data.js    # Expanded team and player information
├── js/
│   ├── api.js              # Live-data requests, caching, and fallback logic
│   ├── main.js             # UI rendering, navigation, and interactions
│   ├── predictor.js        # Match prediction calculations
│   └── stats.js            # Statistical utilities and comparisons
├── assets/                 # Optional images and media
├── .gitignore
└── README.md
```

## Technology Stack

- **HTML5** for semantic page structure
- **CSS3** with custom properties, Grid, Flexbox, and responsive breakpoints
- **Vanilla JavaScript (ES6+)** for routing, rendering, data handling, and predictions
- **Football-Data.org API** for optional live football data
- **Local Storage** for theme preference and the user-provided API key

## Main Views

- **Home:** League overview, quick prediction form, fixtures, and top performers
- **Predict:** Outcome probabilities, scoreline, confidence, and factor breakdown
- **Standings:** Complete league table with recent form
- **Teams:** Club directory and detailed performance pages
- **Players:** Searchable and filterable player leaderboards
- **Head to Head:** Historical matchup analysis and team comparisons
- **Fixtures:** Upcoming and completed matches

## Customization

### Change the colors

Edit the CSS variables near the beginning of `css/styles.css`:

```css
:root {
    --pl-purple: #38003c;
    --pl-green: #00ff85;
    --accent-primary: var(--pl-green);
}
```

### Adjust prediction weights

Edit the `WEIGHTS` object in `js/predictor.js`. Keep the values balanced so the total remains meaningful.

```javascript
const WEIGHTS = {
    form: 0.25,
    homeAdvantage: 0.15,
    headToHead: 0.15,
    leaguePosition: 0.15,
    goalsScored: 0.15,
    goalsConceded: 0.10,
    expectedGoals: 0.05
};
```

### Update sample data

Edit `data/mock-data.js` and `data/expanded-data.js` to update clubs, players, fixtures, standings, or season statistics.

## Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Apple Safari

## Future Improvements

- Add automated tests for prediction and statistics functions
- Display model-performance results against completed fixtures
- Add charts showing form and expected-goals trends
- Move live API requests behind a server-side proxy for stronger key protection
- Update the built-in dataset for future Premier League seasons

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## Acknowledgments

- [Football-Data.org](https://www.football-data.org/) for the optional live-data API
- [Google Fonts](https://fonts.google.com/) for web typography
- The Premier League and its clubs for inspiring the project

---

<div align="center">

Built by **Adwaith Nambiar**

⭐ If you find the project useful, consider starring the repository.

</div>
