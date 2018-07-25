// VARIABLES and ARRAYS
// ==========================================================

var wordToGuess = [
    "avatar: the last airbender",
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
    "spongebob squarepants",
    "steins;gate",
    "teenage mutant ninja turtles",
    "teen titans",
    "the fairly oddparents",
    "the flintstones",
    "tom and jerry",
    "yu-gi-oh"
    ];
    
    var chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
    console.log("Word to guess: " + chosenWord);
    console.log("Total words left in array " + wordToGuess.length);

    var wins = 0;
    var str;
    
    var underScoreArray = [];
    var lettersGuessedArray = [];
    var guessesRemaining = 10;
    
    // FUNCTIONS
    // ==========================================================
    
    function gameStatus() {
        checkIfWon();
        while (guessesRemaining == 0) {
            var proceed = confirm("You lost, play again?");
            if (proceed == true) {
            underScoreArray = [];
            lettersGuessedArray = [];
            guessesRemaining = 10;
            chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
            underScores();
            addInOtherCharacters();
            console.log("Word to guess: " + chosenWord);
            console.log("Total words left in array " + wordToGuess.length);
            } else {
                alert("Thanks for playing");
                // NEEDS TO STOP/EXIT
                $("#hidden").show();
                $("#container").hide();
                reset();
                guessesRemaining = -1;
                break;
            }
        }

        document.getElementById("lettersGuessed").innerHTML = lettersGuessedArray;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        //console.log("length of lettersGuessedArray:" + lettersGuessedArray.length);
    }
    
    function underScores() {
        for (var i = 0; i < chosenWord.length; i++) {
            underScoreArray[i] = "_";
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
            } else if (chosenWord[i] == ":"){
                underScoreArray[i] = ":";
    
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
    
    // Userinput checking and put onto screen
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
            }
        } else if (lettersGuessedArray.includes(userInput.toUpperCase())) {
        // DO NOTHING, if letter is already guessed
        } else {
            lettersGuessedArray.push(userInput.toUpperCase());
            guessesRemaining -= 1;
        }
    }

    function checkIfWon() {
        if(!(underScoreArray.includes("_"))) {
            wins += 1;
            document.getElementById("winCount").innerHTML = wins;
            var proceed = confirm("You win! The show was " + chosenWord.toUpperCase() + "!" + " Play again?");
                if (proceed == true) {
                    reset();
                } else {
                    // NEEDS TO STOP/EXIT
                    $("#hidden").show();
                    $("#container").hide();
                    reset();
                    guessesRemaining = -1;
                }
        } else {
            // Do nothing here until game has been won
        }
    }

    function reset() {
        underScoreArray = [];
        lettersGuessedArray = [];
        guessesRemaining = 10;
        chooseNewWord();
        console.log("Word to guess: " + chosenWord);
        console.log("Total words left in array " + wordToGuess.length);
        underScores();
        addInOtherCharacters();
    }
    
    function chooseNewWord(){
        if (!wordToGuess.length == 0) {
            var index = wordToGuess.indexOf(chosenWord);
            if (index > -1) {
                wordToGuess.splice(index, 1);
            } else {
                // DO NOTHING until true
            }
            chosenWord = wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
        } else {
            alert("There are no more words to guess, thank you for playing"); // Not working currently
        }
    }
    // MAIN
    // ==========================================================
    
    underScores();
    addInOtherCharacters();
    
    // When the user presses a key, it will run the following function
    document.onkeyup = function(event) {
    
      var userInput = event.key.toLowerCase();
    
        // Only run this code if letters in the alphabet were pressed
        if (checkInput(userInput)) {
            lettersGuessed(userInput);
            gameStatus();
        } else {
            console.log("not apart of the alphabet");
        }
    }