/**
 * storia
 * search con % di rischio dinamica
 * raccolta oggetti
 * animazioni
 * musica
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
let armor = document.getElementById('armor');
let weapon = document.getElementById('weapon');
let key = document.getElementById('key');

// CONTAINERS
let dice;
let newMonster;

// INIT IMAGE
img.src = 'img/maps/start-woods.jpg';

// INIT POSITION
let x = 0;
let y = 0;
posX.innerText = x;
posY.innerText = y;

// COORDINATES
let position = [x, y];

// INIT STATUS
let healthValue = 100;
let staminaValue = 100;
let statusMultiplier = 10;
renderStamina(0);
renderHealth(0);

// INIT BUTTONS
sx.disabled = false;
dw.disabled = true;
up.disabled = false;
dx.disabled = false;
fight.disabled = true;
run.disabled = true;
rest.disabled = false;
pray.disabled = true;
roll.disabled = true;
weapon.disabled = true;
key.disabled = true;
armor.disabled = true;

// INIT MESSAGE
let logStart = "> You don't remember anything";
log.innerText = logStart;



