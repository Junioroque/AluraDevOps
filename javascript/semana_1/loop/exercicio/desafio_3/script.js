function contar() {
    let contador = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    while (contador >= 0) {
        resultado.innerHTML += contador + "<br>";
        contador --;

    }
}
