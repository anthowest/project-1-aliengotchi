console.log('game-js loaded')

// ACTIONS
    // Feed
    // Pet

// Player will start the game by entering their pet alien's name and hitting the start button. 
// Player will have to interact (feed & pet) with the object to keep it healthy and happy. 
// Need to set interval times that reduce fullness(hunger) and happiness overtime 
// Need to set win/loss rules
    // Player wins after keeping pet alive after time threshold
    // Player loses when happiness and hunger meters hit 0 before time threshold

// GAME SETTING // VARIABLES
const maxHunger = 100;
const maxHappiness = 100;
// BUTTONS
const startBtn = document.querySelector('#start-button');
const feedBtn = document.querySelector('#feed-button');
const playBtn = document.querySelector('#play-button');
const actionBtn = document.querySelector('.action-buttons');
// PAGES
let mainPage = document.querySelector('.main-screen');
let gamePage = document.querySelector('.game-screen');
const screen = document.querySelector('.screen');
// TIME
let ticks = 0;

// NEW OBJECT
class Aliengotchi {
    constructor(hunger=100, happiness=100) {
        this.hunger = hunger;
        this.happiness = happiness;
    }
    eat() {
        this.hunger += 10;
    }
    play() {
        this.hunger -= 5;
        this.happiness += 10;
    }
    ticks() {
        this.hunger --;
        this.happiness -=2;
    }
}

// NEW PET
const alien = new Aliengotchi();
// console.log(alien)

// EVENT LISTENERS
feedBtn.addEventListener('click', function() {
    alien.eat();
});
playBtn.addEventListener('click', function () {
    alien.play();
});
startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getNameValue();
    startGame();
}); 

// FUNCTION TOGGLE

document.querySelector('.game-screen').classList.toggle('hide');

function startGame() {
    document.querySelector('.main-screen').classList.toggle('hide');
    document.querySelector('.game-screen').classList.toggle('hide');
    }

let interval = setInterval(alienFunction, 500); 
// let imgInterval = setInterval(changeImg, 200);   
// let aImg = document.querySelector('#alien-name');

// ALIEN FUNCTION 
function alienFunction() {
    hMeter.value = alien.hunger;
    hapMeter.value = alien.happiness;
    alien.ticks();
    if ((hMeter.value <= 75) || (hapMeter.value <= 75)) {
        // aImg.src = './Assets/alien-happy.png'
    };
        
    if ((hMeter.value <= 50) || (hapMeter.value <= 50)) {
            // show message
    };
        
    if ((hMeter.value <= 25) || (hapMeter.value <= 25)) {
            // changeImg('./Assets/alien-sad.png');
    };
        
    if ((hMeter.value <= 0) || (hapMeter.value <= 0)) {
        // document.querySelector('#alien-name').src = 'alien-sad.png';
        clearInterval(interval);
        // aImg.src = "/alien-sad.png";
    };
    }


let hMeter = document.querySelector('#hunger')
let hapMeter = document.querySelector('#happiness')

// ALIEN NAME FUNCTION

function getNameValue() {
    let alienName = document.querySelector('#name-input').value;
    document.querySelector('#alien-name').innerHTML = alienName
}

// function changeImg(a) {
//         document.querySelector('#alien-name').src = a;
//     };

