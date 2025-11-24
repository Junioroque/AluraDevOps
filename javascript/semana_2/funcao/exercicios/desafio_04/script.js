function mensagem() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    let dobro = numero * 2;
    
    resultado.innerHTML = `O doblo: ${dobro}`;   
    console.log(`O doblo: ${dobro}`); 
}


