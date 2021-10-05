const submitButton = document.getElementById('button');
const numberInput = document.getElementById('number-input');
const result = document.getElementById('result');
const guessRemainingText = document.getElementById('remaining-guess');

let remainingGuess = 4
let correctNumber = getRandomInt(1, 21);
//console.log(correctNum); 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) +min);
}
//write function so its a random number between 1-20

button.addEventListener('click', ()=>{
    remainingGuess --;
    guessRemainingText.innerText = `${remainingGuess} left`;
    //console.log(guessRemainingText);
    let num = Number(numberInput.value);
    let guess;
    //console.log(num);
    if (num === correctNumber) {
         guess = 'YOU WIN B*TCH'} 
        else if (remainingGuess > 4) {
         guess = 'You are out of guesses-tuff luck bud!'} 
        else if (num > correctNumber) {
         guess = 'Too low!'} 
        else if (num < correctNumber) {
         guess = 'Too High!'}
         //console.log(guess);
        const resultText = `${guess}`;
        result.textContent = resultText;
    
    
});


