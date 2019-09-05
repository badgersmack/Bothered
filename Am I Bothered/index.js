//bothered calc takes a random number ands assigns a string to a <p> using if statements

var calcBothered;
var newCalcBothered;

function getRandomNumber() {
  newCalcBothered = Math.floor(Math.random() * 5);
  if (newCalcBothered != calcBothered) {
    calcBothered = newCalcBothered;
    howBothered();
  } else {
    getRandomNumber();
  }
}
//recursion makes the result different every time

document.getElementById("butt").addEventListener("click", getRandomNumber);

function howBothered() {

  console.log(newCalcBothered);
//console.log included for test purposes

  if (calcBothered === 4) {
    document.getElementById("result").innerHTML = "Proper bothered mate.";
  }
  if (calcBothered === 3) {
    document.getElementById("result").innerHTML = "Pretty bothered actually.";
  }
  if (calcBothered === 2) {
    document.getElementById("result").innerHTML = "A bit bothered.";
  }
  if (calcBothered === 1) {
    document.getElementById("result").innerHTML = "Not that bothered like.";
  }
  if (calcBothered === 0) {
    document.getElementById("result").innerHTML = "Not in the least bit bothered.";
  }
}
