# GuessANumber

## Guess a Number App
### HTML Elements(View)
* header -- static
* user input -- static
* button -- static
* user message -- dynamic and change based on the user guess

### State
* userGuess -- will hold the value of the input field
* randomNum -- will be generated at the start of every game
* numGuesses -- number of guesses -- incremented every time the user clicks the button OR starts at 4 and decrements
* userMessage
      - 'You're correct': userGuess === randomNum
      - 'No more guesses': numGuesses === 4
      - 'Guess too high': userGuess > randomNum
      - 'Guess too low': userGuess < randomNum
      - 'Invalid guess': if input is >20 or not a number (stretch)

### PseudoCode for Event
```javascript
// What Events am I listening for?
// on button click do the following:
//   decrement or increment the guess count
 //get the value of the user guess from the input
//   CONVERT THE INPUT TO A NUMBER
//  compare the user guess to the randomNumber
//   if(userGuess === randomNum) -- display you won!
//   else if (numGuesses === 4 ) -- display you lost, out of guesses
//  else if (userGuess > randomNum) -- display Guess too High
//  else if (userGuess < randomNum) -- display Guess too Low