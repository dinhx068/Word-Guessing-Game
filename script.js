// VARIABLES
// ==========================================================
var wins = 0;

var wordToGuess = [];
var wordToGuessIndex = 0;

var lettersGuessedArray = [];

var guessesRemaining = 10;


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
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedArray;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    //console.log("Wins: " + wins);
    //console.log("Word to guess index: " + wordToGuessIndex);
    //console.log("Guesses remaining: " + guessesRemaining);
    console.log("length of lettersGuessedArray:" + lettersGuessedArray.length);
}

// Character codes, https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
function checkInput(userInput) {
    var charCode = (userInput.which) ? userInput.which : event.keyCode
    if (charCode < 58) {
       return false;
    } else if (charCode > 90) {
        return false;
    } else {
    return true;
    }
}

function lettersGuessed(userInput) {
    if (lettersGuessedArray.includes(userInput)) {
        // DO NOTHING, if key was already pressed
        //console.log("TRUE, IS in the array");
    } else {
        // Add to array if letter has not been pressed yet
        //console.log("FALSE, NOT in the array");
        lettersGuessedArray.push(userInput);
        guessesRemaining = guessesRemaining - 1 ;
    }
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

    // Only run this code if letters in the alphabet were pressed
    if (checkInput(userInput)) {
        console.log("testing user input");
        lettersGuessed(userInput);
        gameStatus();
    } else {
        console.log("not apart of the alphabet");
    }

}