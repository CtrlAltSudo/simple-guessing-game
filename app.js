let welcome = alert("welcome to a simple guessing game!");
let maxNum = prompt("Please enter a maximum number to guess");
let guess = prompt("whats your first guess?");
let attempts = 1;
const targetNum = Math.floor(Math.random() * maxNum) +1;

while (parseInt(guess) !== targetNum){
    attempts ++;
    if (guess === "q" || guess === "quit") break;
     if (guess > targetNum) {
       guess = prompt("Guess is too high, try again?");
     } else {
        guess = prompt("Guess is too low, try again?");
     }

}   
if (guess === "q" || guess === "quit"){
    alert("Ok, you quit.")
} else alert(`You got it! It took you ${attempts} attempts to guess.`)
location.reload(); 

