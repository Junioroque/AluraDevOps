let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function mensagemConsole() {
    console.log("Foi Clicado");
}

function mensagemAlert() {
    alert("Eu amo JS")
}

function mensagemPrompt() {
    let texto = document.querySelector("p");
    texto.innerHTML = "Digite um nome de uma cidade do Brasil?";
    texto.style.fontSize = "30px";
    texto.style.color = "white";
    
}