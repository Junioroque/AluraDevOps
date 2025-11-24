function mensagem() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");

    if(numero1 > numero2){
        resultado.innerHTML = `O maior numero é: ${numero1}`;   
        console.log(`O maior numero é: ${numero1}`); 
    } else if(numero2 > numero1){
        resultado.innerHTML = `O maior numero é: ${numero2}`;   
        console.log(`O maior numero é: ${numero2}`); 
    }
}


