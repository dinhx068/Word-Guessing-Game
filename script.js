// VARIABLES
// ==========================================================
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k',
'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;

var wordToGuess = [''];
var wordToGuessIndex = 0;

var lettersGuessedArray = [''];

var guessesRemaining = 12;


/* GAME PSUEDO CODE
// ==========================================================
1. Get random word for user to guess
2. Take in user input from keyboard
3. Compare input to current word index
    right, wordToGuessIndex + 1 & add letter to lettersGuessed[]
    wrong, guessesRemaining - 1 & add letter to lettersGuessed[]
        if guessesRemaining = 0, game ends and game restarts
4. Go back to step 2 until wordToGuess[] is empty?
5. Wins + 1 and game restarts
*/

// FUNCTIONS
// ==========================================================

function gameStatus() {
    console.log("Wins: " + wins);
    console.log("Word to guess index: " + wordToGuessIndex);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedArray;
    console.log("Guesses remaining: " + guessesRemaining);
}

function lettersGuessed(userInput) {
    lettersGuessedArray.push(userInput);
}

// MAIN
// ==========================================================
/*updateWins();
renderWordToGuess();
renderLettersGuessed();*/

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

// If there are no more letters to guess, stop the function.
    /*if (wordToGuessIndex === wordToGuess.length) {
        return;
    }*/

  var userInput = event.key.toLowerCase();

    // Only run this code if "t" or "f" were pressed.
    if (userInput === "t" || userInput === "f") {
        console.log("testing user input");
        lettersGuessed(userInput);
        gameStatus();
    } else {
        console.log("not apart of the alphabet");
    }

}