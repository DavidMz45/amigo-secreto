// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var amigos = [];

function agregarAmigo() {
  let amigoEntrada = document.getElementById("amigo").value;

  if (amigoEntrada === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(amigoEntrada);
  limpiarEntrada();
}

function limpiarEntrada() {
  document.getElementById("amigo").value = "";
}
