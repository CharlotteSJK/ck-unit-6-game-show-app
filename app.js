const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.querySelector('.start'); 
const missed = 0;                                                                   //if the player guesses wrong 5 times, they lose the game)
const overlay = document.getElementById('overlay');
const heart = document.querySelector('#scoreboard ol');

start.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const phrases = [
    'not all those who wander are lost',
    'it is never too late',
    'imagination will take you everywhere',
    'keep your face to the sunshine',
    'experience is simply the name we give our mistakes'
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
        }                        
    }
}

addPhraseToDisplay(phraseArray); 

const checkLetter = button => {
    const guesses = document.getElementsByClassName('letter');
    let match = 0;
    for (i = 0; i = guesses.length; i ++) {
        console.log(guesses[i]);
        if (guesses[i].textContent.toLowerCase() === button.toLowerCase()) {
            guesses[i].classList.add('show');
            match = button.textContent;
            }
        }
        return match;
    }

qwerty.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
        e.target.classList.add('chosen');
        const foundLetter = checkLetter(e.target.textContent);
      } 
    else if (foundLetter === null) {
        heart.removeChild('tries');
        missed += 1;
    }
});




// const checkWin = () => {
//     const haveLetter = document.getElementsByClassName('letter');
//     const haveShow = document.getElementsByClassName('show');
//     if (haveLetter.length === haveShow.length) {
//         overlay.classList.add('win');
//         overlay.style.display = 'flex';
//         overlay.innerHTML = 'You won. Way to go!!';
//     } else if (missed > 4) {
//         overlay.classList.add('lose');
//         overlay.style.display = 'flex';
//         overlay.innerHTML = 'You lost. Better luck next time';
//     }
// }