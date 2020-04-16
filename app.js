const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const start = document.querySelector('.start'); 
const missed = 0; //if the player guesses wrong 5 times, they lose the game)
const overlay = document.getElementById('overlay');

start.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const phrases = [
    'NOT ALL THOSE WHO WANDER ARE LOST',
    'IT IS NEVER TOO LATE TO BE WHAT YOU MIGHT HAVE BEEN',
    'IMAGINATION WILL GET YOU EVERYWHERE',
    'KEEP YOUR FACE TO THE SUNSHINE AND YOU CANNOT SEE THE SHADOWS',
    'EXPERIENCE IS SIMPLY THE NAME WE GIVE OUR MISTAKES'
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

addPhrasetoDisplay(phraseArray); 

//checkLetter.forEach((item) => console.log(index, item))

const checkLetter = button => {
    const liElements = document.getElementsByClassName('letter');
    let match = 'null';
    for (i = 0; i = liElements.length; i ++) {
        if (button.textContent === liElements[i].textContent) {                 
            liElements[i].className += 'show';
            letterMatch = liElements[i].textContent;
            const match = button.textContent;
        }
        return match;
}
}


qwerty.addEventListener('click', () => {
    if (button.innerText === liElements[i].innerText) {                 
        liElements[i].className += 'show';
        letterMatch = liElements[i].innerText;
        const match = button.innerText;
    }
    
});

 
    