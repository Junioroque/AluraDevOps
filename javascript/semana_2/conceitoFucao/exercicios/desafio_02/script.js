function mensagem() {
    let fatorial = Number(document.getElementById("fatorial").value);
  
    let resultado = document.getElementById("resultado");
     
    if (fatorial === 0 || fatorial === 1) {
        resultado.innerText = `O fatorial de ${fatorial} é 1`;
        return;
    }else if (fatorial < 0) {
        resultado.innerText = `Fatorial não definido para números negativos`;
        return;
    }else {

        for (let i = fatorial - 1; i >= 1; i--) {
            fatorial *= i;
            resultado.innerText = `O fatorial é ${fatorial}`;
        }
    }   
}


