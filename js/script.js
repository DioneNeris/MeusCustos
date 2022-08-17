function start() {
  var buttonCalculatePreco = document.querySelector('#button-calcular');
  buttonCalculatePreco.textContent ="Olá!";
  console.log(buttonCalculatePreco.textContent);
}

function precoFinal(preco, margem) {
  return preco + (margem / 100) * preco;
}
start();
