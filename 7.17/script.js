function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0; // initialize the number of guesses to 0
    
    while (numGuesses < totalGuesses) { // loop while the user still has guesses left
      let guess = prompt(getPromptText()); // prompt the user for a guess
      
      if (guess === null) { // if the user pressed cancel, return 0
        return 0;
      }
      
      guess = parseInt(guess); // convert the guess to a number
      
      if (isNaN(guess)) { // if the guess is not a number, prompt the user again
        alert('Please enter a number.');
        continue;
      }
      
      numGuesses++; // increment the number of guesses
      
      if (guess === numToGuess) { // if the guess is correct, return the number of guesses
        return numGuesses;
      } else if (guess < numToGuess) { // if the guess is too small, prompt the user for a larger number
        alert(`${guess} is too small. Guess a larger number.`);
      } else { // if the guess is too large, prompt the user for a smaller number
        alert(`${guess} is too large. Guess a smaller number.`);
      }
    }
    
    // If the user ran out of guesses, return 0
    return 0;

    
    // Helper function to generate the prompt text
    function getPromptText() {
      if (numGuesses === 0) { // if this is the first guess, prompt the user to enter a number between 1 and 100
        return 'Enter a number between 1 and 100.';
      } else if (guess < numToGuess) { // if the guess is too small, prompt the user to guess a larger number
        return `${guess} is too small. Guess a larger number.`;
      } else { // if the guess is too large, prompt the user to guess a smaller number
        return `${guess} is too large. Guess a smaller number.`;
      }
    }
  }
  