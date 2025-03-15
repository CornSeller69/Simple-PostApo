// Muzyka:
const mus_map = new Audio('Materials/Music/map.ogg'); mus_map.loop = true;
const mus_danger = new Audio('Materials/Music/danger.ogg'); mus_danger.loop = true;
const mus_boreas = new Audio('Materials/Music/boreas.ogg'); mus_boreas.loop = true;
const mus_settlement = new Audio('Materials/Music/settlement.ogg'); mus_settlement.loop = true;
const mus_home = new Audio('Materials/Music/home.ogg'); mus_home.loop = true;
const mus_forest = new Audio('Materials/Music/forest.ogg'); mus_forest.loop = true;
const mus_subway = new Audio('Materials/Music/subway.ogg'); mus_subway.loop = true;

// Soundeffecty:
const sfx_piano = new Audio('Materials/Sounds/Misc/riff.mp3');

// Zmienne:
let playername = "Ellis"; // Nazwa postaci gracza, defaultowo Ellis
let playersex = 0; // Płeć postaci, 0 = mężczyzna, 1 = kobieta
let houseRenovated = false; // Czy dom został naprawiony po znalezieniu go?