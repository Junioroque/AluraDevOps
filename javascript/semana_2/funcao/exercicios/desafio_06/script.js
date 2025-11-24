function mensagem() {
    let numero1 = Number(document.getElementById("numero1").value);
    let resultado = document.getElementById("resultado");
     
    let multiplicacao = numero1 * numero1;
    resultado.innerText = `Multiplicação dele é: ${multiplicacao}`;
}


