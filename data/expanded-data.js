/**
 * Expanded Premier League Data
 * Contains 500+ players with full squad rosters
 * Team history, trophies, and 5-year statistics
 */

const EXPANDED_PLAYERS = [
    // ============ MANCHESTER CITY (teamId: 1) ============
    // Goalkeepers
    { id: 101, name: "Ederson", teamId: 1, position: "Goalkeeper", nationality: "Brazil", age: 31, number: 31, goals: 0, assists: 1, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 88.6, tackles: 0, interceptions: 2, yellowCards: 1, redCards: 0, cleanSheets: 10, saves: 48 },
    { id: 102, name: "Stefan Ortega", teamId: 1, position: "Goalkeeper", nationality: "Germany", age: 31, number: 18, goals: 0, assists: 0, appearances: 8, minutesPlayed: 720, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 82.4, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 3, saves: 18 },
    // Defenders
    { id: 103, name: "Ruben Dias", teamId: 1, position: "Defender", nationality: "Portugal", age: 27, number: 3, goals: 2, assists: 1, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 92.1, tackles: 38, interceptions: 32, yellowCards: 3, redCards: 0, cleanSheets: 9, saves: 0 },
    { id: 104, name: "John Stones", teamId: 1, position: "Defender", nationality: "England", age: 30, number: 5, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 93.8, tackles: 28, interceptions: 26, yellowCards: 2, redCards: 0, cleanSheets: 8, saves: 0 },
    { id: 105, name: "Manuel Akanji", teamId: 1, position: "Defender", nationality: "Switzerland", age: 29, number: 25, goals: 1, assists: 0, appearances: 21, minutesPlayed: 1840, shotsOnTarget: 3, shotAccuracy: 33.3, passCompletion: 91.4, tackles: 32, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 9, saves: 0 },
    { id: 106, name: "Nathan Ake", teamId: 1, position: "Defender", nationality: "Netherlands", age: 29, number: 6, goals: 1, assists: 1, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 90.2, tackles: 24, interceptions: 18, yellowCards: 2, redCards: 0, cleanSheets: 6, saves: 0 },
    { id: 107, name: "Josko Gvardiol", teamId: 1, position: "Defender", nationality: "Croatia", age: 22, number: 24, goals: 4, assists: 3, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 10, shotAccuracy: 45.5, passCompletion: 89.6, tackles: 36, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 10, saves: 0 },
    { id: 108, name: "Kyle Walker", teamId: 1, position: "Defender", nationality: "England", age: 34, number: 2, goals: 0, assists: 2, appearances: 19, minutesPlayed: 1620, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 87.4, tackles: 28, interceptions: 16, yellowCards: 4, redCards: 0, cleanSheets: 8, saves: 0 },
    { id: 109, name: "Rico Lewis", teamId: 1, position: "Defender", nationality: "England", age: 20, number: 82, goals: 1, assists: 3, appearances: 18, minutesPlayed: 1240, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 88.2, tackles: 22, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 6, saves: 0 },
    // Midfielders
    { id: 110, name: "Rodri", teamId: 1, position: "Midfielder", nationality: "Spain", age: 28, number: 16, goals: 4, assists: 4, appearances: 22, minutesPlayed: 1960, shotsOnTarget: 12, shotAccuracy: 46.2, passCompletion: 92.4, tackles: 58, interceptions: 42, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 111, name: "Kevin De Bruyne", teamId: 1, position: "Midfielder", nationality: "Belgium", age: 33, number: 17, goals: 6, assists: 12, appearances: 18, minutesPlayed: 1420, shotsOnTarget: 18, shotAccuracy: 52.9, passCompletion: 89.2, tackles: 22, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 112, name: "Bernardo Silva", teamId: 1, position: "Midfielder", nationality: "Portugal", age: 30, number: 20, goals: 5, assists: 6, appearances: 21, minutesPlayed: 1720, shotsOnTarget: 16, shotAccuracy: 44.4, passCompletion: 90.1, tackles: 28, interceptions: 22, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 113, name: "Phil Foden", teamId: 1, position: "Midfielder", nationality: "England", age: 24, number: 47, goals: 8, assists: 7, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 28, shotAccuracy: 48.3, passCompletion: 86.8, tackles: 18, interceptions: 12, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 114, name: "Mateo Kovacic", teamId: 1, position: "Midfielder", nationality: "Croatia", age: 30, number: 8, goals: 2, assists: 3, appearances: 19, minutesPlayed: 1480, shotsOnTarget: 8, shotAccuracy: 38.1, passCompletion: 91.8, tackles: 34, interceptions: 26, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 115, name: "Matheus Nunes", teamId: 1, position: "Midfielder", nationality: "Portugal", age: 26, number: 27, goals: 1, assists: 2, appearances: 16, minutesPlayed: 980, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 86.4, tackles: 18, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    // Forwards
    { id: 116, name: "Erling Haaland", teamId: 1, position: "Forward", nationality: "Norway", age: 24, number: 9, goals: 18, assists: 5, appearances: 21, minutesPlayed: 1845, shotsOnTarget: 42, shotAccuracy: 58.3, passCompletion: 76.4, tackles: 8, interceptions: 2, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 117, name: "Julian Alvarez", teamId: 1, position: "Forward", nationality: "Argentina", age: 24, number: 19, goals: 8, assists: 6, appearances: 22, minutesPlayed: 1580, shotsOnTarget: 22, shotAccuracy: 50.0, passCompletion: 82.6, tackles: 24, interceptions: 14, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 118, name: "Jack Grealish", teamId: 1, position: "Forward", nationality: "England", age: 29, number: 10, goals: 3, assists: 4, appearances: 18, minutesPlayed: 1120, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 84.2, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 119, name: "Jeremy Doku", teamId: 1, position: "Forward", nationality: "Belgium", age: 22, number: 11, goals: 4, assists: 8, appearances: 20, minutesPlayed: 1340, shotsOnTarget: 14, shotAccuracy: 43.8, passCompletion: 80.6, tackles: 16, interceptions: 10, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 120, name: "Oscar Bobb", teamId: 1, position: "Forward", nationality: "Norway", age: 21, number: 52, goals: 2, assists: 2, appearances: 12, minutesPlayed: 680, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 78.4, tackles: 8, interceptions: 4, yellowCards: 0, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ ARSENAL (teamId: 2) ============
    // Goalkeepers
    { id: 201, name: "David Raya", teamId: 2, position: "Goalkeeper", nationality: "Spain", age: 29, number: 22, goals: 0, assists: 0, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 84.2, tackles: 0, interceptions: 1, yellowCards: 0, redCards: 0, cleanSheets: 11, saves: 52 },
    { id: 202, name: "Aaron Ramsdale", teamId: 2, position: "Goalkeeper", nationality: "England", age: 26, number: 1, goals: 0, assists: 0, appearances: 4, minutesPlayed: 360, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 78.6, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 8 },
    // Defenders
    { id: 203, name: "William Saliba", teamId: 2, position: "Defender", nationality: "France", age: 23, number: 12, goals: 2, assists: 1, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 91.4, tackles: 48, interceptions: 38, yellowCards: 4, redCards: 0, cleanSheets: 11, saves: 0 },
    { id: 204, name: "Gabriel Magalhaes", teamId: 2, position: "Defender", nationality: "Brazil", age: 26, number: 6, goals: 4, assists: 0, appearances: 21, minutesPlayed: 1880, shotsOnTarget: 10, shotAccuracy: 47.6, passCompletion: 88.6, tackles: 42, interceptions: 32, yellowCards: 5, redCards: 0, cleanSheets: 10, saves: 0 },
    { id: 205, name: "Ben White", teamId: 2, position: "Defender", nationality: "England", age: 27, number: 4, goals: 1, assists: 4, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 89.8, tackles: 32, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 9, saves: 0 },
    { id: 206, name: "Oleksandr Zinchenko", teamId: 2, position: "Defender", nationality: "Ukraine", age: 28, number: 35, goals: 0, assists: 3, appearances: 14, minutesPlayed: 980, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 90.4, tackles: 16, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 207, name: "Jurrien Timber", teamId: 2, position: "Defender", nationality: "Netherlands", age: 23, number: 12, goals: 0, assists: 2, appearances: 18, minutesPlayed: 1440, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 91.2, tackles: 28, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 8, saves: 0 },
    { id: 208, name: "Takehiro Tomiyasu", teamId: 2, position: "Defender", nationality: "Japan", age: 25, number: 18, goals: 0, assists: 1, appearances: 12, minutesPlayed: 860, shotsOnTarget: 1, shotAccuracy: 25.0, passCompletion: 88.4, tackles: 18, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 209, name: "Jakub Kiwior", teamId: 2, position: "Defender", nationality: "Poland", age: 24, number: 15, goals: 1, assists: 0, appearances: 10, minutesPlayed: 680, shotsOnTarget: 2, shotAccuracy: 40.0, passCompletion: 89.6, tackles: 14, interceptions: 10, yellowCards: 1, redCards: 0, cleanSheets: 4, saves: 0 },
    // Midfielders
    { id: 210, name: "Martin Odegaard", teamId: 2, position: "Midfielder", nationality: "Norway", age: 25, number: 8, goals: 7, assists: 8, appearances: 20, minutesPlayed: 1740, shotsOnTarget: 22, shotAccuracy: 48.9, passCompletion: 88.6, tackles: 26, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 211, name: "Declan Rice", teamId: 2, position: "Midfielder", nationality: "England", age: 26, number: 41, goals: 3, assists: 5, appearances: 21, minutesPlayed: 1840, shotsOnTarget: 10, shotAccuracy: 40.0, passCompletion: 89.8, tackles: 62, interceptions: 36, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 212, name: "Thomas Partey", teamId: 2, position: "Midfielder", nationality: "Ghana", age: 31, number: 5, goals: 1, assists: 2, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 6, shotAccuracy: 35.3, passCompletion: 88.2, tackles: 38, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 213, name: "Jorginho", teamId: 2, position: "Midfielder", nationality: "Italy", age: 33, number: 20, goals: 1, assists: 3, appearances: 14, minutesPlayed: 980, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 91.4, tackles: 22, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 214, name: "Fabio Vieira", teamId: 2, position: "Midfielder", nationality: "Portugal", age: 24, number: 21, goals: 1, assists: 2, appearances: 10, minutesPlayed: 580, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 84.6, tackles: 8, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 215, name: "Emile Smith Rowe", teamId: 2, position: "Midfielder", nationality: "England", age: 24, number: 10, goals: 1, assists: 1, appearances: 8, minutesPlayed: 420, shotsOnTarget: 3, shotAccuracy: 42.9, passCompletion: 82.4, tackles: 6, interceptions: 4, yellowCards: 0, redCards: 0, cleanSheets: 0, saves: 0 },
    // Forwards
    { id: 216, name: "Bukayo Saka", teamId: 2, position: "Forward", nationality: "England", age: 23, number: 7, goals: 12, assists: 10, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 32, shotAccuracy: 51.6, passCompletion: 82.4, tackles: 24, interceptions: 16, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 217, name: "Gabriel Jesus", teamId: 2, position: "Forward", nationality: "Brazil", age: 27, number: 9, goals: 6, assists: 4, appearances: 18, minutesPlayed: 1240, shotsOnTarget: 18, shotAccuracy: 45.0, passCompletion: 80.2, tackles: 16, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 218, name: "Gabriel Martinelli", teamId: 2, position: "Forward", nationality: "Brazil", age: 23, number: 11, goals: 8, assists: 5, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 22, shotAccuracy: 46.8, passCompletion: 80.8, tackles: 18, interceptions: 10, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 219, name: "Leandro Trossard", teamId: 2, position: "Forward", nationality: "Belgium", age: 29, number: 19, goals: 7, assists: 3, appearances: 20, minutesPlayed: 1320, shotsOnTarget: 18, shotAccuracy: 50.0, passCompletion: 82.6, tackles: 12, interceptions: 8, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 220, name: "Eddie Nketiah", teamId: 2, position: "Forward", nationality: "England", age: 25, number: 14, goals: 4, assists: 2, appearances: 14, minutesPlayed: 780, shotsOnTarget: 12, shotAccuracy: 46.2, passCompletion: 76.8, tackles: 10, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 221, name: "Kai Havertz", teamId: 2, position: "Forward", nationality: "Germany", age: 25, number: 29, goals: 9, assists: 4, appearances: 22, minutesPlayed: 1680, shotsOnTarget: 24, shotAccuracy: 48.0, passCompletion: 78.4, tackles: 22, interceptions: 14, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ LIVERPOOL (teamId: 3) ============
    // Goalkeepers
    { id: 301, name: "Alisson", teamId: 3, position: "Goalkeeper", nationality: "Brazil", age: 32, number: 1, goals: 0, assists: 1, appearances: 20, minutesPlayed: 1800, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 82.8, tackles: 0, interceptions: 2, yellowCards: 1, redCards: 0, cleanSheets: 7, saves: 58 },
    { id: 302, name: "Caoimhin Kelleher", teamId: 3, position: "Goalkeeper", nationality: "Ireland", age: 26, number: 62, goals: 0, assists: 0, appearances: 6, minutesPlayed: 540, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 78.4, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 2, saves: 16 },
    // Defenders
    { id: 303, name: "Virgil van Dijk", teamId: 3, position: "Defender", nationality: "Netherlands", age: 33, number: 4, goals: 3, assists: 2, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 8, shotAccuracy: 50.0, passCompletion: 90.2, tackles: 42, interceptions: 36, yellowCards: 3, redCards: 0, cleanSheets: 8, saves: 0 },
    { id: 304, name: "Ibrahima Konate", teamId: 3, position: "Defender", nationality: "France", age: 25, number: 5, goals: 2, assists: 0, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 6, shotAccuracy: 46.2, passCompletion: 88.6, tackles: 34, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 6, saves: 0 },
    { id: 305, name: "Joe Gomez", teamId: 3, position: "Defender", nationality: "England", age: 27, number: 2, goals: 0, assists: 1, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 89.4, tackles: 26, interceptions: 20, yellowCards: 2, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 306, name: "Trent Alexander-Arnold", teamId: 3, position: "Defender", nationality: "England", age: 26, number: 66, goals: 2, assists: 8, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 8, shotAccuracy: 38.1, passCompletion: 86.2, tackles: 28, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 7, saves: 0 },
    { id: 307, name: "Andrew Robertson", teamId: 3, position: "Defender", nationality: "Scotland", age: 30, number: 26, goals: 1, assists: 6, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 84.8, tackles: 32, interceptions: 22, yellowCards: 4, redCards: 0, cleanSheets: 6, saves: 0 },
    { id: 308, name: "Kostas Tsimikas", teamId: 3, position: "Defender", nationality: "Greece", age: 28, number: 21, goals: 0, assists: 3, appearances: 12, minutesPlayed: 840, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.4, tackles: 16, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 309, name: "Jarell Quansah", teamId: 3, position: "Defender", nationality: "England", age: 21, number: 78, goals: 1, assists: 0, appearances: 14, minutesPlayed: 980, shotsOnTarget: 2, shotAccuracy: 40.0, passCompletion: 87.6, tackles: 22, interceptions: 16, yellowCards: 2, redCards: 0, cleanSheets: 4, saves: 0 },
    // Midfielders
    { id: 310, name: "Alexis Mac Allister", teamId: 3, position: "Midfielder", nationality: "Argentina", age: 26, number: 10, goals: 5, assists: 6, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 14, shotAccuracy: 43.8, passCompletion: 87.4, tackles: 38, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 311, name: "Dominik Szoboszlai", teamId: 3, position: "Midfielder", nationality: "Hungary", age: 24, number: 8, goals: 4, assists: 5, appearances: 20, minutesPlayed: 1620, shotsOnTarget: 16, shotAccuracy: 45.7, passCompletion: 85.2, tackles: 32, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 312, name: "Ryan Gravenberch", teamId: 3, position: "Midfielder", nationality: "Netherlands", age: 22, number: 38, goals: 2, assists: 3, appearances: 22, minutesPlayed: 1680, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 88.6, tackles: 44, interceptions: 32, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 313, name: "Wataru Endo", teamId: 3, position: "Midfielder", nationality: "Japan", age: 31, number: 3, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1280, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 86.8, tackles: 48, interceptions: 34, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 314, name: "Curtis Jones", teamId: 3, position: "Midfielder", nationality: "England", age: 23, number: 17, goals: 3, assists: 4, appearances: 18, minutesPlayed: 1240, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 84.2, tackles: 26, interceptions: 18, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 315, name: "Harvey Elliott", teamId: 3, position: "Midfielder", nationality: "England", age: 21, number: 19, goals: 2, assists: 4, appearances: 16, minutesPlayed: 980, shotsOnTarget: 8, shotAccuracy: 44.4, passCompletion: 82.6, tackles: 18, interceptions: 12, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    // Forwards
    { id: 316, name: "Mohamed Salah", teamId: 3, position: "Forward", nationality: "Egypt", age: 32, number: 11, goals: 16, assists: 11, appearances: 22, minutesPlayed: 1940, shotsOnTarget: 44, shotAccuracy: 55.0, passCompletion: 81.6, tackles: 14, interceptions: 10, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 317, name: "Darwin Nunez", teamId: 3, position: "Forward", nationality: "Uruguay", age: 25, number: 9, goals: 10, assists: 4, appearances: 20, minutesPlayed: 1480, shotsOnTarget: 26, shotAccuracy: 43.3, passCompletion: 74.8, tackles: 12, interceptions: 6, yellowCards: 4, redCards: 1, cleanSheets: 0, saves: 0 },
    { id: 318, name: "Luis Diaz", teamId: 3, position: "Forward", nationality: "Colombia", age: 28, number: 7, goals: 8, assists: 5, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 22, shotAccuracy: 47.8, passCompletion: 82.4, tackles: 18, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 319, name: "Diogo Jota", teamId: 3, position: "Forward", nationality: "Portugal", age: 28, number: 20, goals: 7, assists: 3, appearances: 16, minutesPlayed: 1120, shotsOnTarget: 18, shotAccuracy: 50.0, passCompletion: 80.4, tackles: 12, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 320, name: "Cody Gakpo", teamId: 3, position: "Forward", nationality: "Netherlands", age: 25, number: 18, goals: 6, assists: 4, appearances: 20, minutesPlayed: 1380, shotsOnTarget: 16, shotAccuracy: 47.1, passCompletion: 78.6, tackles: 14, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ ASTON VILLA (teamId: 4) ============
    { id: 401, name: "Emi Martinez", teamId: 4, position: "Goalkeeper", nationality: "Argentina", age: 32, number: 1, goals: 0, assists: 0, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 78.4, tackles: 0, interceptions: 1, yellowCards: 2, redCards: 0, cleanSheets: 7, saves: 62 },
    { id: 402, name: "Robin Olsen", teamId: 4, position: "Goalkeeper", nationality: "Sweden", age: 34, number: 25, goals: 0, assists: 0, appearances: 2, minutesPlayed: 180, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 74.2, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 0, saves: 4 },
    { id: 403, name: "Pau Torres", teamId: 4, position: "Defender", nationality: "Spain", age: 27, number: 4, goals: 1, assists: 1, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 90.8, tackles: 36, interceptions: 28, yellowCards: 3, redCards: 0, cleanSheets: 6, saves: 0 },
    { id: 404, name: "Ezri Konsa", teamId: 4, position: "Defender", nationality: "England", age: 27, number: 5, goals: 2, assists: 0, appearances: 21, minutesPlayed: 1840, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 88.4, tackles: 42, interceptions: 32, yellowCards: 4, redCards: 0, cleanSheets: 6, saves: 0 },
    { id: 405, name: "Lucas Digne", teamId: 4, position: "Defender", nationality: "France", age: 31, number: 12, goals: 0, assists: 4, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 82.6, tackles: 24, interceptions: 16, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 406, name: "Matty Cash", teamId: 4, position: "Defender", nationality: "Poland", age: 27, number: 2, goals: 1, assists: 3, appearances: 19, minutesPlayed: 1640, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 84.2, tackles: 32, interceptions: 20, yellowCards: 4, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 407, name: "Diego Carlos", teamId: 4, position: "Defender", nationality: "Brazil", age: 31, number: 3, goals: 1, assists: 0, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 86.8, tackles: 28, interceptions: 22, yellowCards: 5, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 408, name: "John McGinn", teamId: 4, position: "Midfielder", nationality: "Scotland", age: 30, number: 7, goals: 4, assists: 5, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 12, shotAccuracy: 40.0, passCompletion: 83.6, tackles: 42, interceptions: 28, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 409, name: "Boubacar Kamara", teamId: 4, position: "Midfielder", nationality: "France", age: 24, number: 44, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1480, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 89.2, tackles: 48, interceptions: 36, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 410, name: "Youri Tielemans", teamId: 4, position: "Midfielder", nationality: "Belgium", age: 27, number: 8, goals: 3, assists: 4, appearances: 20, minutesPlayed: 1620, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 87.4, tackles: 32, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 411, name: "Douglas Luiz", teamId: 4, position: "Midfielder", nationality: "Brazil", age: 26, number: 6, goals: 5, assists: 6, appearances: 22, minutesPlayed: 1840, shotsOnTarget: 14, shotAccuracy: 43.8, passCompletion: 86.2, tackles: 38, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 412, name: "Jacob Ramsey", teamId: 4, position: "Midfielder", nationality: "England", age: 23, number: 41, goals: 3, assists: 3, appearances: 16, minutesPlayed: 1120, shotsOnTarget: 8, shotAccuracy: 44.4, passCompletion: 82.8, tackles: 22, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 413, name: "Ollie Watkins", teamId: 4, position: "Forward", nationality: "England", age: 29, number: 11, goals: 13, assists: 8, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 34, shotAccuracy: 48.6, passCompletion: 78.2, tackles: 22, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 414, name: "Leon Bailey", teamId: 4, position: "Forward", nationality: "Jamaica", age: 27, number: 31, goals: 6, assists: 4, appearances: 19, minutesPlayed: 1340, shotsOnTarget: 16, shotAccuracy: 45.7, passCompletion: 76.8, tackles: 14, interceptions: 10, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 415, name: "Moussa Diaby", teamId: 4, position: "Forward", nationality: "France", age: 25, number: 19, goals: 5, assists: 6, appearances: 21, minutesPlayed: 1580, shotsOnTarget: 14, shotAccuracy: 43.8, passCompletion: 80.4, tackles: 16, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 416, name: "Jhon Duran", teamId: 4, position: "Forward", nationality: "Colombia", age: 20, number: 9, goals: 4, assists: 1, appearances: 14, minutesPlayed: 680, shotsOnTarget: 10, shotAccuracy: 50.0, passCompletion: 72.4, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ TOTTENHAM (teamId: 5) ============
    { id: 501, name: "Guglielmo Vicario", teamId: 5, position: "Goalkeeper", nationality: "Italy", age: 28, number: 13, goals: 0, assists: 0, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 80.2, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 5, saves: 68 },
    { id: 502, name: "Fraser Forster", teamId: 5, position: "Goalkeeper", nationality: "England", age: 36, number: 20, goals: 0, assists: 0, appearances: 2, minutesPlayed: 180, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.4, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 0, saves: 4 },
    { id: 503, name: "Cristian Romero", teamId: 5, position: "Defender", nationality: "Argentina", age: 26, number: 17, goals: 2, assists: 1, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 6, shotAccuracy: 46.2, passCompletion: 87.4, tackles: 46, interceptions: 32, yellowCards: 6, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 504, name: "Micky van de Ven", teamId: 5, position: "Defender", nationality: "Netherlands", age: 23, number: 37, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 89.6, tackles: 38, interceptions: 26, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 505, name: "Ben Davies", teamId: 5, position: "Defender", nationality: "Wales", age: 31, number: 33, goals: 0, assists: 1, appearances: 14, minutesPlayed: 1080, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 86.4, tackles: 22, interceptions: 18, yellowCards: 2, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 506, name: "Pedro Porro", teamId: 5, position: "Defender", nationality: "Spain", age: 25, number: 23, goals: 2, assists: 5, appearances: 21, minutesPlayed: 1840, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 84.8, tackles: 34, interceptions: 22, yellowCards: 4, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 507, name: "Destiny Udogie", teamId: 5, position: "Defender", nationality: "Italy", age: 22, number: 38, goals: 1, assists: 4, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 83.2, tackles: 36, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 508, name: "Emerson Royal", teamId: 5, position: "Defender", nationality: "Brazil", age: 25, number: 12, goals: 0, assists: 1, appearances: 12, minutesPlayed: 840, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.6, tackles: 18, interceptions: 12, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 509, name: "James Maddison", teamId: 5, position: "Midfielder", nationality: "England", age: 28, number: 10, goals: 7, assists: 9, appearances: 20, minutesPlayed: 1640, shotsOnTarget: 20, shotAccuracy: 46.5, passCompletion: 85.2, tackles: 24, interceptions: 18, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 510, name: "Rodrigo Bentancur", teamId: 5, position: "Midfielder", nationality: "Uruguay", age: 27, number: 30, goals: 2, assists: 3, appearances: 18, minutesPlayed: 1440, shotsOnTarget: 6, shotAccuracy: 37.5, passCompletion: 87.8, tackles: 42, interceptions: 30, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 511, name: "Yves Bissouma", teamId: 5, position: "Midfielder", nationality: "Mali", age: 28, number: 38, goals: 1, assists: 2, appearances: 19, minutesPlayed: 1480, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 86.4, tackles: 48, interceptions: 34, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 512, name: "Pape Sarr", teamId: 5, position: "Midfielder", nationality: "Senegal", age: 22, number: 29, goals: 2, assists: 2, appearances: 20, minutesPlayed: 1380, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 84.6, tackles: 36, interceptions: 26, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 513, name: "Son Heung-min", teamId: 5, position: "Forward", nationality: "South Korea", age: 32, number: 7, goals: 14, assists: 7, appearances: 22, minutesPlayed: 1880, shotsOnTarget: 36, shotAccuracy: 52.2, passCompletion: 82.6, tackles: 16, interceptions: 12, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 514, name: "Richarlison", teamId: 5, position: "Forward", nationality: "Brazil", age: 27, number: 9, goals: 6, assists: 3, appearances: 18, minutesPlayed: 1240, shotsOnTarget: 16, shotAccuracy: 44.4, passCompletion: 76.8, tackles: 18, interceptions: 8, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 515, name: "Brennan Johnson", teamId: 5, position: "Forward", nationality: "Wales", age: 23, number: 22, goals: 5, assists: 4, appearances: 21, minutesPlayed: 1480, shotsOnTarget: 14, shotAccuracy: 46.7, passCompletion: 78.4, tackles: 14, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 516, name: "Dejan Kulusevski", teamId: 5, position: "Forward", nationality: "Sweden", age: 24, number: 21, goals: 4, assists: 6, appearances: 20, minutesPlayed: 1520, shotsOnTarget: 12, shotAccuracy: 42.9, passCompletion: 82.8, tackles: 22, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 517, name: "Timo Werner", teamId: 5, position: "Forward", nationality: "Germany", age: 28, number: 16, goals: 3, assists: 4, appearances: 16, minutesPlayed: 980, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 76.2, tackles: 12, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ CHELSEA (teamId: 6) ============
    { id: 601, name: "Robert Sanchez", teamId: 6, position: "Goalkeeper", nationality: "Spain", age: 27, number: 1, goals: 0, assists: 0, appearances: 20, minutesPlayed: 1800, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 82.4, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 6, saves: 54 },
    { id: 602, name: "Djordje Petrovic", teamId: 6, position: "Goalkeeper", nationality: "Serbia", age: 24, number: 28, goals: 0, assists: 0, appearances: 4, minutesPlayed: 360, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 78.2, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 10 },
    { id: 603, name: "Thiago Silva", teamId: 6, position: "Defender", nationality: "Brazil", age: 40, number: 6, goals: 1, assists: 0, appearances: 16, minutesPlayed: 1360, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 92.4, tackles: 26, interceptions: 24, yellowCards: 2, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 604, name: "Levi Colwill", teamId: 6, position: "Defender", nationality: "England", age: 21, number: 26, goals: 1, assists: 1, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 89.6, tackles: 36, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 6, saves: 0 },
    { id: 605, name: "Wesley Fofana", teamId: 6, position: "Defender", nationality: "France", age: 23, number: 33, goals: 0, assists: 0, appearances: 10, minutesPlayed: 840, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 88.2, tackles: 18, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 606, name: "Malo Gusto", teamId: 6, position: "Defender", nationality: "France", age: 21, number: 27, goals: 1, assists: 4, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 85.6, tackles: 34, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 607, name: "Marc Cucurella", teamId: 6, position: "Defender", nationality: "Spain", age: 26, number: 3, goals: 0, assists: 3, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 86.4, tackles: 32, interceptions: 20, yellowCards: 4, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 608, name: "Ben Chilwell", teamId: 6, position: "Defender", nationality: "England", age: 28, number: 21, goals: 0, assists: 1, appearances: 8, minutesPlayed: 520, shotsOnTarget: 1, shotAccuracy: 20.0, passCompletion: 84.2, tackles: 12, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 609, name: "Reece James", teamId: 6, position: "Defender", nationality: "England", age: 24, number: 24, goals: 1, assists: 2, appearances: 12, minutesPlayed: 940, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 86.8, tackles: 22, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 610, name: "Enzo Fernandez", teamId: 6, position: "Midfielder", nationality: "Argentina", age: 24, number: 8, goals: 3, assists: 6, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 10, shotAccuracy: 38.5, passCompletion: 88.2, tackles: 36, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 611, name: "Moises Caicedo", teamId: 6, position: "Midfielder", nationality: "Ecuador", age: 23, number: 25, goals: 2, assists: 2, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 87.6, tackles: 56, interceptions: 38, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 612, name: "Conor Gallagher", teamId: 6, position: "Midfielder", nationality: "England", age: 24, number: 23, goals: 4, assists: 4, appearances: 22, minutesPlayed: 1780, shotsOnTarget: 12, shotAccuracy: 44.4, passCompletion: 84.2, tackles: 48, interceptions: 32, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 613, name: "Romeo Lavia", teamId: 6, position: "Midfielder", nationality: "Belgium", age: 20, number: 45, goals: 0, assists: 1, appearances: 8, minutesPlayed: 520, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 86.8, tackles: 16, interceptions: 12, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 614, name: "Cole Palmer", teamId: 6, position: "Midfielder", nationality: "England", age: 22, number: 20, goals: 14, assists: 8, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 38, shotAccuracy: 54.3, passCompletion: 84.6, tackles: 20, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 615, name: "Raheem Sterling", teamId: 6, position: "Forward", nationality: "England", age: 30, number: 17, goals: 4, assists: 3, appearances: 16, minutesPlayed: 1080, shotsOnTarget: 12, shotAccuracy: 44.4, passCompletion: 82.4, tackles: 10, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 616, name: "Nicolas Jackson", teamId: 6, position: "Forward", nationality: "Senegal", age: 23, number: 15, goals: 9, assists: 5, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 24, shotAccuracy: 46.2, passCompletion: 78.4, tackles: 16, interceptions: 8, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 617, name: "Mykhailo Mudryk", teamId: 6, position: "Forward", nationality: "Ukraine", age: 23, number: 10, goals: 3, assists: 4, appearances: 20, minutesPlayed: 1240, shotsOnTarget: 10, shotAccuracy: 38.5, passCompletion: 76.8, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 618, name: "Noni Madueke", teamId: 6, position: "Forward", nationality: "England", age: 22, number: 11, goals: 5, assists: 3, appearances: 19, minutesPlayed: 1280, shotsOnTarget: 14, shotAccuracy: 46.7, passCompletion: 80.2, tackles: 12, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 619, name: "Christopher Nkunku", teamId: 6, position: "Forward", nationality: "France", age: 27, number: 18, goals: 3, assists: 2, appearances: 14, minutesPlayed: 820, shotsOnTarget: 10, shotAccuracy: 50.0, passCompletion: 82.4, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ NEWCASTLE (teamId: 7) ============
    { id: 701, name: "Nick Pope", teamId: 7, position: "Goalkeeper", nationality: "England", age: 32, number: 22, goals: 0, assists: 0, appearances: 18, minutesPlayed: 1620, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 76.4, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 6, saves: 52 },
    { id: 702, name: "Martin Dubravka", teamId: 7, position: "Goalkeeper", nationality: "Slovakia", age: 35, number: 1, goals: 0, assists: 0, appearances: 6, minutesPlayed: 540, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.8, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 18 },
    { id: 703, name: "Sven Botman", teamId: 7, position: "Defender", nationality: "Netherlands", age: 24, number: 4, goals: 1, assists: 0, appearances: 14, minutesPlayed: 1220, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 88.6, tackles: 28, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 704, name: "Fabian Schar", teamId: 7, position: "Defender", nationality: "Switzerland", age: 32, number: 5, goals: 2, assists: 1, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 87.2, tackles: 36, interceptions: 30, yellowCards: 5, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 705, name: "Dan Burn", teamId: 7, position: "Defender", nationality: "England", age: 32, number: 33, goals: 1, assists: 0, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 84.6, tackles: 32, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 706, name: "Kieran Trippier", teamId: 7, position: "Defender", nationality: "England", age: 34, number: 2, goals: 1, assists: 6, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 82.8, tackles: 32, interceptions: 20, yellowCards: 4, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 707, name: "Tino Livramento", teamId: 7, position: "Defender", nationality: "England", age: 21, number: 21, goals: 0, assists: 2, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 83.4, tackles: 28, interceptions: 18, yellowCards: 2, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 708, name: "Lewis Hall", teamId: 7, position: "Defender", nationality: "England", age: 20, number: 20, goals: 0, assists: 2, appearances: 14, minutesPlayed: 1040, shotsOnTarget: 1, shotAccuracy: 25.0, passCompletion: 84.2, tackles: 22, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 709, name: "Bruno Guimaraes", teamId: 7, position: "Midfielder", nationality: "Brazil", age: 27, number: 39, goals: 4, assists: 5, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 14, shotAccuracy: 42.4, passCompletion: 87.8, tackles: 52, interceptions: 34, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 710, name: "Sandro Tonali", teamId: 7, position: "Midfielder", nationality: "Italy", age: 24, number: 8, goals: 1, assists: 1, appearances: 8, minutesPlayed: 620, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 86.4, tackles: 18, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 711, name: "Joelinton", teamId: 7, position: "Midfielder", nationality: "Brazil", age: 28, number: 7, goals: 3, assists: 4, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 82.6, tackles: 46, interceptions: 30, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 712, name: "Sean Longstaff", teamId: 7, position: "Midfielder", nationality: "England", age: 27, number: 36, goals: 2, assists: 2, appearances: 18, minutesPlayed: 1320, shotsOnTarget: 6, shotAccuracy: 37.5, passCompletion: 84.2, tackles: 34, interceptions: 24, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 713, name: "Joe Willock", teamId: 7, position: "Midfielder", nationality: "England", age: 25, number: 28, goals: 2, assists: 3, appearances: 16, minutesPlayed: 1120, shotsOnTarget: 8, shotAccuracy: 44.4, passCompletion: 82.8, tackles: 26, interceptions: 18, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 714, name: "Alexander Isak", teamId: 7, position: "Forward", nationality: "Sweden", age: 25, number: 14, goals: 15, assists: 4, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 38, shotAccuracy: 56.7, passCompletion: 80.2, tackles: 14, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 715, name: "Callum Wilson", teamId: 7, position: "Forward", nationality: "England", age: 32, number: 9, goals: 4, assists: 2, appearances: 12, minutesPlayed: 780, shotsOnTarget: 12, shotAccuracy: 52.2, passCompletion: 76.8, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 716, name: "Anthony Gordon", teamId: 7, position: "Forward", nationality: "England", age: 23, number: 10, goals: 8, assists: 6, appearances: 22, minutesPlayed: 1880, shotsOnTarget: 22, shotAccuracy: 48.9, passCompletion: 80.4, tackles: 18, interceptions: 12, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 717, name: "Jacob Murphy", teamId: 7, position: "Forward", nationality: "England", age: 29, number: 23, goals: 3, assists: 5, appearances: 20, minutesPlayed: 1420, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 78.6, tackles: 14, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 718, name: "Miguel Almiron", teamId: 7, position: "Forward", nationality: "Paraguay", age: 30, number: 24, goals: 2, assists: 3, appearances: 18, minutesPlayed: 1080, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 78.2, tackles: 16, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ MANCHESTER UNITED (teamId: 8) ============
    { id: 801, name: "Andre Onana", teamId: 8, position: "Goalkeeper", nationality: "Cameroon", age: 28, number: 24, goals: 0, assists: 0, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 84.2, tackles: 0, interceptions: 2, yellowCards: 1, redCards: 0, cleanSheets: 4, saves: 64 },
    { id: 802, name: "Altay Bayindir", teamId: 8, position: "Goalkeeper", nationality: "Turkey", age: 26, number: 1, goals: 0, assists: 0, appearances: 2, minutesPlayed: 180, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 76.4, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 0, saves: 6 },
    { id: 803, name: "Raphael Varane", teamId: 8, position: "Defender", nationality: "France", age: 31, number: 19, goals: 0, assists: 0, appearances: 14, minutesPlayed: 1180, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 89.6, tackles: 24, interceptions: 22, yellowCards: 2, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 804, name: "Lisandro Martinez", teamId: 8, position: "Defender", nationality: "Argentina", age: 26, number: 6, goals: 1, assists: 1, appearances: 18, minutesPlayed: 1540, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 88.4, tackles: 38, interceptions: 28, yellowCards: 5, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 805, name: "Harry Maguire", teamId: 8, position: "Defender", nationality: "England", age: 31, number: 5, goals: 1, assists: 0, appearances: 16, minutesPlayed: 1320, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 86.8, tackles: 28, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 806, name: "Victor Lindelof", teamId: 8, position: "Defender", nationality: "Sweden", age: 30, number: 2, goals: 0, assists: 0, appearances: 12, minutesPlayed: 940, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 87.2, tackles: 20, interceptions: 16, yellowCards: 2, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 807, name: "Luke Shaw", teamId: 8, position: "Defender", nationality: "England", age: 29, number: 23, goals: 0, assists: 2, appearances: 10, minutesPlayed: 780, shotsOnTarget: 1, shotAccuracy: 25.0, passCompletion: 84.6, tackles: 16, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 808, name: "Diogo Dalot", teamId: 8, position: "Defender", nationality: "Portugal", age: 25, number: 20, goals: 1, assists: 4, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 84.2, tackles: 36, interceptions: 24, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 809, name: "Aaron Wan-Bissaka", teamId: 8, position: "Defender", nationality: "England", age: 26, number: 29, goals: 0, assists: 1, appearances: 14, minutesPlayed: 1080, shotsOnTarget: 1, shotAccuracy: 20.0, passCompletion: 82.4, tackles: 32, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 810, name: "Bruno Fernandes", teamId: 8, position: "Midfielder", nationality: "Portugal", age: 30, number: 8, goals: 8, assists: 7, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 24, shotAccuracy: 46.2, passCompletion: 82.8, tackles: 28, interceptions: 20, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 811, name: "Casemiro", teamId: 8, position: "Midfielder", nationality: "Brazil", age: 32, number: 18, goals: 2, assists: 2, appearances: 18, minutesPlayed: 1480, shotsOnTarget: 8, shotAccuracy: 38.1, passCompletion: 86.4, tackles: 42, interceptions: 30, yellowCards: 6, redCards: 1, cleanSheets: 0, saves: 0 },
    { id: 812, name: "Kobbie Mainoo", teamId: 8, position: "Midfielder", nationality: "England", age: 19, number: 37, goals: 3, assists: 2, appearances: 20, minutesPlayed: 1520, shotsOnTarget: 8, shotAccuracy: 44.4, passCompletion: 87.6, tackles: 32, interceptions: 22, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 813, name: "Scott McTominay", teamId: 8, position: "Midfielder", nationality: "Scotland", age: 27, number: 39, goals: 5, assists: 3, appearances: 21, minutesPlayed: 1640, shotsOnTarget: 14, shotAccuracy: 46.7, passCompletion: 84.2, tackles: 36, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 814, name: "Christian Eriksen", teamId: 8, position: "Midfielder", nationality: "Denmark", age: 32, number: 14, goals: 1, assists: 3, appearances: 14, minutesPlayed: 880, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 88.6, tackles: 14, interceptions: 10, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 815, name: "Mason Mount", teamId: 8, position: "Midfielder", nationality: "England", age: 25, number: 7, goals: 1, assists: 2, appearances: 10, minutesPlayed: 620, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 84.2, tackles: 12, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 816, name: "Marcus Rashford", teamId: 8, position: "Forward", nationality: "England", age: 27, number: 10, goals: 7, assists: 4, appearances: 21, minutesPlayed: 1720, shotsOnTarget: 22, shotAccuracy: 45.8, passCompletion: 78.4, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 817, name: "Rasmus Hojlund", teamId: 8, position: "Forward", nationality: "Denmark", age: 21, number: 11, goals: 8, assists: 2, appearances: 20, minutesPlayed: 1480, shotsOnTarget: 22, shotAccuracy: 47.8, passCompletion: 76.2, tackles: 12, interceptions: 6, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 818, name: "Alejandro Garnacho", teamId: 8, position: "Forward", nationality: "Argentina", age: 20, number: 17, goals: 6, assists: 5, appearances: 22, minutesPlayed: 1520, shotsOnTarget: 16, shotAccuracy: 45.7, passCompletion: 78.8, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 819, name: "Antony", teamId: 8, position: "Forward", nationality: "Brazil", age: 24, number: 21, goals: 2, assists: 2, appearances: 16, minutesPlayed: 940, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 80.2, tackles: 10, interceptions: 6, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ BRIGHTON (teamId: 9) ============
    { id: 901, name: "Jason Steele", teamId: 9, position: "Goalkeeper", nationality: "England", age: 34, number: 1, goals: 0, assists: 0, appearances: 18, minutesPlayed: 1620, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 78.2, tackles: 0, interceptions: 1, yellowCards: 0, redCards: 0, cleanSheets: 5, saves: 48 },
    { id: 902, name: "Bart Verbruggen", teamId: 9, position: "Goalkeeper", nationality: "Netherlands", age: 22, number: 31, goals: 0, assists: 0, appearances: 6, minutesPlayed: 540, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 80.4, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 2, saves: 14 },
    { id: 903, name: "Lewis Dunk", teamId: 9, position: "Defender", nationality: "England", age: 33, number: 5, goals: 2, assists: 1, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 87.4, tackles: 34, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 904, name: "Adam Webster", teamId: 9, position: "Defender", nationality: "England", age: 29, number: 4, goals: 1, assists: 0, appearances: 16, minutesPlayed: 1360, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 88.2, tackles: 28, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 905, name: "Joel Veltman", teamId: 9, position: "Defender", nationality: "Netherlands", age: 32, number: 34, goals: 0, assists: 2, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 85.6, tackles: 30, interceptions: 20, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 906, name: "Pervis Estupinan", teamId: 9, position: "Defender", nationality: "Ecuador", age: 26, number: 30, goals: 1, assists: 4, appearances: 19, minutesPlayed: 1620, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 82.8, tackles: 26, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 907, name: "Jan Paul van Hecke", teamId: 9, position: "Defender", nationality: "Netherlands", age: 24, number: 29, goals: 1, assists: 0, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 86.4, tackles: 36, interceptions: 26, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 908, name: "Pascal Gross", teamId: 9, position: "Midfielder", nationality: "Germany", age: 33, number: 13, goals: 4, assists: 6, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 12, shotAccuracy: 44.4, passCompletion: 86.2, tackles: 28, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 909, name: "Carlos Baleba", teamId: 9, position: "Midfielder", nationality: "Cameroon", age: 20, number: 45, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1320, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 87.8, tackles: 38, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 910, name: "Billy Gilmour", teamId: 9, position: "Midfielder", nationality: "Scotland", age: 23, number: 14, goals: 1, assists: 3, appearances: 16, minutesPlayed: 1240, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 89.4, tackles: 32, interceptions: 24, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 911, name: "Mahmoud Dahoud", teamId: 9, position: "Midfielder", nationality: "Germany", age: 28, number: 8, goals: 0, assists: 2, appearances: 12, minutesPlayed: 820, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 88.6, tackles: 18, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 912, name: "James Milner", teamId: 9, position: "Midfielder", nationality: "England", age: 38, number: 6, goals: 0, assists: 2, appearances: 14, minutesPlayed: 920, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 84.2, tackles: 20, interceptions: 16, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 913, name: "Kaoru Mitoma", teamId: 9, position: "Forward", nationality: "Japan", age: 27, number: 22, goals: 7, assists: 5, appearances: 20, minutesPlayed: 1620, shotsOnTarget: 18, shotAccuracy: 46.2, passCompletion: 80.4, tackles: 14, interceptions: 10, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 914, name: "Joao Pedro", teamId: 9, position: "Forward", nationality: "Brazil", age: 23, number: 9, goals: 8, assists: 4, appearances: 21, minutesPlayed: 1740, shotsOnTarget: 22, shotAccuracy: 50.0, passCompletion: 78.6, tackles: 12, interceptions: 6, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 915, name: "Danny Welbeck", teamId: 9, position: "Forward", nationality: "England", age: 34, number: 18, goals: 6, assists: 3, appearances: 19, minutesPlayed: 1380, shotsOnTarget: 16, shotAccuracy: 47.1, passCompletion: 76.8, tackles: 14, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 916, name: "Evan Ferguson", teamId: 9, position: "Forward", nationality: "Ireland", age: 19, number: 28, goals: 4, assists: 2, appearances: 16, minutesPlayed: 980, shotsOnTarget: 12, shotAccuracy: 48.0, passCompletion: 74.2, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 917, name: "Simon Adingra", teamId: 9, position: "Forward", nationality: "Ivory Coast", age: 22, number: 7, goals: 3, assists: 4, appearances: 18, minutesPlayed: 1180, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 78.4, tackles: 12, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 918, name: "Solly March", teamId: 9, position: "Forward", nationality: "England", age: 30, number: 20, goals: 2, assists: 3, appearances: 14, minutesPlayed: 940, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 80.2, tackles: 10, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ WEST HAM (teamId: 10) ============
    { id: 1001, name: "Alphonse Areola", teamId: 10, position: "Goalkeeper", nationality: "France", age: 31, number: 1, goals: 0, assists: 0, appearances: 14, minutesPlayed: 1260, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 76.4, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 3, saves: 42 },
    { id: 1002, name: "Lukasz Fabianski", teamId: 10, position: "Goalkeeper", nationality: "Poland", age: 39, number: 21, goals: 0, assists: 0, appearances: 10, minutesPlayed: 900, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.8, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 2, saves: 28 },
    { id: 1003, name: "Kurt Zouma", teamId: 10, position: "Defender", nationality: "France", age: 30, number: 4, goals: 1, assists: 0, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 84.6, tackles: 32, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1004, name: "Nayef Aguerd", teamId: 10, position: "Defender", nationality: "Morocco", age: 28, number: 5, goals: 0, assists: 1, appearances: 16, minutesPlayed: 1360, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 86.8, tackles: 28, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1005, name: "Konstantinos Mavropanos", teamId: 10, position: "Defender", nationality: "Greece", age: 27, number: 15, goals: 1, assists: 0, appearances: 14, minutesPlayed: 1180, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 82.4, tackles: 26, interceptions: 20, yellowCards: 4, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1006, name: "Emerson Palmieri", teamId: 10, position: "Defender", nationality: "Italy", age: 30, number: 33, goals: 0, assists: 3, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 84.2, tackles: 30, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1007, name: "Vladimir Coufal", teamId: 10, position: "Defender", nationality: "Czech Republic", age: 32, number: 5, goals: 0, assists: 2, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 80.6, tackles: 28, interceptions: 16, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1008, name: "Aaron Cresswell", teamId: 10, position: "Defender", nationality: "England", age: 35, number: 3, goals: 0, assists: 1, appearances: 12, minutesPlayed: 920, shotsOnTarget: 1, shotAccuracy: 25.0, passCompletion: 82.8, tackles: 16, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1009, name: "Lucas Paqueta", teamId: 10, position: "Midfielder", nationality: "Brazil", age: 27, number: 11, goals: 5, assists: 5, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 14, shotAccuracy: 43.8, passCompletion: 84.2, tackles: 28, interceptions: 20, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1010, name: "Tomas Soucek", teamId: 10, position: "Midfielder", nationality: "Czech Republic", age: 29, number: 28, goals: 4, assists: 2, appearances: 22, minutesPlayed: 1880, shotsOnTarget: 12, shotAccuracy: 46.2, passCompletion: 82.6, tackles: 42, interceptions: 30, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1011, name: "James Ward-Prowse", teamId: 10, position: "Midfielder", nationality: "England", age: 30, number: 7, goals: 3, assists: 6, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 10, shotAccuracy: 40.0, passCompletion: 86.4, tackles: 26, interceptions: 18, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1012, name: "Mohammed Kudus", teamId: 10, position: "Midfielder", nationality: "Ghana", age: 24, number: 14, goals: 7, assists: 4, appearances: 21, minutesPlayed: 1740, shotsOnTarget: 20, shotAccuracy: 48.8, passCompletion: 80.4, tackles: 22, interceptions: 14, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1013, name: "Edson Alvarez", teamId: 10, position: "Midfielder", nationality: "Mexico", age: 27, number: 19, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1480, shotsOnTarget: 4, shotAccuracy: 33.3, passCompletion: 85.8, tackles: 46, interceptions: 32, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1014, name: "Jarrod Bowen", teamId: 10, position: "Forward", nationality: "England", age: 28, number: 20, goals: 9, assists: 6, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 26, shotAccuracy: 50.0, passCompletion: 78.6, tackles: 16, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1015, name: "Michail Antonio", teamId: 10, position: "Forward", nationality: "Jamaica", age: 34, number: 9, goals: 5, assists: 3, appearances: 18, minutesPlayed: 1280, shotsOnTarget: 14, shotAccuracy: 45.2, passCompletion: 74.8, tackles: 18, interceptions: 8, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1016, name: "Danny Ings", teamId: 10, position: "Forward", nationality: "England", age: 32, number: 18, goals: 3, assists: 1, appearances: 14, minutesPlayed: 780, shotsOnTarget: 8, shotAccuracy: 44.4, passCompletion: 72.6, tackles: 10, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1017, name: "Said Benrahma", teamId: 10, position: "Forward", nationality: "Algeria", age: 29, number: 22, goals: 2, assists: 3, appearances: 16, minutesPlayed: 940, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 78.2, tackles: 12, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ BOURNEMOUTH (teamId: 11) ============
    { id: 1101, name: "Neto", teamId: 11, position: "Goalkeeper", nationality: "Brazil", age: 35, number: 1, goals: 0, assists: 0, appearances: 20, minutesPlayed: 1800, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 74.6, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 4, saves: 58 },
    { id: 1102, name: "Mark Travers", teamId: 11, position: "Goalkeeper", nationality: "Ireland", age: 25, number: 42, goals: 0, assists: 0, appearances: 4, minutesPlayed: 360, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.8, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 12 },
    { id: 1103, name: "Illia Zabarnyi", teamId: 11, position: "Defender", nationality: "Ukraine", age: 22, number: 6, goals: 1, assists: 0, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 84.6, tackles: 38, interceptions: 30, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1104, name: "Marcos Senesi", teamId: 11, position: "Defender", nationality: "Argentina", age: 27, number: 5, goals: 1, assists: 1, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 82.8, tackles: 32, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1105, name: "Chris Mepham", teamId: 11, position: "Defender", nationality: "Wales", age: 27, number: 33, goals: 0, assists: 0, appearances: 14, minutesPlayed: 1120, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 80.4, tackles: 24, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1106, name: "Milos Kerkez", teamId: 11, position: "Defender", nationality: "Hungary", age: 20, number: 3, goals: 0, assists: 4, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 80.6, tackles: 34, interceptions: 22, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1107, name: "Adam Smith", teamId: 11, position: "Defender", nationality: "England", age: 33, number: 15, goals: 0, assists: 2, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 1, shotAccuracy: 20.0, passCompletion: 82.4, tackles: 26, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1108, name: "Ryan Christie", teamId: 11, position: "Midfielder", nationality: "Scotland", age: 29, number: 10, goals: 4, assists: 3, appearances: 20, minutesPlayed: 1580, shotsOnTarget: 12, shotAccuracy: 44.4, passCompletion: 82.6, tackles: 28, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1109, name: "Lewis Cook", teamId: 11, position: "Midfielder", nationality: "England", age: 27, number: 4, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1440, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 85.2, tackles: 36, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1110, name: "Tyler Adams", teamId: 11, position: "Midfielder", nationality: "USA", age: 25, number: 14, goals: 0, assists: 2, appearances: 14, minutesPlayed: 1080, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 86.4, tackles: 32, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1111, name: "Marcus Tavernier", teamId: 11, position: "Midfielder", nationality: "England", age: 25, number: 7, goals: 3, assists: 4, appearances: 19, minutesPlayed: 1520, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 80.8, tackles: 24, interceptions: 16, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1112, name: "Philip Billing", teamId: 11, position: "Midfielder", nationality: "Denmark", age: 28, number: 29, goals: 2, assists: 3, appearances: 18, minutesPlayed: 1360, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 82.4, tackles: 28, interceptions: 20, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1113, name: "Dominic Solanke", teamId: 11, position: "Forward", nationality: "England", age: 27, number: 9, goals: 12, assists: 5, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 30, shotAccuracy: 51.7, passCompletion: 76.8, tackles: 16, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1114, name: "Antoine Semenyo", teamId: 11, position: "Forward", nationality: "Ghana", age: 24, number: 24, goals: 6, assists: 4, appearances: 20, minutesPlayed: 1580, shotsOnTarget: 16, shotAccuracy: 45.7, passCompletion: 78.4, tackles: 14, interceptions: 10, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1115, name: "Justin Kluivert", teamId: 11, position: "Forward", nationality: "Netherlands", age: 25, number: 17, goals: 4, assists: 3, appearances: 18, minutesPlayed: 1280, shotsOnTarget: 12, shotAccuracy: 46.2, passCompletion: 80.2, tackles: 12, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1116, name: "Dango Ouattara", teamId: 11, position: "Forward", nationality: "Burkina Faso", age: 22, number: 21, goals: 3, assists: 2, appearances: 16, minutesPlayed: 980, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 76.8, tackles: 10, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ FULHAM (teamId: 12) ============
    { id: 1201, name: "Bernd Leno", teamId: 12, position: "Goalkeeper", nationality: "Germany", age: 32, number: 1, goals: 0, assists: 1, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 80.4, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 6, saves: 62 },
    { id: 1202, name: "Tim Ream", teamId: 12, position: "Defender", nationality: "USA", age: 37, number: 13, goals: 0, assists: 1, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 86.8, tackles: 28, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 1203, name: "Issa Diop", teamId: 12, position: "Defender", nationality: "France", age: 27, number: 31, goals: 1, assists: 0, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 84.2, tackles: 34, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 1204, name: "Calvin Bassey", teamId: 12, position: "Defender", nationality: "Nigeria", age: 24, number: 3, goals: 0, assists: 1, appearances: 19, minutesPlayed: 1640, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 85.6, tackles: 32, interceptions: 26, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 1205, name: "Antonee Robinson", teamId: 12, position: "Defender", nationality: "USA", age: 27, number: 33, goals: 1, assists: 5, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 82.4, tackles: 38, interceptions: 24, yellowCards: 4, redCards: 0, cleanSheets: 6, saves: 0 },
    { id: 1206, name: "Kenny Tete", teamId: 12, position: "Defender", nationality: "Netherlands", age: 29, number: 2, goals: 0, assists: 3, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 84.2, tackles: 32, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 1207, name: "Joao Palhinha", teamId: 12, position: "Midfielder", nationality: "Portugal", age: 29, number: 26, goals: 2, assists: 1, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 6, shotAccuracy: 37.5, passCompletion: 86.8, tackles: 62, interceptions: 38, yellowCards: 8, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1208, name: "Harrison Reed", teamId: 12, position: "Midfielder", nationality: "England", age: 29, number: 6, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1440, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 84.6, tackles: 34, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1209, name: "Sasa Lukic", teamId: 12, position: "Midfielder", nationality: "Serbia", age: 28, number: 8, goals: 2, assists: 3, appearances: 20, minutesPlayed: 1620, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 85.4, tackles: 30, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1210, name: "Andreas Pereira", teamId: 12, position: "Midfielder", nationality: "Brazil", age: 28, number: 18, goals: 3, assists: 5, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 82.8, tackles: 22, interceptions: 16, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1211, name: "Tom Cairney", teamId: 12, position: "Midfielder", nationality: "Scotland", age: 33, number: 10, goals: 1, assists: 2, appearances: 14, minutesPlayed: 920, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 86.2, tackles: 16, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1212, name: "Aleksandar Mitrovic", teamId: 12, position: "Forward", nationality: "Serbia", age: 30, number: 9, goals: 10, assists: 3, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 28, shotAccuracy: 51.9, passCompletion: 74.6, tackles: 14, interceptions: 6, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1213, name: "Willian", teamId: 12, position: "Forward", nationality: "Brazil", age: 36, number: 20, goals: 2, assists: 4, appearances: 18, minutesPlayed: 1180, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 82.4, tackles: 12, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1214, name: "Harry Wilson", teamId: 12, position: "Forward", nationality: "Wales", age: 27, number: 8, goals: 4, assists: 5, appearances: 20, minutesPlayed: 1520, shotsOnTarget: 14, shotAccuracy: 45.2, passCompletion: 80.6, tackles: 14, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1215, name: "Adama Traore", teamId: 12, position: "Forward", nationality: "Spain", age: 28, number: 11, goals: 2, assists: 3, appearances: 19, minutesPlayed: 1280, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 76.8, tackles: 16, interceptions: 10, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1216, name: "Bobby De Cordova-Reid", teamId: 12, position: "Forward", nationality: "Jamaica", age: 31, number: 14, goals: 3, assists: 2, appearances: 17, minutesPlayed: 1140, shotsOnTarget: 10, shotAccuracy: 45.5, passCompletion: 78.4, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ CRYSTAL PALACE (teamId: 13) ============
    { id: 1301, name: "Sam Johnstone", teamId: 13, position: "Goalkeeper", nationality: "England", age: 31, number: 1, goals: 0, assists: 0, appearances: 18, minutesPlayed: 1620, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 74.8, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 4, saves: 52 },
    { id: 1302, name: "Dean Henderson", teamId: 13, position: "Goalkeeper", nationality: "England", age: 27, number: 30, goals: 0, assists: 0, appearances: 6, minutesPlayed: 540, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.6, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 16 },
    { id: 1303, name: "Marc Guehi", teamId: 13, position: "Defender", nationality: "England", age: 24, number: 6, goals: 1, assists: 1, appearances: 21, minutesPlayed: 1860, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 86.8, tackles: 42, interceptions: 32, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1304, name: "Joachim Andersen", teamId: 13, position: "Defender", nationality: "Denmark", age: 28, number: 5, goals: 1, assists: 0, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 87.4, tackles: 38, interceptions: 30, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1305, name: "Tyrick Mitchell", teamId: 13, position: "Defender", nationality: "England", age: 25, number: 3, goals: 0, assists: 3, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.4, tackles: 36, interceptions: 24, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1306, name: "Daniel Munoz", teamId: 13, position: "Defender", nationality: "Colombia", age: 28, number: 2, goals: 2, assists: 2, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 80.6, tackles: 34, interceptions: 22, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1307, name: "Nathaniel Clyne", teamId: 13, position: "Defender", nationality: "England", age: 33, number: 17, goals: 0, assists: 1, appearances: 12, minutesPlayed: 920, shotsOnTarget: 1, shotAccuracy: 25.0, passCompletion: 82.8, tackles: 20, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1308, name: "Cheick Doucoure", teamId: 13, position: "Midfielder", nationality: "Mali", age: 24, number: 8, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1480, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 85.6, tackles: 44, interceptions: 32, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1309, name: "Jefferson Lerma", teamId: 13, position: "Midfielder", nationality: "Colombia", age: 30, number: 25, goals: 0, assists: 1, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 84.2, tackles: 36, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1310, name: "Adam Wharton", teamId: 13, position: "Midfielder", nationality: "England", age: 20, number: 4, goals: 1, assists: 3, appearances: 14, minutesPlayed: 1080, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 88.4, tackles: 22, interceptions: 18, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1311, name: "Eberechi Eze", teamId: 13, position: "Midfielder", nationality: "England", age: 26, number: 10, goals: 8, assists: 4, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 22, shotAccuracy: 48.9, passCompletion: 82.6, tackles: 18, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1312, name: "Michael Olise", teamId: 13, position: "Midfielder", nationality: "France", age: 22, number: 7, goals: 6, assists: 7, appearances: 18, minutesPlayed: 1420, shotsOnTarget: 18, shotAccuracy: 50.0, passCompletion: 84.2, tackles: 14, interceptions: 10, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1313, name: "Jean-Philippe Mateta", teamId: 13, position: "Forward", nationality: "France", age: 27, number: 14, goals: 10, assists: 3, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 26, shotAccuracy: 52.0, passCompletion: 74.8, tackles: 12, interceptions: 6, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1314, name: "Odsonne Edouard", teamId: 13, position: "Forward", nationality: "France", age: 26, number: 22, goals: 5, assists: 2, appearances: 18, minutesPlayed: 1180, shotsOnTarget: 14, shotAccuracy: 46.7, passCompletion: 76.4, tackles: 10, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1315, name: "Jordan Ayew", teamId: 13, position: "Forward", nationality: "Ghana", age: 33, number: 9, goals: 3, assists: 2, appearances: 19, minutesPlayed: 1280, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 78.2, tackles: 16, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ BRENTFORD (teamId: 14) ============
    { id: 1401, name: "Mark Flekken", teamId: 14, position: "Goalkeeper", nationality: "Netherlands", age: 31, number: 1, goals: 0, assists: 0, appearances: 20, minutesPlayed: 1800, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 76.4, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 5, saves: 58 },
    { id: 1402, name: "Thomas Strakosha", teamId: 14, position: "Goalkeeper", nationality: "Albania", age: 29, number: 30, goals: 0, assists: 0, appearances: 4, minutesPlayed: 360, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.8, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 10 },
    { id: 1403, name: "Ethan Pinnock", teamId: 14, position: "Defender", nationality: "Jamaica", age: 31, number: 5, goals: 2, assists: 0, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 6, shotAccuracy: 46.2, passCompletion: 82.6, tackles: 36, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 1404, name: "Ben Mee", teamId: 14, position: "Defender", nationality: "England", age: 35, number: 16, goals: 1, assists: 0, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 80.4, tackles: 32, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1405, name: "Nathan Collins", teamId: 14, position: "Defender", nationality: "Ireland", age: 23, number: 24, goals: 1, assists: 1, appearances: 19, minutesPlayed: 1640, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 84.2, tackles: 34, interceptions: 26, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1406, name: "Rico Henry", teamId: 14, position: "Defender", nationality: "England", age: 27, number: 3, goals: 0, assists: 2, appearances: 12, minutesPlayed: 980, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.8, tackles: 22, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1407, name: "Aaron Hickey", teamId: 14, position: "Defender", nationality: "Scotland", age: 22, number: 12, goals: 0, assists: 3, appearances: 18, minutesPlayed: 1480, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 84.6, tackles: 28, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1408, name: "Kristoffer Ajer", teamId: 14, position: "Defender", nationality: "Norway", age: 26, number: 20, goals: 0, assists: 1, appearances: 16, minutesPlayed: 1320, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 86.2, tackles: 26, interceptions: 20, yellowCards: 2, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1409, name: "Christian Norgaard", teamId: 14, position: "Midfielder", nationality: "Denmark", age: 30, number: 6, goals: 1, assists: 2, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 84.8, tackles: 42, interceptions: 30, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1410, name: "Vitaly Janelt", teamId: 14, position: "Midfielder", nationality: "Germany", age: 26, number: 27, goals: 2, assists: 2, appearances: 19, minutesPlayed: 1520, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 83.4, tackles: 34, interceptions: 24, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1411, name: "Mathias Jensen", teamId: 14, position: "Midfielder", nationality: "Denmark", age: 28, number: 8, goals: 2, assists: 4, appearances: 20, minutesPlayed: 1580, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 85.6, tackles: 26, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1412, name: "Bryan Mbeumo", teamId: 14, position: "Forward", nationality: "Cameroon", age: 25, number: 19, goals: 11, assists: 5, appearances: 22, minutesPlayed: 1920, shotsOnTarget: 30, shotAccuracy: 51.7, passCompletion: 78.4, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1413, name: "Ivan Toney", teamId: 14, position: "Forward", nationality: "England", age: 28, number: 17, goals: 8, assists: 3, appearances: 16, minutesPlayed: 1320, shotsOnTarget: 22, shotAccuracy: 55.0, passCompletion: 76.8, tackles: 10, interceptions: 4, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1414, name: "Yoane Wissa", teamId: 14, position: "Forward", nationality: "DR Congo", age: 28, number: 11, goals: 7, assists: 3, appearances: 20, minutesPlayed: 1480, shotsOnTarget: 18, shotAccuracy: 48.6, passCompletion: 78.2, tackles: 12, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1415, name: "Kevin Schade", teamId: 14, position: "Forward", nationality: "Germany", age: 23, number: 27, goals: 3, assists: 4, appearances: 18, minutesPlayed: 1180, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 76.4, tackles: 10, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ NOTTINGHAM FOREST (teamId: 15) ============
    { id: 1501, name: "Matt Turner", teamId: 15, position: "Goalkeeper", nationality: "USA", age: 30, number: 1, goals: 0, assists: 0, appearances: 18, minutesPlayed: 1620, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 74.6, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 4, saves: 54 },
    { id: 1502, name: "Matz Sels", teamId: 15, position: "Goalkeeper", nationality: "Belgium", age: 32, number: 30, goals: 0, assists: 0, appearances: 6, minutesPlayed: 540, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.4, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 16 },
    { id: 1503, name: "Murillo", teamId: 15, position: "Defender", nationality: "Brazil", age: 22, number: 3, goals: 0, assists: 1, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 86.4, tackles: 38, interceptions: 30, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1504, name: "Willy Boly", teamId: 15, position: "Defender", nationality: "Ivory Coast", age: 33, number: 4, goals: 0, assists: 0, appearances: 16, minutesPlayed: 1360, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 82.8, tackles: 28, interceptions: 24, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1505, name: "Joe Worrall", teamId: 15, position: "Defender", nationality: "England", age: 27, number: 4, goals: 1, assists: 0, appearances: 14, minutesPlayed: 1180, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 80.6, tackles: 26, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1506, name: "Neco Williams", teamId: 15, position: "Defender", nationality: "Wales", age: 23, number: 7, goals: 1, assists: 4, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 80.2, tackles: 30, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1507, name: "Ola Aina", teamId: 15, position: "Defender", nationality: "Nigeria", age: 28, number: 43, goals: 0, assists: 3, appearances: 19, minutesPlayed: 1620, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 82.4, tackles: 32, interceptions: 22, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1508, name: "Danilo", teamId: 15, position: "Midfielder", nationality: "Brazil", age: 23, number: 16, goals: 2, assists: 2, appearances: 18, minutesPlayed: 1440, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 86.8, tackles: 40, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1509, name: "Ibrahim Sangare", teamId: 15, position: "Midfielder", nationality: "Ivory Coast", age: 26, number: 35, goals: 1, assists: 1, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 85.4, tackles: 36, interceptions: 26, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1510, name: "Ryan Yates", teamId: 15, position: "Midfielder", nationality: "England", age: 27, number: 22, goals: 2, assists: 2, appearances: 20, minutesPlayed: 1620, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 82.6, tackles: 38, interceptions: 26, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1511, name: "Morgan Gibbs-White", teamId: 15, position: "Midfielder", nationality: "England", age: 24, number: 10, goals: 5, assists: 6, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 16, shotAccuracy: 47.1, passCompletion: 82.8, tackles: 24, interceptions: 18, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1512, name: "Callum Hudson-Odoi", teamId: 15, position: "Forward", nationality: "England", age: 24, number: 11, goals: 6, assists: 5, appearances: 20, minutesPlayed: 1580, shotsOnTarget: 16, shotAccuracy: 48.5, passCompletion: 80.4, tackles: 14, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1513, name: "Anthony Elanga", teamId: 15, position: "Forward", nationality: "Sweden", age: 22, number: 21, goals: 4, assists: 4, appearances: 21, minutesPlayed: 1620, shotsOnTarget: 12, shotAccuracy: 44.4, passCompletion: 78.6, tackles: 16, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1514, name: "Chris Wood", teamId: 15, position: "Forward", nationality: "New Zealand", age: 33, number: 9, goals: 9, assists: 2, appearances: 22, minutesPlayed: 1760, shotsOnTarget: 24, shotAccuracy: 52.2, passCompletion: 72.8, tackles: 12, interceptions: 6, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1515, name: "Taiwo Awoniyi", teamId: 15, position: "Forward", nationality: "Nigeria", age: 27, number: 9, goals: 4, assists: 2, appearances: 16, minutesPlayed: 1040, shotsOnTarget: 12, shotAccuracy: 46.2, passCompletion: 74.6, tackles: 10, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ EVERTON (teamId: 16) ============
    { id: 1601, name: "Jordan Pickford", teamId: 16, position: "Goalkeeper", nationality: "England", age: 30, number: 1, goals: 0, assists: 0, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 78.4, tackles: 0, interceptions: 1, yellowCards: 2, redCards: 0, cleanSheets: 5, saves: 68 },
    { id: 1602, name: "James Tarkowski", teamId: 16, position: "Defender", nationality: "England", age: 32, number: 6, goals: 1, assists: 0, appearances: 22, minutesPlayed: 1980, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 82.4, tackles: 42, interceptions: 34, yellowCards: 5, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 1603, name: "Jarrad Branthwaite", teamId: 16, position: "Defender", nationality: "England", age: 22, number: 32, goals: 2, assists: 0, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 6, shotAccuracy: 46.2, passCompletion: 84.6, tackles: 38, interceptions: 30, yellowCards: 3, redCards: 0, cleanSheets: 5, saves: 0 },
    { id: 1604, name: "Michael Keane", teamId: 16, position: "Defender", nationality: "England", age: 31, number: 5, goals: 0, assists: 0, appearances: 14, minutesPlayed: 1120, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 80.8, tackles: 24, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1605, name: "Vitalii Mykolenko", teamId: 16, position: "Defender", nationality: "Ukraine", age: 25, number: 19, goals: 0, assists: 2, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.4, tackles: 32, interceptions: 22, yellowCards: 4, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1606, name: "Nathan Patterson", teamId: 16, position: "Defender", nationality: "Scotland", age: 23, number: 3, goals: 0, assists: 1, appearances: 12, minutesPlayed: 920, shotsOnTarget: 1, shotAccuracy: 20.0, passCompletion: 80.6, tackles: 18, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1607, name: "Ashley Young", teamId: 16, position: "Defender", nationality: "England", age: 39, number: 18, goals: 0, assists: 2, appearances: 18, minutesPlayed: 1440, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 80.2, tackles: 26, interceptions: 18, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1608, name: "Amadou Onana", teamId: 16, position: "Midfielder", nationality: "Belgium", age: 23, number: 8, goals: 3, assists: 2, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 84.6, tackles: 46, interceptions: 32, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1609, name: "Idrissa Gueye", teamId: 16, position: "Midfielder", nationality: "Senegal", age: 35, number: 27, goals: 0, assists: 1, appearances: 18, minutesPlayed: 1440, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 83.4, tackles: 42, interceptions: 30, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1610, name: "Abdoulaye Doucoure", teamId: 16, position: "Midfielder", nationality: "Mali", age: 31, number: 16, goals: 2, assists: 2, appearances: 20, minutesPlayed: 1620, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 82.6, tackles: 36, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1611, name: "Dwight McNeil", teamId: 16, position: "Midfielder", nationality: "England", age: 25, number: 7, goals: 4, assists: 5, appearances: 22, minutesPlayed: 1880, shotsOnTarget: 14, shotAccuracy: 45.2, passCompletion: 80.8, tackles: 18, interceptions: 12, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1612, name: "Jack Harrison", teamId: 16, position: "Forward", nationality: "England", age: 28, number: 11, goals: 3, assists: 3, appearances: 19, minutesPlayed: 1480, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 78.4, tackles: 14, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1613, name: "Dominic Calvert-Lewin", teamId: 16, position: "Forward", nationality: "England", age: 27, number: 9, goals: 6, assists: 2, appearances: 20, minutesPlayed: 1580, shotsOnTarget: 18, shotAccuracy: 48.6, passCompletion: 74.8, tackles: 14, interceptions: 6, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1614, name: "Beto", teamId: 16, position: "Forward", nationality: "Portugal", age: 26, number: 14, goals: 3, assists: 1, appearances: 16, minutesPlayed: 980, shotsOnTarget: 10, shotAccuracy: 45.5, passCompletion: 72.6, tackles: 12, interceptions: 4, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1615, name: "Arnaut Danjuma", teamId: 16, position: "Forward", nationality: "Netherlands", age: 27, number: 10, goals: 2, assists: 2, appearances: 14, minutesPlayed: 840, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 76.8, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ WOLVES (teamId: 17) ============
    { id: 1701, name: "Jose Sa", teamId: 17, position: "Goalkeeper", nationality: "Portugal", age: 31, number: 1, goals: 0, assists: 0, appearances: 20, minutesPlayed: 1800, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 76.8, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 4, saves: 62 },
    { id: 1702, name: "Daniel Bentley", teamId: 17, position: "Goalkeeper", nationality: "England", age: 31, number: 30, goals: 0, assists: 0, appearances: 4, minutesPlayed: 360, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.4, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 12 },
    { id: 1703, name: "Max Kilman", teamId: 17, position: "Defender", nationality: "England", age: 27, number: 15, goals: 1, assists: 0, appearances: 21, minutesPlayed: 1860, shotsOnTarget: 4, shotAccuracy: 44.4, passCompletion: 86.4, tackles: 40, interceptions: 32, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1704, name: "Craig Dawson", teamId: 17, position: "Defender", nationality: "England", age: 34, number: 4, goals: 1, assists: 0, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 80.8, tackles: 32, interceptions: 28, yellowCards: 5, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1705, name: "Santiago Bueno", teamId: 17, position: "Defender", nationality: "Uruguay", age: 24, number: 3, goals: 0, assists: 0, appearances: 14, minutesPlayed: 1120, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 82.6, tackles: 26, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1706, name: "Nelson Semedo", teamId: 17, position: "Defender", nationality: "Portugal", age: 30, number: 22, goals: 0, assists: 3, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 84.2, tackles: 34, interceptions: 22, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1707, name: "Rayan Ait-Nouri", teamId: 17, position: "Defender", nationality: "Algeria", age: 23, number: 3, goals: 1, assists: 4, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 82.8, tackles: 32, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 4, saves: 0 },
    { id: 1708, name: "Joao Gomes", teamId: 17, position: "Midfielder", nationality: "Brazil", age: 23, number: 35, goals: 2, assists: 2, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 84.6, tackles: 52, interceptions: 36, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1709, name: "Mario Lemina", teamId: 17, position: "Midfielder", nationality: "Gabon", age: 31, number: 5, goals: 1, assists: 1, appearances: 18, minutesPlayed: 1480, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 83.4, tackles: 40, interceptions: 28, yellowCards: 5, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1710, name: "Boubacar Traore", teamId: 17, position: "Midfielder", nationality: "Mali", age: 23, number: 21, goals: 0, assists: 2, appearances: 14, minutesPlayed: 1040, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.8, tackles: 28, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1711, name: "Pablo Sarabia", teamId: 17, position: "Midfielder", nationality: "Spain", age: 32, number: 21, goals: 3, assists: 4, appearances: 19, minutesPlayed: 1420, shotsOnTarget: 10, shotAccuracy: 43.5, passCompletion: 84.2, tackles: 18, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1712, name: "Matheus Cunha", teamId: 17, position: "Forward", nationality: "Brazil", age: 25, number: 12, goals: 10, assists: 5, appearances: 22, minutesPlayed: 1880, shotsOnTarget: 28, shotAccuracy: 51.9, passCompletion: 78.6, tackles: 16, interceptions: 10, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1713, name: "Hwang Hee-chan", teamId: 17, position: "Forward", nationality: "South Korea", age: 28, number: 11, goals: 7, assists: 3, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 18, shotAccuracy: 47.4, passCompletion: 76.8, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1714, name: "Pedro Neto", teamId: 17, position: "Forward", nationality: "Portugal", age: 24, number: 7, goals: 4, assists: 6, appearances: 18, minutesPlayed: 1380, shotsOnTarget: 14, shotAccuracy: 46.7, passCompletion: 80.4, tackles: 12, interceptions: 8, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1715, name: "Sasa Kalajdzic", teamId: 17, position: "Forward", nationality: "Austria", age: 27, number: 18, goals: 2, assists: 1, appearances: 12, minutesPlayed: 720, shotsOnTarget: 8, shotAccuracy: 50.0, passCompletion: 72.4, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ LEICESTER CITY (teamId: 18) ============
    { id: 1801, name: "Danny Ward", teamId: 18, position: "Goalkeeper", nationality: "Wales", age: 31, number: 1, goals: 0, assists: 0, appearances: 18, minutesPlayed: 1620, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 74.2, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 3, saves: 56 },
    { id: 1802, name: "Mads Hermansen", teamId: 18, position: "Goalkeeper", nationality: "Denmark", age: 24, number: 31, goals: 0, assists: 0, appearances: 6, minutesPlayed: 540, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.8, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 1, saves: 16 },
    { id: 1803, name: "Wout Faes", teamId: 18, position: "Defender", nationality: "Belgium", age: 26, number: 3, goals: 0, assists: 0, appearances: 21, minutesPlayed: 1860, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 84.6, tackles: 38, interceptions: 30, yellowCards: 4, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1804, name: "Jannik Vestergaard", teamId: 18, position: "Defender", nationality: "Denmark", age: 32, number: 23, goals: 1, assists: 0, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 82.4, tackles: 32, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1805, name: "Conor Coady", teamId: 18, position: "Defender", nationality: "England", age: 31, number: 6, goals: 0, assists: 1, appearances: 14, minutesPlayed: 1120, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 80.8, tackles: 26, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1806, name: "James Justin", teamId: 18, position: "Defender", nationality: "England", age: 26, number: 2, goals: 1, assists: 3, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 82.6, tackles: 30, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 3, saves: 0 },
    { id: 1807, name: "Ricardo Pereira", teamId: 18, position: "Defender", nationality: "Portugal", age: 31, number: 14, goals: 0, assists: 2, appearances: 16, minutesPlayed: 1320, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 84.2, tackles: 26, interceptions: 18, yellowCards: 2, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1808, name: "Wilfred Ndidi", teamId: 18, position: "Midfielder", nationality: "Nigeria", age: 27, number: 25, goals: 1, assists: 1, appearances: 20, minutesPlayed: 1680, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 84.8, tackles: 52, interceptions: 38, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1809, name: "Kiernan Dewsbury-Hall", teamId: 18, position: "Midfielder", nationality: "England", age: 26, number: 8, goals: 4, assists: 5, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 12, shotAccuracy: 44.4, passCompletion: 84.2, tackles: 28, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1810, name: "Harry Winks", teamId: 18, position: "Midfielder", nationality: "England", age: 28, number: 6, goals: 1, assists: 2, appearances: 16, minutesPlayed: 1240, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 86.8, tackles: 22, interceptions: 16, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1811, name: "Abdul Fatawu", teamId: 18, position: "Forward", nationality: "Ghana", age: 20, number: 17, goals: 4, assists: 5, appearances: 20, minutesPlayed: 1520, shotsOnTarget: 14, shotAccuracy: 46.7, passCompletion: 78.4, tackles: 14, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1812, name: "Stephy Mavididi", teamId: 18, position: "Forward", nationality: "England", age: 26, number: 7, goals: 5, assists: 3, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 14, shotAccuracy: 45.2, passCompletion: 78.6, tackles: 12, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1813, name: "Jamie Vardy", teamId: 18, position: "Forward", nationality: "England", age: 37, number: 9, goals: 8, assists: 2, appearances: 21, minutesPlayed: 1620, shotsOnTarget: 20, shotAccuracy: 52.6, passCompletion: 72.4, tackles: 10, interceptions: 4, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1814, name: "Patson Daka", teamId: 18, position: "Forward", nationality: "Zambia", age: 26, number: 20, goals: 4, assists: 2, appearances: 16, minutesPlayed: 1040, shotsOnTarget: 12, shotAccuracy: 48.0, passCompletion: 74.8, tackles: 10, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1815, name: "Kelechi Iheanacho", teamId: 18, position: "Forward", nationality: "Nigeria", age: 28, number: 14, goals: 3, assists: 2, appearances: 14, minutesPlayed: 840, shotsOnTarget: 10, shotAccuracy: 45.5, passCompletion: 76.2, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ IPSWICH TOWN (teamId: 19) ============
    { id: 1901, name: "Aro Muric", teamId: 19, position: "Goalkeeper", nationality: "Kosovo", age: 25, number: 1, goals: 0, assists: 0, appearances: 18, minutesPlayed: 1620, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 74.6, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 2, saves: 64 },
    { id: 1902, name: "Christian Walton", teamId: 19, position: "Goalkeeper", nationality: "England", age: 29, number: 30, goals: 0, assists: 0, appearances: 6, minutesPlayed: 540, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 70.8, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 0, saves: 18 },
    { id: 1903, name: "Luke Woolfenden", teamId: 19, position: "Defender", nationality: "England", age: 25, number: 6, goals: 0, assists: 0, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.4, tackles: 36, interceptions: 28, yellowCards: 4, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1904, name: "George Edmundson", teamId: 19, position: "Defender", nationality: "England", age: 27, number: 4, goals: 1, assists: 0, appearances: 18, minutesPlayed: 1560, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 80.6, tackles: 32, interceptions: 26, yellowCards: 4, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1905, name: "Leif Davis", teamId: 19, position: "Defender", nationality: "England", age: 24, number: 3, goals: 0, assists: 5, appearances: 21, minutesPlayed: 1820, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 82.8, tackles: 28, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1906, name: "Axel Tuanzebe", teamId: 19, position: "Defender", nationality: "England", age: 27, number: 5, goals: 0, assists: 0, appearances: 14, minutesPlayed: 1120, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 80.4, tackles: 24, interceptions: 20, yellowCards: 3, redCards: 0, cleanSheets: 1, saves: 0 },
    { id: 1907, name: "Ben Johnson", teamId: 19, position: "Defender", nationality: "England", age: 24, number: 2, goals: 0, assists: 2, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 1, shotAccuracy: 20.0, passCompletion: 82.6, tackles: 26, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 1908, name: "Sam Morsy", teamId: 19, position: "Midfielder", nationality: "Egypt", age: 33, number: 8, goals: 1, assists: 2, appearances: 21, minutesPlayed: 1780, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 84.2, tackles: 46, interceptions: 32, yellowCards: 6, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1909, name: "Massimo Luongo", teamId: 19, position: "Midfielder", nationality: "Australia", age: 32, number: 21, goals: 1, assists: 1, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 4, shotAccuracy: 36.4, passCompletion: 82.6, tackles: 32, interceptions: 24, yellowCards: 4, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1910, name: "Omari Hutchinson", teamId: 19, position: "Midfielder", nationality: "England", age: 21, number: 10, goals: 5, assists: 4, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 16, shotAccuracy: 48.5, passCompletion: 80.4, tackles: 16, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1911, name: "Conor Chaplin", teamId: 19, position: "Forward", nationality: "England", age: 27, number: 7, goals: 4, assists: 3, appearances: 20, minutesPlayed: 1520, shotsOnTarget: 12, shotAccuracy: 44.4, passCompletion: 78.6, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1912, name: "Wes Burns", teamId: 19, position: "Forward", nationality: "Wales", age: 30, number: 11, goals: 3, assists: 4, appearances: 20, minutesPlayed: 1480, shotsOnTarget: 10, shotAccuracy: 41.7, passCompletion: 76.8, tackles: 14, interceptions: 10, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1913, name: "Nathan Broadhead", teamId: 19, position: "Forward", nationality: "Wales", age: 26, number: 18, goals: 3, assists: 2, appearances: 18, minutesPlayed: 1180, shotsOnTarget: 10, shotAccuracy: 45.5, passCompletion: 74.8, tackles: 10, interceptions: 6, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1914, name: "Liam Delap", teamId: 19, position: "Forward", nationality: "England", age: 21, number: 9, goals: 6, assists: 2, appearances: 21, minutesPlayed: 1620, shotsOnTarget: 16, shotAccuracy: 50.0, passCompletion: 72.4, tackles: 12, interceptions: 6, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 1915, name: "George Hirst", teamId: 19, position: "Forward", nationality: "England", age: 25, number: 22, goals: 2, assists: 1, appearances: 14, minutesPlayed: 840, shotsOnTarget: 8, shotAccuracy: 44.4, passCompletion: 74.2, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },

    // ============ SOUTHAMPTON (teamId: 20) ============
    { id: 2001, name: "Gavin Bazunu", teamId: 20, position: "Goalkeeper", nationality: "Ireland", age: 22, number: 1, goals: 0, assists: 0, appearances: 16, minutesPlayed: 1440, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 76.4, tackles: 0, interceptions: 1, yellowCards: 1, redCards: 0, cleanSheets: 2, saves: 58 },
    { id: 2002, name: "Alex McCarthy", teamId: 20, position: "Goalkeeper", nationality: "England", age: 35, number: 30, goals: 0, assists: 0, appearances: 8, minutesPlayed: 720, shotsOnTarget: 0, shotAccuracy: 0, passCompletion: 72.8, tackles: 0, interceptions: 0, yellowCards: 0, redCards: 0, cleanSheets: 0, saves: 24 },
    { id: 2003, name: "Jan Bednarek", teamId: 20, position: "Defender", nationality: "Poland", age: 28, number: 35, goals: 0, assists: 0, appearances: 20, minutesPlayed: 1760, shotsOnTarget: 2, shotAccuracy: 28.6, passCompletion: 82.4, tackles: 38, interceptions: 30, yellowCards: 5, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 2004, name: "Jack Stephens", teamId: 20, position: "Defender", nationality: "England", age: 30, number: 5, goals: 0, assists: 0, appearances: 16, minutesPlayed: 1360, shotsOnTarget: 2, shotAccuracy: 33.3, passCompletion: 80.6, tackles: 30, interceptions: 26, yellowCards: 4, redCards: 1, cleanSheets: 1, saves: 0 },
    { id: 2005, name: "Kyle Walker-Peters", teamId: 20, position: "Defender", nationality: "England", age: 27, number: 2, goals: 0, assists: 3, appearances: 20, minutesPlayed: 1720, shotsOnTarget: 2, shotAccuracy: 25.0, passCompletion: 84.2, tackles: 32, interceptions: 22, yellowCards: 3, redCards: 0, cleanSheets: 2, saves: 0 },
    { id: 2006, name: "Ryan Manning", teamId: 20, position: "Defender", nationality: "Ireland", age: 28, number: 14, goals: 0, assists: 2, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 1, shotAccuracy: 20.0, passCompletion: 82.6, tackles: 26, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 1, saves: 0 },
    { id: 2007, name: "James Bree", teamId: 20, position: "Defender", nationality: "England", age: 27, number: 36, goals: 0, assists: 1, appearances: 14, minutesPlayed: 1080, shotsOnTarget: 1, shotAccuracy: 25.0, passCompletion: 80.4, tackles: 22, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 1, saves: 0 },
    { id: 2008, name: "Romeo Lavia", teamId: 20, position: "Midfielder", nationality: "Belgium", age: 20, number: 8, goals: 1, assists: 2, appearances: 12, minutesPlayed: 960, shotsOnTarget: 4, shotAccuracy: 40.0, passCompletion: 86.8, tackles: 28, interceptions: 20, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 2009, name: "James Ward-Prowse", teamId: 20, position: "Midfielder", nationality: "England", age: 29, number: 7, goals: 2, assists: 4, appearances: 18, minutesPlayed: 1520, shotsOnTarget: 8, shotAccuracy: 40.0, passCompletion: 84.6, tackles: 22, interceptions: 16, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 2010, name: "Carlos Alcaraz", teamId: 20, position: "Midfielder", nationality: "Argentina", age: 21, number: 6, goals: 2, assists: 2, appearances: 16, minutesPlayed: 1280, shotsOnTarget: 6, shotAccuracy: 42.9, passCompletion: 82.8, tackles: 26, interceptions: 18, yellowCards: 3, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 2011, name: "Joe Aribo", teamId: 20, position: "Midfielder", nationality: "Nigeria", age: 28, number: 10, goals: 1, assists: 2, appearances: 18, minutesPlayed: 1360, shotsOnTarget: 6, shotAccuracy: 37.5, passCompletion: 80.4, tackles: 20, interceptions: 14, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 2012, name: "Adam Armstrong", teamId: 20, position: "Forward", nationality: "England", age: 27, number: 9, goals: 5, assists: 3, appearances: 21, minutesPlayed: 1680, shotsOnTarget: 16, shotAccuracy: 47.1, passCompletion: 76.8, tackles: 14, interceptions: 8, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 2013, name: "Che Adams", teamId: 20, position: "Forward", nationality: "Scotland", age: 28, number: 10, goals: 4, assists: 2, appearances: 18, minutesPlayed: 1380, shotsOnTarget: 12, shotAccuracy: 46.2, passCompletion: 74.8, tackles: 12, interceptions: 6, yellowCards: 2, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 2014, name: "Sekou Mara", teamId: 20, position: "Forward", nationality: "France", age: 22, number: 11, goals: 3, assists: 1, appearances: 16, minutesPlayed: 1040, shotsOnTarget: 10, shotAccuracy: 45.5, passCompletion: 74.2, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 },
    { id: 2015, name: "Samuel Edozie", teamId: 20, position: "Forward", nationality: "England", age: 21, number: 28, goals: 2, assists: 2, appearances: 14, minutesPlayed: 840, shotsOnTarget: 8, shotAccuracy: 42.1, passCompletion: 76.4, tackles: 8, interceptions: 4, yellowCards: 1, redCards: 0, cleanSheets: 0, saves: 0 }
];

// Team History Data - Trophy History, Season Records, Manager History
const TEAM_HISTORY = {
    1: { // Manchester City
        name: "Manchester City",
        founded: 1880,
        stadium: "Etihad Stadium",
        capacity: 53400,
        trophies: {
            premierLeague: { count: 9, years: [2012, 2014, 2018, 2019, 2021, 2022, 2023, 2024, 2025] },
            faCup: { count: 7, years: [1904, 1934, 1956, 1969, 2011, 2019, 2023] },
            leagueCup: { count: 8, years: [1970, 1976, 2014, 2016, 2018, 2019, 2020, 2021] },
            championsLeague: { count: 1, years: [2023] },
            communityShield: { count: 6, years: [1937, 1968, 1972, 2012, 2018, 2019] }
        },
        managers: [
            { name: "Pep Guardiola", from: 2016, to: null, trophies: 17 },
            { name: "Manuel Pellegrini", from: 2013, to: 2016, trophies: 3 },
            { name: "Roberto Mancini", from: 2009, to: 2013, trophies: 3 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 1, points: 52, played: 22, won: 16, drawn: 4, lost: 2, gf: 52, ga: 18 },
            { season: "2023-24", position: 1, points: 91, played: 38, won: 28, drawn: 7, lost: 3, gf: 96, ga: 34 },
            { season: "2022-23", position: 1, points: 89, played: 38, won: 28, drawn: 5, lost: 5, gf: 94, ga: 33 },
            { season: "2021-22", position: 1, points: 93, played: 38, won: 29, drawn: 6, lost: 3, gf: 99, ga: 26 },
            { season: "2020-21", position: 1, points: 86, played: 38, won: 27, drawn: 5, lost: 6, gf: 83, ga: 32 }
        ],
        stats5Year: {
            avgPosition: 1.0,
            avgPoints: 82.2,
            totalGoals: 424,
            totalConceded: 143,
            winRate: 76.8
        }
    },
    2: { // Arsenal
        name: "Arsenal",
        founded: 1886,
        stadium: "Emirates Stadium",
        capacity: 60704,
        trophies: {
            premierLeague: { count: 3, years: [1998, 2002, 2004] },
            faCup: { count: 14, years: [1930, 1936, 1950, 1971, 1979, 1993, 1998, 2002, 2003, 2005, 2014, 2015, 2017, 2020] },
            leagueCup: { count: 2, years: [1987, 1993] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 17, years: [1930, 1931, 1933, 1934, 1938, 1948, 1953, 1991, 1998, 1999, 2002, 2004, 2014, 2015, 2017, 2020, 2023] }
        },
        managers: [
            { name: "Mikel Arteta", from: 2019, to: null, trophies: 2 },
            { name: "Unai Emery", from: 2018, to: 2019, trophies: 0 },
            { name: "Arsene Wenger", from: 1996, to: 2018, trophies: 17 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 2, points: 50, played: 22, won: 15, drawn: 5, lost: 2, gf: 48, ga: 16 },
            { season: "2023-24", position: 2, points: 89, played: 38, won: 28, drawn: 5, lost: 5, gf: 91, ga: 29 },
            { season: "2022-23", position: 2, points: 84, played: 38, won: 26, drawn: 6, lost: 6, gf: 88, ga: 43 },
            { season: "2021-22", position: 5, points: 69, played: 38, won: 22, drawn: 3, lost: 13, gf: 61, ga: 48 },
            { season: "2020-21", position: 8, points: 61, played: 38, won: 18, drawn: 7, lost: 13, gf: 55, ga: 39 }
        ],
        stats5Year: {
            avgPosition: 3.8,
            avgPoints: 70.6,
            totalGoals: 343,
            totalConceded: 175,
            winRate: 57.4
        }
    },
    3: { // Liverpool
        name: "Liverpool",
        founded: 1892,
        stadium: "Anfield",
        capacity: 61276,
        trophies: {
            premierLeague: { count: 1, years: [2020] },
            faCup: { count: 8, years: [1965, 1974, 1986, 1989, 1992, 2001, 2006, 2022] },
            leagueCup: { count: 10, years: [1981, 1982, 1983, 1984, 1995, 2001, 2003, 2012, 2022, 2024] },
            championsLeague: { count: 6, years: [1977, 1978, 1981, 1984, 2005, 2019] },
            communityShield: { count: 16, years: [1964, 1965, 1966, 1974, 1976, 1977, 1979, 1980, 1982, 1986, 1988, 1989, 1990, 2001, 2006, 2022] }
        },
        managers: [
            { name: "Arne Slot", from: 2024, to: null, trophies: 0 },
            { name: "Jurgen Klopp", from: 2015, to: 2024, trophies: 8 },
            { name: "Brendan Rodgers", from: 2012, to: 2015, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 3, points: 48, played: 22, won: 14, drawn: 6, lost: 2, gf: 46, ga: 20 },
            { season: "2023-24", position: 3, points: 82, played: 38, won: 24, drawn: 10, lost: 4, gf: 86, ga: 41 },
            { season: "2022-23", position: 5, points: 67, played: 38, won: 19, drawn: 10, lost: 9, gf: 75, ga: 47 },
            { season: "2021-22", position: 2, points: 92, played: 38, won: 28, drawn: 8, lost: 2, gf: 94, ga: 26 },
            { season: "2020-21", position: 3, points: 69, played: 38, won: 20, drawn: 9, lost: 9, gf: 68, ga: 42 }
        ],
        stats5Year: {
            avgPosition: 3.2,
            avgPoints: 71.6,
            totalGoals: 369,
            totalConceded: 176,
            winRate: 55.3
        }
    },
    4: { // Aston Villa
        name: "Aston Villa",
        founded: 1874,
        stadium: "Villa Park",
        capacity: 42749,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 7, years: [1887, 1895, 1897, 1905, 1913, 1920, 1957] },
            leagueCup: { count: 5, years: [1961, 1975, 1977, 1994, 1996] },
            championsLeague: { count: 1, years: [1982] },
            communityShield: { count: 1, years: [1981] }
        },
        managers: [
            { name: "Unai Emery", from: 2022, to: null, trophies: 0 },
            { name: "Steven Gerrard", from: 2021, to: 2022, trophies: 0 },
            { name: "Dean Smith", from: 2018, to: 2021, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 4, points: 42, played: 22, won: 12, drawn: 6, lost: 4, gf: 38, ga: 24 },
            { season: "2023-24", position: 4, points: 68, played: 38, won: 20, drawn: 8, lost: 10, gf: 76, ga: 61 },
            { season: "2022-23", position: 7, points: 61, played: 38, won: 18, drawn: 7, lost: 13, gf: 51, ga: 46 },
            { season: "2021-22", position: 14, points: 45, played: 38, won: 13, drawn: 6, lost: 19, gf: 52, ga: 54 },
            { season: "2020-21", position: 11, points: 55, played: 38, won: 16, drawn: 7, lost: 15, gf: 55, ga: 46 }
        ],
        stats5Year: {
            avgPosition: 8.0,
            avgPoints: 54.2,
            totalGoals: 272,
            totalConceded: 231,
            winRate: 41.6
        }
    },
    5: { // Tottenham
        name: "Tottenham Hotspur",
        founded: 1882,
        stadium: "Tottenham Hotspur Stadium",
        capacity: 62850,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 8, years: [1901, 1921, 1961, 1962, 1967, 1981, 1982, 1991] },
            leagueCup: { count: 4, years: [1971, 1973, 1999, 2008] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 7, years: [1921, 1951, 1961, 1962, 1967, 1981, 1991] }
        },
        managers: [
            { name: "Ange Postecoglou", from: 2023, to: null, trophies: 0 },
            { name: "Antonio Conte", from: 2021, to: 2023, trophies: 0 },
            { name: "Nuno Espirito Santo", from: 2021, to: 2021, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 5, points: 40, played: 22, won: 11, drawn: 7, lost: 4, gf: 42, ga: 26 },
            { season: "2023-24", position: 5, points: 66, played: 38, won: 20, drawn: 6, lost: 12, gf: 74, ga: 61 },
            { season: "2022-23", position: 8, points: 60, played: 38, won: 18, drawn: 6, lost: 14, gf: 70, ga: 63 },
            { season: "2021-22", position: 4, points: 71, played: 38, won: 22, drawn: 5, lost: 11, gf: 69, ga: 40 },
            { season: "2020-21", position: 7, points: 62, played: 38, won: 18, drawn: 8, lost: 12, gf: 68, ga: 45 }
        ],
        stats5Year: {
            avgPosition: 5.8,
            avgPoints: 59.8,
            totalGoals: 323,
            totalConceded: 235,
            winRate: 46.8
        }
    },
    6: { // Chelsea
        name: "Chelsea",
        founded: 1905,
        stadium: "Stamford Bridge",
        capacity: 40341,
        trophies: {
            premierLeague: { count: 5, years: [2005, 2006, 2010, 2015, 2017] },
            faCup: { count: 8, years: [1970, 1997, 2000, 2007, 2009, 2010, 2012, 2018] },
            leagueCup: { count: 5, years: [1965, 1998, 2005, 2007, 2015] },
            championsLeague: { count: 2, years: [2012, 2021] },
            communityShield: { count: 4, years: [1955, 2000, 2005, 2009] }
        },
        managers: [
            { name: "Mauricio Pochettino", from: 2023, to: null, trophies: 0 },
            { name: "Graham Potter", from: 2022, to: 2023, trophies: 0 },
            { name: "Thomas Tuchel", from: 2021, to: 2022, trophies: 2 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 6, points: 38, played: 22, won: 10, drawn: 8, lost: 4, gf: 40, ga: 28 },
            { season: "2023-24", position: 6, points: 63, played: 38, won: 18, drawn: 9, lost: 11, gf: 77, ga: 63 },
            { season: "2022-23", position: 12, points: 44, played: 38, won: 11, drawn: 11, lost: 16, gf: 38, ga: 47 },
            { season: "2021-22", position: 3, points: 74, played: 38, won: 21, drawn: 11, lost: 6, gf: 76, ga: 33 },
            { season: "2020-21", position: 4, points: 67, played: 38, won: 19, drawn: 10, lost: 9, gf: 58, ga: 36 }
        ],
        stats5Year: {
            avgPosition: 6.2,
            avgPoints: 57.2,
            totalGoals: 289,
            totalConceded: 207,
            winRate: 41.6
        }
    },
    7: { // Newcastle United
        name: "Newcastle United",
        founded: 1892,
        stadium: "St James' Park",
        capacity: 52305,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 6, years: [1910, 1924, 1932, 1951, 1952, 1955] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 1, years: [1909] }
        },
        managers: [
            { name: "Eddie Howe", from: 2021, to: null, trophies: 0 },
            { name: "Steve Bruce", from: 2019, to: 2021, trophies: 0 },
            { name: "Rafael Benitez", from: 2016, to: 2019, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 7, points: 36, played: 22, won: 10, drawn: 6, lost: 6, gf: 38, ga: 30 },
            { season: "2023-24", position: 7, points: 60, played: 38, won: 18, drawn: 6, lost: 14, gf: 85, ga: 62 },
            { season: "2022-23", position: 4, points: 71, played: 38, won: 19, drawn: 14, lost: 5, gf: 68, ga: 33 },
            { season: "2021-22", position: 11, points: 49, played: 38, won: 13, drawn: 10, lost: 15, gf: 44, ga: 62 },
            { season: "2020-21", position: 12, points: 45, played: 38, won: 12, drawn: 9, lost: 17, gf: 46, ga: 62 }
        ],
        stats5Year: {
            avgPosition: 8.2,
            avgPoints: 52.2,
            totalGoals: 281,
            totalConceded: 249,
            winRate: 37.9
        }
    },
    8: { // Manchester United
        name: "Manchester United",
        founded: 1878,
        stadium: "Old Trafford",
        capacity: 74310,
        trophies: {
            premierLeague: { count: 13, years: [1993, 1994, 1996, 1997, 1999, 2000, 2001, 2003, 2007, 2008, 2009, 2011, 2013] },
            faCup: { count: 12, years: [1909, 1948, 1963, 1977, 1983, 1985, 1990, 1994, 1996, 1999, 2004, 2016] },
            leagueCup: { count: 6, years: [1992, 2006, 2009, 2010, 2017, 2023] },
            championsLeague: { count: 3, years: [1968, 1999, 2008] },
            communityShield: { count: 21, years: [1908, 1911, 1952, 1956, 1957, 1965, 1967, 1977, 1983, 1990, 1993, 1994, 1996, 1997, 2003, 2007, 2008, 2010, 2011, 2013, 2016] }
        },
        managers: [
            { name: "Erik ten Hag", from: 2022, to: null, trophies: 2 },
            { name: "Ralf Rangnick", from: 2021, to: 2022, trophies: 0 },
            { name: "Ole Gunnar Solskjaer", from: 2018, to: 2021, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 8, points: 34, played: 22, won: 9, drawn: 7, lost: 6, gf: 32, ga: 28 },
            { season: "2023-24", position: 8, points: 60, played: 38, won: 18, drawn: 6, lost: 14, gf: 57, ga: 58 },
            { season: "2022-23", position: 3, points: 75, played: 38, won: 23, drawn: 6, lost: 9, gf: 58, ga: 43 },
            { season: "2021-22", position: 6, points: 58, played: 38, won: 16, drawn: 10, lost: 12, gf: 57, ga: 57 },
            { season: "2020-21", position: 2, points: 74, played: 38, won: 21, drawn: 11, lost: 6, gf: 73, ga: 44 }
        ],
        stats5Year: {
            avgPosition: 5.4,
            avgPoints: 60.2,
            totalGoals: 277,
            totalConceded: 230,
            winRate: 45.8
        }
    },
    9: { // Brighton
        name: "Brighton & Hove Albion",
        founded: 1901,
        stadium: "American Express Stadium",
        capacity: 31800,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 0, years: [] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "Roberto De Zerbi", from: 2022, to: null, trophies: 0 },
            { name: "Graham Potter", from: 2019, to: 2022, trophies: 0 },
            { name: "Chris Hughton", from: 2014, to: 2019, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 9, points: 32, played: 22, won: 8, drawn: 8, lost: 6, gf: 34, ga: 32 },
            { season: "2023-24", position: 11, points: 48, played: 38, won: 12, drawn: 12, lost: 14, gf: 55, ga: 62 },
            { season: "2022-23", position: 6, points: 62, played: 38, won: 18, drawn: 8, lost: 12, gf: 72, ga: 53 },
            { season: "2021-22", position: 9, points: 51, played: 38, won: 12, drawn: 15, lost: 11, gf: 42, ga: 44 },
            { season: "2020-21", position: 16, points: 41, played: 38, won: 9, drawn: 14, lost: 15, gf: 40, ga: 46 }
        ],
        stats5Year: {
            avgPosition: 10.2,
            avgPoints: 46.8,
            totalGoals: 243,
            totalConceded: 237,
            winRate: 31.1
        }
    },
    10: { // West Ham
        name: "West Ham United",
        founded: 1895,
        stadium: "London Stadium",
        capacity: 62500,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 3, years: [1964, 1975, 1980] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "David Moyes", from: 2019, to: null, trophies: 1 },
            { name: "Manuel Pellegrini", from: 2018, to: 2019, trophies: 0 },
            { name: "Slaven Bilic", from: 2015, to: 2017, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 10, points: 30, played: 22, won: 7, drawn: 9, lost: 6, gf: 32, ga: 34 },
            { season: "2023-24", position: 9, points: 52, played: 38, won: 14, drawn: 10, lost: 14, gf: 60, ga: 74 },
            { season: "2022-23", position: 14, points: 40, played: 38, won: 11, drawn: 7, lost: 20, gf: 42, ga: 55 },
            { season: "2021-22", position: 7, points: 56, played: 38, won: 16, drawn: 8, lost: 14, gf: 60, ga: 51 },
            { season: "2020-21", position: 6, points: 65, played: 38, won: 19, drawn: 8, lost: 11, gf: 62, ga: 47 }
        ],
        stats5Year: {
            avgPosition: 9.2,
            avgPoints: 48.6,
            totalGoals: 256,
            totalConceded: 261,
            winRate: 35.3
        }
    },
    11: { // Bournemouth
        name: "AFC Bournemouth",
        founded: 1899,
        stadium: "Vitality Stadium",
        capacity: 11307,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 0, years: [] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "Andoni Iraola", from: 2023, to: null, trophies: 0 },
            { name: "Gary O'Neil", from: 2022, to: 2023, trophies: 0 },
            { name: "Scott Parker", from: 2021, to: 2022, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 11, points: 28, played: 22, won: 7, drawn: 7, lost: 8, gf: 30, ga: 36 },
            { season: "2023-24", position: 12, points: 48, played: 38, won: 13, drawn: 9, lost: 16, gf: 54, ga: 67 },
            { season: "2022-23", position: 15, points: 39, played: 38, won: 11, drawn: 6, lost: 21, gf: 37, ga: 71 },
            { season: "2021-22", position: 1, points: 88, played: 46, won: 26, drawn: 10, lost: 10, gf: 74, ga: 39 },
            { season: "2020-21", position: 6, points: 73, played: 46, won: 21, drawn: 10, lost: 15, gf: 73, ga: 51 }
        ],
        stats5Year: {
            avgPosition: 9.0,
            avgPoints: 55.2,
            totalGoals: 268,
            totalConceded: 264,
            winRate: 41.1
        }
    },
    12: { // Fulham
        name: "Fulham",
        founded: 1879,
        stadium: "Craven Cottage",
        capacity: 29600,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 0, years: [] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "Marco Silva", from: 2021, to: null, trophies: 0 },
            { name: "Scott Parker", from: 2019, to: 2021, trophies: 0 },
            { name: "Claudio Ranieri", from: 2018, to: 2019, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 12, points: 26, played: 22, won: 6, drawn: 8, lost: 8, gf: 28, ga: 34 },
            { season: "2023-24", position: 13, points: 47, played: 38, won: 13, drawn: 8, lost: 17, gf: 55, ga: 61 },
            { season: "2022-23", position: 10, points: 52, played: 38, won: 15, drawn: 7, lost: 16, gf: 55, ga: 53 },
            { season: "2021-22", position: 1, points: 90, played: 46, won: 27, drawn: 9, lost: 10, gf: 106, ga: 43 },
            { season: "2020-21", position: 18, points: 28, played: 38, won: 5, drawn: 13, lost: 20, gf: 27, ga: 53 }
        ],
        stats5Year: {
            avgPosition: 10.8,
            avgPoints: 48.6,
            totalGoals: 271,
            totalConceded: 244,
            winRate: 34.7
        }
    },
    13: { // Crystal Palace
        name: "Crystal Palace",
        founded: 1905,
        stadium: "Selhurst Park",
        capacity: 25486,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 0, years: [] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "Oliver Glasner", from: 2024, to: null, trophies: 0 },
            { name: "Roy Hodgson", from: 2023, to: 2024, trophies: 0 },
            { name: "Patrick Vieira", from: 2021, to: 2023, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 13, points: 24, played: 22, won: 5, drawn: 9, lost: 8, gf: 26, ga: 34 },
            { season: "2023-24", position: 10, points: 49, played: 38, won: 13, drawn: 10, lost: 15, gf: 57, ga: 58 },
            { season: "2022-23", position: 11, points: 45, played: 38, won: 11, drawn: 12, lost: 15, gf: 40, ga: 49 },
            { season: "2021-22", position: 12, points: 48, played: 38, won: 11, drawn: 15, lost: 12, gf: 50, ga: 46 },
            { season: "2020-21", position: 14, points: 44, played: 38, won: 12, drawn: 8, lost: 18, gf: 41, ga: 66 }
        ],
        stats5Year: {
            avgPosition: 12.0,
            avgPoints: 42.0,
            totalGoals: 214,
            totalConceded: 253,
            winRate: 27.4
        }
    },
    14: { // Brentford
        name: "Brentford",
        founded: 1889,
        stadium: "Gtech Community Stadium",
        capacity: 17250,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 0, years: [] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "Thomas Frank", from: 2018, to: null, trophies: 0 },
            { name: "Dean Smith", from: 2015, to: 2018, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 14, points: 22, played: 22, won: 5, drawn: 7, lost: 10, gf: 32, ga: 40 },
            { season: "2023-24", position: 16, points: 39, played: 38, won: 10, drawn: 9, lost: 19, gf: 56, ga: 65 },
            { season: "2022-23", position: 9, points: 59, played: 38, won: 15, drawn: 14, lost: 9, gf: 58, ga: 46 },
            { season: "2021-22", position: 13, points: 46, played: 38, won: 13, drawn: 7, lost: 18, gf: 48, ga: 56 },
            { season: "2020-21", position: 1, points: 87, played: 46, won: 24, drawn: 15, lost: 7, gf: 79, ga: 42 }
        ],
        stats5Year: {
            avgPosition: 10.6,
            avgPoints: 50.6,
            totalGoals: 273,
            totalConceded: 249,
            winRate: 35.3
        }
    },
    15: { // Nottingham Forest
        name: "Nottingham Forest",
        founded: 1865,
        stadium: "City Ground",
        capacity: 30445,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 2, years: [1898, 1959] },
            leagueCup: { count: 4, years: [1978, 1979, 1989, 1990] },
            championsLeague: { count: 2, years: [1979, 1980] },
            communityShield: { count: 1, years: [1978] }
        },
        managers: [
            { name: "Nuno Espirito Santo", from: 2023, to: null, trophies: 0 },
            { name: "Steve Cooper", from: 2021, to: 2023, trophies: 0 },
            { name: "Chris Hughton", from: 2021, to: 2021, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 15, points: 20, played: 22, won: 4, drawn: 8, lost: 10, gf: 22, ga: 36 },
            { season: "2023-24", position: 17, points: 32, played: 38, won: 9, drawn: 5, lost: 24, gf: 49, ga: 67 },
            { season: "2022-23", position: 16, points: 38, played: 38, won: 9, drawn: 11, lost: 18, gf: 38, ga: 68 },
            { season: "2021-22", position: 1, points: 84, played: 46, won: 23, drawn: 15, lost: 8, gf: 73, ga: 40 },
            { season: "2020-21", position: 17, points: 53, played: 46, won: 12, drawn: 17, lost: 17, gf: 37, ga: 45 }
        ],
        stats5Year: {
            avgPosition: 13.2,
            avgPoints: 45.4,
            totalGoals: 219,
            totalConceded: 256,
            winRate: 30.0
        }
    },
    16: { // Everton
        name: "Everton",
        founded: 1878,
        stadium: "Goodison Park",
        capacity: 39414,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 5, years: [1906, 1933, 1966, 1984, 1995] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 9, years: [1928, 1932, 1963, 1970, 1984, 1985, 1986, 1987, 1995] }
        },
        managers: [
            { name: "Sean Dyche", from: 2023, to: null, trophies: 0 },
            { name: "Frank Lampard", from: 2022, to: 2023, trophies: 0 },
            { name: "Rafael Benitez", from: 2021, to: 2022, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 16, points: 18, played: 22, won: 3, drawn: 9, lost: 10, gf: 18, ga: 32 },
            { season: "2023-24", position: 15, points: 40, played: 38, won: 13, drawn: 9, lost: 16, gf: 40, ga: 51 },
            { season: "2022-23", position: 17, points: 36, played: 38, won: 8, drawn: 12, lost: 18, gf: 34, ga: 57 },
            { season: "2021-22", position: 16, points: 39, played: 38, won: 11, drawn: 6, lost: 21, gf: 43, ga: 66 },
            { season: "2020-21", position: 10, points: 59, played: 38, won: 17, drawn: 8, lost: 13, gf: 47, ga: 48 }
        ],
        stats5Year: {
            avgPosition: 14.8,
            avgPoints: 38.4,
            totalGoals: 182,
            totalConceded: 254,
            winRate: 27.4
        }
    },
    17: { // Wolverhampton Wanderers
        name: "Wolverhampton Wanderers",
        founded: 1877,
        stadium: "Molineux Stadium",
        capacity: 32050,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 4, years: [1893, 1908, 1949, 1960] },
            leagueCup: { count: 2, years: [1974, 1980] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 4, years: [1949, 1954, 1959, 1960] }
        },
        managers: [
            { name: "Gary O'Neil", from: 2023, to: null, trophies: 0 },
            { name: "Julen Lopetegui", from: 2022, to: 2023, trophies: 0 },
            { name: "Bruno Lage", from: 2021, to: 2022, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 17, points: 16, played: 22, won: 3, drawn: 7, lost: 12, gf: 24, ga: 42 },
            { season: "2023-24", position: 14, points: 46, played: 38, won: 13, drawn: 7, lost: 18, gf: 50, ga: 65 },
            { season: "2022-23", position: 13, points: 41, played: 38, won: 11, drawn: 8, lost: 19, gf: 31, ga: 58 },
            { season: "2021-22", position: 10, points: 51, played: 38, won: 15, drawn: 6, lost: 17, gf: 38, ga: 43 },
            { season: "2020-21", position: 13, points: 45, played: 38, won: 12, drawn: 9, lost: 17, gf: 36, ga: 52 }
        ],
        stats5Year: {
            avgPosition: 13.4,
            avgPoints: 39.8,
            totalGoals: 179,
            totalConceded: 260,
            winRate: 28.4
        }
    },
    18: { // Leicester City
        name: "Leicester City",
        founded: 1884,
        stadium: "King Power Stadium",
        capacity: 32312,
        trophies: {
            premierLeague: { count: 1, years: [2016] },
            faCup: { count: 1, years: [2021] },
            leagueCup: { count: 3, years: [1964, 1997, 2000] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 2, years: [1971, 2021] }
        },
        managers: [
            { name: "Enzo Maresca", from: 2023, to: null, trophies: 0 },
            { name: "Dean Smith", from: 2022, to: 2023, trophies: 0 },
            { name: "Brendan Rodgers", from: 2019, to: 2022, trophies: 1 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 18, points: 14, played: 22, won: 2, drawn: 8, lost: 12, gf: 20, ga: 44 },
            { season: "2023-24", position: 1, points: 97, played: 46, won: 31, drawn: 4, lost: 11, gf: 89, ga: 41 },
            { season: "2022-23", position: 18, points: 34, played: 38, won: 9, drawn: 7, lost: 22, gf: 51, ga: 68 },
            { season: "2021-22", position: 8, points: 52, played: 38, won: 14, drawn: 10, lost: 14, gf: 62, ga: 59 },
            { season: "2020-21", position: 5, points: 66, played: 38, won: 20, drawn: 6, lost: 12, gf: 68, ga: 50 }
        ],
        stats5Year: {
            avgPosition: 10.0,
            avgPoints: 52.6,
            totalGoals: 290,
            totalConceded: 262,
            winRate: 40.0
        }
    },
    19: { // Ipswich Town
        name: "Ipswich Town",
        founded: 1878,
        stadium: "Portman Road",
        capacity: 30311,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 1, years: [1978] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "Kieran McKenna", from: 2021, to: null, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 19, points: 12, played: 22, won: 2, drawn: 6, lost: 14, gf: 18, ga: 46 },
            { season: "2023-24", position: 2, points: 96, played: 46, won: 28, drawn: 12, lost: 6, gf: 92, ga: 37 },
            { season: "2022-23", position: 1, points: 98, played: 46, won: 28, drawn: 14, lost: 4, gf: 101, ga: 38 },
            { season: "2021-22", position: 11, points: 66, played: 46, won: 18, drawn: 12, lost: 16, gf: 61, ga: 58 },
            { season: "2020-21", position: 9, points: 70, played: 46, won: 19, drawn: 13, lost: 14, gf: 57, ga: 54 }
        ],
        stats5Year: {
            avgPosition: 8.4,
            avgPoints: 68.4,
            totalGoals: 329,
            totalConceded: 233,
            winRate: 50.0
        }
    },
    20: { // Southampton
        name: "Southampton",
        founded: 1885,
        stadium: "St Mary's Stadium",
        capacity: 32384,
        trophies: {
            premierLeague: { count: 0, years: [] },
            faCup: { count: 1, years: [1976] },
            leagueCup: { count: 0, years: [] },
            championsLeague: { count: 0, years: [] },
            communityShield: { count: 0, years: [] }
        },
        managers: [
            { name: "Russell Martin", from: 2023, to: null, trophies: 0 },
            { name: "Ruben Selles", from: 2023, to: 2023, trophies: 0 },
            { name: "Nathan Jones", from: 2022, to: 2023, trophies: 0 }
        ],
        seasonHistory: [
            { season: "2024-25", position: 20, points: 10, played: 22, won: 1, drawn: 7, lost: 14, gf: 14, ga: 48 },
            { season: "2023-24", position: 1, points: 87, played: 46, won: 26, drawn: 9, lost: 11, gf: 87, ga: 46 },
            { season: "2022-23", position: 20, points: 25, played: 38, won: 6, drawn: 7, lost: 25, gf: 36, ga: 73 },
            { season: "2021-22", position: 15, points: 40, played: 38, won: 9, drawn: 13, lost: 16, gf: 43, ga: 67 },
            { season: "2020-21", position: 15, points: 43, played: 38, won: 12, drawn: 7, lost: 19, gf: 47, ga: 68 }
        ],
        stats5Year: {
            avgPosition: 14.2,
            avgPoints: 41.0,
            totalGoals: 227,
            totalConceded: 302,
            winRate: 28.4
        }
    }
};

// Add expanded data to global scope
if (typeof window !== 'undefined') {
    window.EXPANDED_PLAYERS = EXPANDED_PLAYERS;
    window.TEAM_HISTORY = TEAM_HISTORY;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EXPANDED_PLAYERS, TEAM_HISTORY };
}
