let randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.getElementById("submit");
const input = document.getElementById("input");
const guessesremaining = document.getElementById("guessesremaining");
const PreviousGuesses = document.getElementById("PreviousGausses");
const hint = document.getElementById("hint");
const reset = document.getElementById("reset");
const PreviousGaussesdiv=document.getElementById("PreviousGaussesdiv");
const hintdiv=document.getElementById("hintdiv");
const guessesremainingdiv=document.getElementById("guessesremainingdiv")
const gameover=document.getElementById("Gameover")
const over=document.getElementById("over")
const win=document.getElementById("win")
const instruction=document.getElementById("instruction")
const form=document.getElementById("form")
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
    if (numguess ===10) {
      displayGuess(guess);
      gaveovercard(`Game Over. The random number was ${guess}`);
      displayMessage(`Game Over. The random number was ${randomnumber}`);
      form.classList.add("hidden")
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  hintdiv.classList.remove("hidden")
  guessesremainingdiv.classList.remove("hidden")
  if (guess === randomnumber) {
    
    displayMessage(`🎉 You got it right!`);
    
   
    winendgame();
  } else if (guess < randomnumber) {
    displayMessage(`📉 Too low! Try guessing a higher number. ⬆️`);
  } else if (guess > randomnumber) {
    displayMessage(`📈 Too high! Try guessing a lower number. ⬇️`);
  }
}

function displayGuess(guess) {
  PreviousGaussesdiv.classList.remove("hidden")
  instruction.classList.add("hidden");
  input.value = "";
  PreviousGuesses.innerHTML += `${guess} `;
  numguess++;
  guessesremaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message) {
  hint.innerHTML = `${message}`;
  over.innerHTML=`${message}`

}

function endgame() {
 
  input.value = "";
  input.setAttribute("disabled", "true");
  playgame = false;
  reset.classList.remove("hidden");
  PreviousGaussesdiv.classList.add("hidden"); 
  guessesremainingdiv.classList.add("hidden"); 
  hintdiv.classList.add("hidden"); 
  gameover.classList.remove("hidden");
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
    win.classList.add("hidden");
    over.classList.add("hidden");
    gameover.classList.add("hidden");
    form.classList.remove("hidden")

    
  });

}
function gaveovercard(numguess){
  if (numguess === 10){
    over.innerHTML=`Game Over. The random number was ${randomnumber}`
    
  }

}
function winendgame() {
  
  win.classList.remove("hidden");
  input.value = "";
  input.setAttribute("disabled", "true");
  playgame = false;
  reset.classList.remove("hidden");
  PreviousGaussesdiv.classList.add("hidden"); 
  guessesremainingdiv.classList.add("hidden"); 
  hintdiv.classList.add("hidden"); 
  form.classList.add("hidden")
}
 
