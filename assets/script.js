// VARIABLES
// ==========================================================

var wordToGuess = [
"avatar: yhe last airbender",
"breaking bad",
"caillou",
"code geass",
"courage the cowardly dog",
"death note",
"dexter's laboratory",
"digimon frontier",
"dragon ball z",
"dragon tales",
"family guy",
"gravity falls",
"jackie chan adventures",
"king of the hill",
"kim possible",
"looney tunes",
"made in abyss",
"neon genesis evangelion",
"pokemon",
"popeye the sailor",
"rugrats",
"scooby-doo",
"simpsons",
"south park",
"spongebob squarePants",
"steins;gate",
"teenage mutant ninja turtles",
"teen titans",
"the fairly oddParents",
"the flintstones",
"tom and jerry",
"yu-gi-oh"
];

var chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)]; // Random word
console.log(chosenWord);

var wins = 0;
var str;

var underScoreArray = [];
var lettersGuessedArray = [];
var guessesRemaining = 10;

// FUNCTIONS
// ==========================================================

function gameStatus() {
    document.getElementById("lettersGuessed").innerHTML = lettersGuessedArray;
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    //console.log("Wins: " + wins);
    //console.log("Word to guess index: " + wordToGuessIndex);
    console.log("length of lettersGuessedArray:" + lettersGuessedArray.length);
}

function underScores() {
    for (var i = 0; i < chosenWord.length; i++) {
        underScoreArray[i] = "_"; // answerArray
    }
    str = underScoreArray.join("");
    document.getElementById("answer").innerHTML = str;
}

function addInOtherCharacters() {
    for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] == " "){
            underScoreArray[i] = " ";

        } else if (chosenWord[i] == "'"){
            underScoreArray[i] = "'";

        } else if (chosenWord[i] == ";"){
            underScoreArray[i] = ";";

        } else if (chosenWord[i] == "-"){
            underScoreArray[i] = "-";
        }
    }
    document.getElementById("answer").innerHTML = underScoreArray.join(" ");
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
    if (chosenWord.includes(userInput)) {
        if (lettersGuessedArray.includes(userInput.toUpperCase())) {
            // DO NOTHING, if letter is already guessed
        } else {
            // Add userInput to the underScores array to display on screen
            for (var i = 0; i < chosenWord.length; i++) {
                if (chosenWord[i] === userInput) {
                    underScoreArray[i] = userInput.toUpperCase();
                } else { 
                    // DO NOTHING when not matching
                }
            }
        document.getElementById("answer").innerHTML = underScoreArray.join(" ");
        lettersGuessedArray.push(userInput.toUpperCase());
        } // End of if statement LINE 83
    } else if (lettersGuessedArray.includes(userInput.toUpperCase())) {
    // DO NOTHING, if letter is already guessed
    } else {
        lettersGuessedArray.push(userInput.toUpperCase());
        guessesRemaining = guessesRemaining - 1;
    }
}

// MAIN
// ==========================================================
/*renderWordToGuess();
renderLettersGuessed();*/

underScores();
addInOtherCharacters();

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