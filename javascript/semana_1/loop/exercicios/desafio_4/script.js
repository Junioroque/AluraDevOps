function contar() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let contador = 0;

    resultado.innerHTML = "";

    while (contador <= numero) {
        resultado.innerHTML += contador + "<br>";
        contador ++;

    }
}
