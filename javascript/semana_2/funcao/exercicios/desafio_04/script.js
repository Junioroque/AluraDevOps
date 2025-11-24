function mensagem() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);
    let resultado = document.getElementById("resultado");

    let media = (numero1 + numero2 + numero3) / 3;
    
    resultado.innerHTML = `A media: ${media}`;   
    console.log(`A media: ${media}`); 
}


