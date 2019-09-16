/**
 * storia --> occhio --> libro --> sylbol --> pozzo --> combattimento finale --> rituale
 * fare guida
 * search: > % rischio < % trovare oggetti
 * sistema di score
 * inserire UL per i log
 * inserire animazioni --> musica --> pop up --> barre energia/vita
 * finale
 */

// VARIABLES
let img = document.querySelector('.map img');
let posX = document.getElementById('posX');
let posY = document.getElementById('posY');
let up = document.getElementById('up');
let dw = document.getElementById('dw');
let dx = document.getElementById('dx');
let sx = document.getElementById('sx');
let stamina = document.getElementById('stamina');
let health = document.getElementById('health');
let loc = document.getElementById('location');
let desc = document.getElementById('description');
let log = document.getElementById('log');
let rest = document.getElementById('rest');
let pray = document.getElementById('pray');
let run = document.getElementById('run');
let fight = document.getElementById('fight');
let roll = document.getElementById('roll');
let search = document.getElementById('search');
let armour = document.getElementById('armor');
let weapon = document.getElementById('weapon');
let key = document.getElementById('key');
let book = document.getElementById('book');
let guide = document.getElementById('guide');

// CONTAINERS
let dice;
let newMonster;
let newMap;

// INIT STATUS
let healthValue = 100;
let staminaValue = 100;

// INIT POSITION
let x = 0;
let y = 0;
let position = [x, y];
posX.innerText = x;
posY.innerText = y;

// TWEAKINGS FOR TEST
let activeBook = 0;
let activeEye = 0;
let ritual = 0;
let healthRatioRest = 10;
let staminaRatioRest = 10;
let staminaRatioMove = 5;
let staminaRatioRun = 30;
let staminaRatioAttack = 5;
let staminaRatioSearch = 10;
let hammerDamage = 30;
let armourDefence = 5;
renderStamina();
renderHealth();
renderMap();





