function idade() {
    let numero = Number(document.getElementById("valor1").value);

    if(numero == 0){
        console.log("E zero");
        document.getElementById("resultado").innerHTML = "E zero";
    }else if(numero > 0){
        console.log("Positivo");
        document.getElementById("resultado").innerHTML = "Positivo";
    }else {
        console.log("Negativo");
        document.getElementById("resultado").innerHTML = "Negativo"
    }
}

 