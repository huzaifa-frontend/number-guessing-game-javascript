document.addEventListener('DOMContentLoaded', () => {
    const maxLives = 3;
    let lives = maxLives;
    let targetNumber = Math.floor(Math.random() * 10) + 1; 
  
    const heartsDisplay = document.getElementById('hearts');
    const messageDisplay = document.getElementById('message');
    const guessInput = document.getElementById('guess');
    const submitGuessButton = document.getElementById('submitGuess');
    const restartButton = document.getElementById('restart');
  
    function updateHearts() {
      heartsDisplay.textContent = '❤️'.repeat(lives);
    }
  
    function handleGuess() {
      const guess = Number(guessInput.value);
  
      if (!guess || guess < 1 || guess > 10) {
        messageDisplay.textContent = 'Please enter a number between 1 and 10!';
        return;
      }
  
      if (guess === targetNumber) {
        messageDisplay.textContent = '🎉 Congratulations! You guessed it right!';
        submitGuessButton.style.display = 'none';
        restartButton.style.display = 'inline-block';
      } else {
        lives--;
        if (lives > 0) {
          messageDisplay.textContent = guess > targetNumber
            ? 'Too high! Try again.'
            : 'Too low! Try again.';
          updateHearts();
        } else {
          messageDisplay.textContent = `😞 Game Over! The correct number was ${targetNumber}.`;
          submitGuessButton.style.display = 'none';
          restartButton.style.display = 'inline-block';
          updateHearts();
        }
      }
  
      guessInput.value = '';
    }
  
    function restartGame() {
      lives = maxLives; 
      targetNumber = Math.floor(Math.random() * 10) + 1; 
      updateHearts(); 
      messageDisplay.textContent = 'Guess a number between 1 and 10!'; 
      guessInput.value = ''; 
      submitGuessButton.style.display = 'inline-block'; 
      restartButton.style.display = 'none'; 
    }
  
    submitGuessButton.addEventListener('click', handleGuess);
    restartButton.addEventListener('click', restartGame);
  
    updateHearts();
  });
  