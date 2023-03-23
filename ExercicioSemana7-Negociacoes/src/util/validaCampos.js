

function validaInt1a100() {
  //Faz a validação se um numero é entre 0-100
  var number = document.getElementById("qtdAcoes").value;
  if (number < 1 || number > 100) {
    alert("Escreva um numero entre 1 e 100");
  }
}

