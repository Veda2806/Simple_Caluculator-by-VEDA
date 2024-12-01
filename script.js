// Get the calculator's display input
const display = document.querySelector("form .display input");

// Function to clear the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to append a character to the display
function appendValue(value) {
  display.value += value;
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value); 
  } catch (error) {
    alert("Invalid Expression");
    clearDisplay();
  }
}


document.querySelectorAll("form input[type='button']").forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.value;
    if (value === "AC") {
      clearDisplay();
    } else if (value === "DEL") {
      deleteLast();
    } else if (value === "=") {
      calculateResult();
    } else {
      appendValue(value);
    }
  });
});
