function mensagem() {
    let nome = document.getElementById("nome").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";
    
    resultado.innerHTML = `Olá, ${nome}!`;   
    console.log(`Olá, ${nome}!`); 
}


