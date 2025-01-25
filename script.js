let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("submit");
const input = document.getElementById("input");
const guessesremaining = document.getElementById("guessesremaining");
const PreviousGuesses = document.getElementById("PreviousGausses");
const hint = document.getElementById("hint");
const reset = document.getElementById("reset");

let prevguess = [];
let numguess = 1;
let playgame = true;

// Add the newgame function call
newgame();

if (playgame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number.`);
  } else if (guess < 1 || guess > 100) {
    alert(`Enter a number between 1 and 100.`);
  } else {
    prevguess.push(guess);
    if (numguess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomnumber}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessage(`🎉 You got it right!`);
    endgame();
  } else if (guess < randomnumber) {
    displayMessage(`🔽 The number is too low.`);
  } else if (guess > randomnumber) {
    displayMessage(`🔼 The number is too high.`);
  }
}

function displayGuess(guess) {
  input.value = "";
  PreviousGuesses.innerHTML += `${guess} `;
  numguess++;
  guessesremaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message) {
  hint.innerHTML = `${message}`;
}

function endgame() {
  input.value = "";
  input.setAttribute("disabled", "true");
  playgame = false;
  reset.classList.remove("hidden"); // Show the reset button
}

// Fixing the newgame function
function newgame() {
  reset.addEventListener("click", function (event) {
    event.preventDefault();
    randomnumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
    prevguess = [];
    numguess = 1;
    PreviousGuesses.innerHTML = "";
    guessesremaining.innerHTML = `${11 - numguess}`;
    hint.innerHTML = ""; // Clear the hint message
    input.removeAttribute("disabled");
    playgame = true;
    reset.classList.add("hidden"); // Hide the reset button
  });
}
