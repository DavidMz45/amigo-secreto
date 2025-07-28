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
  actualizarLista();
}

function limpiarEntrada() {
  document.getElementById("amigo").value = "";
  document.getElementById("listaAmigos").innerHTML = "";
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  console.log(amigos.length);
  if (amigos.length == 0) {
    alert("Por favof, añada amigos a la lista.");
    return;
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  let resultado = document.getElementById("resultado");
  limpiarEntrada();
  resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}
