const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.querySelector('.start'); 
let missed = 0;                                                                   
const overlay = document.getElementById('overlay');
const heart = document.getElementsByTagName('IMG');
const title = document.querySelector('.title');
const reset = document.querySelector('.btn__reset');
const haveLetter = document.getElementsByClassName('letter');
const haveShow = document.getElementsByClassName('show');
const button = document.getElementsByTagName('BUTTON');
const ul = phrase.querySelector('ul');

const phrases = [
    'not all those who wander are lost',
    'it is never too late',
    'imagination will take you everywhere',
    'keep your face to the sunshine',
    'experience is the name we give our mistakes'
];

//randomises the phrases that appear each time the game is played

const getRandomPhraseAsArray = arr => {                                            
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];       
    const randomPhraseSplit = randomPhrase.split('');
    return randomPhraseSplit;
}

getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);

//adds the phrase to the display

const addPhraseToDisplay = arr => {                                         
for (let i = 0; i < arr.length; i ++) {                               
    const li = document.createElement('li');
    ul.appendChild(li); 
    li.textContent = arr[i];      
    if (arr[i] === " ") {
        li.classList.add('space');
        } else {
        li.classList.add('letter');  
        }                        
    }
}

addPhraseToDisplay(phraseArray); 

//checks if the letter pressed is in the displayed phrase

const checkLetter = button => {
    const guesses = document.getElementsByClassName('letter');
    let match = null;
    for (i = 0; i < guesses.length; i ++) {
        if (guesses[i].textContent === button) {
            guesses[i].classList.add('show');
            guesses[i].style.transitionDuration = '1.5s';
            //guesses[i].style.transform = 'rotate(360deg)';
            match = guesses[i].innerHTML;
            }
        }
        return(match);
    }

//if the player guesses all the letters in the phrase they win. If they guess wrong 5 times, they lose the game

const checkWin = () => {
    if (haveLetter.length === haveShow.length) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        title.innerHTML = 'You won. Way to go!!';
        reset.innerHTML = 'Restart Game';
    } else if (missed > 4) {
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        title.innerHTML = 'You lost. Better luck next time';
        reset.innerHTML = 'Try Again';
    }
}

const resetGame = () => {
    //ul.innerHTML = '';                                       
    const list = phrase.querySelectorAll('li');
    for (let i = 0; i < list.length; i++) {                  
        ul.removeChild(list[i]); 
    }
    //while (ul.firstChild) {
    //ul.removeChild(ul.firstChild);                           
    //} 
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('chosen')
        button[i].disabled = false;
        }
    for (let i = 0; i < heart.length; i ++) {
    heart[i].src = "images/liveHeart.png";
    }
    missed = 0;
    const newPhrase = getRandomPhraseAsArray(phrases); 
    addPhraseToDisplay(newPhrase); 
}


//EVENT LISTENERS

//to start or reset game

reset.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (haveLetter.length === haveShow.length || missed > 4) {
        resetGame();
    }});

//to check if each letter pressed on keyboard matches a letter in phrase. Also disables keys and removes hearts

qwerty.addEventListener('click', (e) => {
    document.getElementsByClassName('letter')
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = true;
    }
    const yesLetter = checkLetter(e.target.innerHTML);
    if (yesLetter == null && e.target.tagName === 'BUTTON') {
    missed += 1;
    heart[missed - 1].src = "images/lostHeart.png";                    
}
checkWin(); 
});



