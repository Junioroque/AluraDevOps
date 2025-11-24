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
    let campo = document.createElement("input");
    campo.type = "text";
    document.body.appendChild(campo)
    let botao = document.createElement("button");
    botao.textContent = "Enviar";
    document.body.appendChild(botao);

    let resultado = document.createElement("h2");
    document.body.appendChild(resultado);
    resultado.style.fontSize = "40px";
    resultado.style.color = "white";

    botao.onclick = function() {
    let cidade = campo.value;     
    resultado.innerHTML = `Estive em ${cidade} e lembrei de você.`;  
   }

}
    
function mensagemSoma() {
    let numero1 = Number(prompt("Digite um numero: "));
    let numero2 = Number(prompt("Digite outro numero: "));
    let resultado = numero1 + numero2;
    alert(numero1 +" + "+numero2+" = "+resultado);
    
}

