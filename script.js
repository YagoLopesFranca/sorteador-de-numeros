const buttonDraw = document.querySelector("#button-draw");
const inputBetween = document.querySelector("#input-between");
const inputAnd = document.querySelector("#input-and");

function drawer() {
  const min = Math.ceil(Number(inputBetween.value));
  const max = Math.floor(Number(inputAnd.value));

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  const resultDraw = document.createElement("div");
  resultDraw.classList.add("container");

  resultDraw.innerHTML = "";

  resultDraw.style.width = "200px";
  resultDraw.style.height = "100px";
  resultDraw.style.backgroundColor = "blue";
  resultDraw.style.color = "black";
  resultDraw.style.margin = "auto";
  resultDraw.style.textAlign = "center";
  resultDraw.style.fontSize = "50px";
  resultDraw.style.fontWeight = "700";
  resultDraw.style.display = "flex";
  resultDraw.style.alignItems = "center";
  resultDraw.style.justifyContent = "center";
  resultDraw.style.margin = "10px";
  resultDraw.style.position = "absolute";
  resultDraw.style.top = "48%";
  resultDraw.style.right = "45.7%";
  resultDraw.style.background = "#aec346";
  resultDraw.textContent = `${result} `;
  document.body.appendChild(resultDraw);
}

buttonDraw.addEventListener("click", drawer);
