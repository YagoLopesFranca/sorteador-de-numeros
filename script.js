const buttonDraw = document.querySelector("#button-draw");
const inputBetween = document.querySelector("#input-between");
const inputAnd = document.querySelector("#input-and");
// const resultDraw = document.querySelector(".result");

function drawer() {
  const min = Math.ceil(Number(inputBetween.value));
  const max = Math.floor(Number(inputAnd.value));

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  alert(result);
}

buttonDraw.addEventListener("click", drawer);
