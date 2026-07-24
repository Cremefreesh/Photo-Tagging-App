function score(currentScore, highScore) {
  if (currentScore > highScore) {
    // Update high score in the database
    // Assuming you have a function to update the high score in your database
    updateHighScoreInDatabase(currentScore);
  } else {
    // Do nothing if current score is less than or equal to high score
  }
}

function updateHighScoreInDatabase(newHighScore) {
  // Implement the logic to update the high score in your database
  // This could involve making a database query to update the player's high score
  console.log(`Updating high score in database to: ${newHighScore}`);
}