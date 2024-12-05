// Variable to track all inputs -- (previous/first number input, operator and current/last number input)
let currentNumber = ""; // current no is the input no user enters
let previousNumber = ""; // previous no is the first no user inputs before operator
let operator = null; // operators

// DOM Elements
const display = document.getElementById("calculatorDisplay"); // this assigns the "display" variable to the display box in html
const toggleModeButton = document.getElementById("toggleMode"); // this assigns the "togglemodebutton" to the moon icon in html

//update the display with the current value
function updateDisplay(value) {
  display.textContent = value || "0"; //show "0" if no value
}

//   append a number/numbers to the current input/number
function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

// append a decimal number if not already present
function appendDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    updateDisplay(currentNumber);
  }
}

//set the operator (+, +, -, *. /) --- This function specifies if no is inputed and operator used then another number is inputed, then perform calculation --- if current number hasnt been inputed then the code does nothing
function setOperator(op) {
  if (currentNumber === "") return; //do nothing
  if (previousNumber !== "") calculate(); //perform calculation
  operator = op;
  previousNumber = currentNumber; // store current input as previous number
  currentNumber = ""; //reset current input - after the calc is done the current is now empty and the prev is now result
}

// Perform the calculation ---  this function defines and sets the functions when any of the operators are used with a prev and current no
function calculate() {
  if (previousNumber === "" || currentNumber === "" || operator === null)
    return;

  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  let result = 0;

  // Perform operation based on the selected operator
  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "Error" : prev / current;
      break;
  }

  updateDisplay(result);
  previousNumber = ""; //clear previous input
  currentNumber = result.toString(); //store result as current input
  operator = null; //reset operator
}

//clear the display and reset state
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = null;
  updateDisplay(0);
}

// Toggle Light/dark mode
toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode"); //toggle light mode class
  toggleModeButton.textContent = document.body.classList.contains("light-mode")
    ? "☀️"
    : "🌙"; // Update button icon
});
