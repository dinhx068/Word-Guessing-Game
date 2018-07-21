// VARIABLES
// ==========================================================

var wins = 0;

var wordToGuess = [
"Avatar: The Last Airbender",
"Breaking Bad",
"Caillou",
"Code Geass",
"Courage the Cowardly Dog",
"Death Note",
"Dexter's Laboratory",
"Digimon Frontier",
"Dragon Ball Z",
"Dragon Tales",
"Family Guy",
"Gravity Falls",
"Jackie Chan Adventures",
"King of the Hill",
"Kim Possible",
"Looney Tunes",
"Made in Abyss",
"Neon Genesis Evangelion",
"Pokemon",
"Popeye the Sailor",
"Rugrats",
"Scooby-Doo",
"Simpsons",
"South Park",
"SpongeBob SquarePants",
"Steins;Gate",
"Teenage Mutant Ninja Turtles",
"Teen Titans",
"The Fairly OddParents",
"The Flintstones",
"Tom and Jerry",
"Yu-Gi-Oh"
];

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
    console.log("length of lettersGuessedArray:" + lettersGuessedArray.length);
}

// Generates a random number from 0-29 to return a random tv show
function chooseRandomWord() {
    var randNum = Math.floor((Math.random() * 32) + 0);
    return wordToGuess[randNum];
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
        // DO NOTHING, if letter is already in array
    } else {
        // Add to array if letter has not been pressed yet
        lettersGuessedArray.push(userInput);
        guessesRemaining = guessesRemaining - 1 ;
    }
}

// MAIN
// ==========================================================
/*renderWordToGuess();
renderLettersGuessed();*/

var randWord = chooseRandomWord();

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
        console.log(randWord);
    } else {
        console.log("not apart of the alphabet");
    }

}