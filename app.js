let amigos = [];

function adicionarAmigo() {
  let Nome = document.getElementById("amigo");
  let amigoNome = Nome.value.trim();

  if (!amigoNome) {
    alert("Adicione um nome!");
  } else {
    amigos.push(amigoNome);
    Nome.value = "";
    Nome.focus();
    console.log("Amigos: ", amigos); // Verifica os amigos no console
    atualizacaoLista();
  }
}

function atualizacaoLista() {
  let listaAmigo = document.getElementById("listaAmigos");
  listaAmigo.innerHTML = "";

  console.log("Atualizando lista..."); // Verifica quando a lista está sendo atualizada

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigo.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Por favor, adicione um nome.");
    return;
  } else {
    let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O seu amigo secreto é ${nomeSorteado}!`;
  }
}