function mensagem() {
    let dolar = Number(document.getElementById("dolar").value);
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O valor em reais é R$ ${converterDolarParaReal(dolar)}`;  
   
}

function converterDolarParaReal(dolar) {
    const cotacaoDolar = 4.80;
    let valorEmReais = dolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}


