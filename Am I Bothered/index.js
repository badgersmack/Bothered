//bothered calc takes a random number ands assigns a string to a p using if statements

var calcBothered = Math.floor(Math.random() * 5);

document.getElementById("butt").addEventListener("click", howBothered);

function howBothered() {
  console.log("Ey?");
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

//console.log added for test purposes
//could have done this an an array but can't see how that would have been any better
//would prefer to make this work every time the click happens: code does run but no longer changes displayed page
