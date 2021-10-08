const submitButton = document.getElementById('button');
const resetButton = document.getElementById('reset');
const numberInput = document.getElementById('number-input');
const result = document.getElementById('result');
const guessRemainingText = document.getElementById('remaining-guess');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');

let wins = 0;
let losses = 0;

let remainingGuess = 4;
let correctNumber = getRandomInt(1, 21);
//console.log(correctNum); 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) +min);
}
//write function so its a random number between 1-20

button.addEventListener('click', ()=>{
    if (remainingGuess > 0) remainingGuess-- ;
    
    guessRemainingText.textContent = `${remainingGuess} left`;
    //console.log(guessRemainingText);
    let num = Number(numberInput.value);
    let guess;
    //console.log(num);
    if (num === correctNumber) {
         guess = 'YOU WIN B*TCH'
         wins++;
         winSpan.textContent = wins;
        } 
        else if (remainingGuess === 0) {
         guess = 'You are out of guesses-tuff luck bud!'
         losses++;
         lossSpan.textContent = losses;
        } 
        else if (num < correctNumber) {
         guess = 'Too low!'} 
        else if (num > correctNumber) {
         guess = 'Too High!'}
         //console.log(guess);
        const resultText = `${guess}`;
        result.textContent = resultText;
});

resetButton.addEventListener('click', ()=>{
    winSpan.textContent = '0';
    lossSpan.textContent = '0';
    guessRemainingText.textContent = '';
    result.textContent = '';
});
