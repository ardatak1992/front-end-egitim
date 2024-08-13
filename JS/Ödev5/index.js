const themeSwitch = document.getElementById("theme-switch");
const toggleButton = document.getElementById("toggle-button");
const numbers = document.querySelectorAll(".num");
const themeChangeElements = document.querySelectorAll(".theme-1");
const operators = document.querySelectorAll(".operator");
const screenNumber = document.getElementById("screen-number");
const operationMemory = document.getElementById("operation-memory");
const deleteButton = document.getElementById("del-button");
const resetButton = document.getElementById("reset-button");

const changeTheme = (e) => {
  const x = e.clientX - toggleButton.getBoundingClientRect().left;

  themeSwitch.classList.remove("position-1");
  themeSwitch.classList.remove("position-2");
  themeSwitch.classList.remove("position-3");

  if (x <= 24) {
    themeSwitch.classList.add("position-1");
    colorChange(1);
  } else if (x < 44) {
    themeSwitch.classList.add("position-2");
    colorChange(2);
  } else {
    themeSwitch.classList.add("position-3");
    colorChange(3);
  }
};

const colorChange = (themeNo) => {
  themeChangeElements.forEach((element) => {
    element.classList.remove("theme-1");
    element.classList.remove("theme-2");
    element.classList.remove("theme-3");
    element.classList.add(`theme-${themeNo}`);
  });
};

const writeNumberToScreen = (e) => {
  // const number = e.target.innerText === "." ? "," : e.target.innerText;
  const number = e.target.innerText;

  if (
    screenNumber.innerText === "0" ||
    operationMemory.innerText.includes("=")
  ) {
    screenNumber.innerText = number;
  } else {
    screenNumber.innerText += number;
  }

  if (operationMemory.innerText.includes("=")) {
    operationMemory.innerText = "";
  }
};

const deleteNumber = () => {
  if (screenNumber.innerText.length === 1) {
    screenNumber.innerText = 0;
  } else {
    screenNumber.innerText = screenNumber.innerText.substring(
      0,
      screenNumber.innerText.length - 1
    );
  }
};

const calculate = (e) => {
  if (operator) {
    const secondOperator = e.target.innerText;
    if (secondOperator === "=") {
      operationMemory.innerText = `${result} ${operator} ${screenNumber.innerText} ${secondOperator}`;
      result = returnResult(result, Number(screenNumber.innerText), operator);
      screenNumber.innerText = result;
      result = 0;
      operator = "";
    } else {
      result = returnResult(result, Number(screenNumber.innerText), operator);
      operator = secondOperator
      operationMemory.innerText = `${result} ${operator}`;
      screenNumber.innerText = "0";
    }
  } else {
    operator = e.target.innerText;
    result = Number(screenNumber.innerText);
    operationMemory.innerText = `${result} ${operator}`;
    screenNumber.innerText = "0";
  }

  // screenNumber.innerText = "0";
};

const calculate2 = (e) => {
  if (calculationMode) {
    
  }
}

const returnResult = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "x":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return;
  }
};

const resetCalculator = () => {
  screenNumber.innerText = 0;
  operator = "";
  operationMemory.innerText = "";
};

let calculationMode = false;
let result = 0;
let operator = "";

deleteButton.addEventListener("click", deleteNumber);
numbers.forEach((number) => {
  number.addEventListener("click", writeNumberToScreen);
});

operators.forEach((operator) => {
  operator.addEventListener("click", calculate);
});
resetButton.addEventListener("click", resetCalculator);
toggleButton.addEventListener("click", changeTheme);
