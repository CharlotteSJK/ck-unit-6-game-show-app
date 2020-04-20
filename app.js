const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.querySelector('.start'); 
let missed = 0;                                                                   //if the player guesses wrong 5 times, they lose the game)
const overlay = document.getElementById('overlay');
const heart = document.getElementsByTagName('IMG');
const margin = document.querySelectorAll('.letter'); 


start.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const phrases = [
    'not all those who wander are lost',
    'it is never too late',
    'imagination will take you everywhere',
    'keep your face to the sunshine',
    'experience is the name we give our mistakes'
];

const getRandomPhraseAsArray = arr => {                                             //do stuff to any arr that is passed in
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];       
    const randomPhraseSplit = randomPhrase.split('');
    return randomPhraseSplit;
}

getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);


const addPhraseToDisplay = arr => {                                         // do stuff any arr that is passed in, and add to `#phrase ul`
for (let i = 0; i < arr.length; i ++) {
    const ul = phrase.querySelector('ul');                                
    const li = document.createElement('li');
    ul.appendChild(li); 
    li.textContent = arr[i];      
    if (arr[i] === " ") {
        li.classList.add('space');
        } else {
        li.classList.add('letter');  
        //margin.style.marginRight = '5px'; 
        }                        
    }
}

addPhraseToDisplay(phraseArray); 

const checkLetter = button => {
    const guesses = document.getElementsByClassName('letter');
    let match = null;
    for (i = 0; i < guesses.length; i ++) {
        if (guesses[i].textContent === button) {
            guesses[i].classList.add('show');
            guesses[i].style.transitionDuration = '1.5s';
            match = guesses[i].innerHTML;
            }
        }
        return(match);
    }

qwerty.addEventListener('click', (e) => {
    document.getElementsByClassName('letter')
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('chosen');
        e.target.disabled = true;
    }
    const yesLetter = checkLetter(e.target.innerHTML);
    checkWin();
    if (yesLetter == null && e.target.tagName === 'BUTTON') {
        missed += 1;
        heart[missed - 1].src = "images/lostHeart.png";
    }
});


const checkWin = () => {
    const haveLetter = document.getElementsByClassName('letter');
    const haveShow = document.getElementsByClassName('show');
    if (haveLetter.length === haveShow.length) {
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        overlay.innerHTML = 'You won. Way to go!!';
    } else if (missed > 4) {
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        overlay.innerHTML = 'You lost. Better luck next time';
    }
}