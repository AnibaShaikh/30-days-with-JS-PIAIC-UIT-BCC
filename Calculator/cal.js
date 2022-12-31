let displayBox = document.querySelector(".display");

// Show The answer to calculations
function showDisplay(event) {
  const x = event.target.innerText;
  if (displayBox.innerHTML == 0) {
    return (displayBox.innerHTML = x);
  }
  return (displayBox.innerHTML += x);
}

// Calculation answer
function calculate() {
  let result = displayBox.innerText;
  displayBox.innerText = eval(result);
}

// Clear all calculations
function clearAll() {
  displayBox.innerText = 0;
}

// Delete the last entry
function clearLast() {
  let text = displayBox.innerText;
  if (text.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = text.substring(0, text.length - 1);
  }
}

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".clear-all").addEventListener("click", clearAll);
document.querySelector(".clear-last").addEventListener("click", clearLast);

let list = document.querySelectorAll(".show-display");
list.forEach((item) => {
  item.addEventListener("click", showDisplay);
});
