let counter = 0;

function updateDisplay() {
  const displayElement = document.getElementById('counterDisplay');
  if (displayElement) {
    displayElement.textContent = counter.toString();
  }
}

function increment() {
  counter++;
  updateDisplay();
}

function decrement() {
  if (counter > 0) {
    counter--;
    updateDisplay();
  }
}

function reset() {
  counter = 0;
  updateDisplay();
}

updateDisplay();
