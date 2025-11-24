function mensagem() {
    let altura = Number(document.getElementById("altura").value);
    let peso = Number(document.getElementById("peso").value);
    let resultado = document.getElementById("resultado");
     
    let imc = peso / (altura * altura);
    resultado.innerText = `Seu IMC é ${imc.toFixed(2)}`;
}


