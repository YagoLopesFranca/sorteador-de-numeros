const buttonDraw = document.querySelector("#button-draw");
const inputBetween = document.querySelector("#input-between");
const inputAnd = document.querySelector("#input-and");

// Selecione a div de resultado uma única vez
const resultDraw = document.querySelector("#result-draw");

function drawer() {
  const min = Math.ceil(Number(inputBetween.value));
  const max = Math.floor(Number(inputAnd.value));

  // Validação simples para garantir que os inputs são válidos
  if (isNaN(min) || isNaN(max) || min > max) {
    resultDraw.textContent = "Erro: valores inválidos";
    return;
  }

  // Lógica do sorteio
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  // Atualiza o texto da div já existente
  resultDraw.textContent = result;
}

// Adiciona o evento de clique ao botão
buttonDraw.addEventListener("click", drawer);
