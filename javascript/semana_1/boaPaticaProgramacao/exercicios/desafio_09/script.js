function enter() {
    let contador = 0;
    let resultado = "";

    while(contador < 10){
        contador++;
        console.log(contador);
        
        resultado += contador +"<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
}
