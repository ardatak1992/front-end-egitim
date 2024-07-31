const num = document.getElementById("num");
const minusBtn = document.getElementById("minus-button");
const plusBtn = document.getElementById("plus-button");

const increase = () => {
  num.textContent = Number(num.textContent) + 1;
};

const decrease = () => {
  num.textContent = Number(num.textContent) - 1;
};

plusBtn.addEventListener("click", increase);
minusBtn.addEventListener("click", decrease);
