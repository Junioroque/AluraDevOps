function idade() {
    let idade = Number(document.getElementById("valor1").value);

    if(idade >= 18){
        console.log("Maior de idade");
        document.getElementById("resultado").innerHTML = "Maior de idade";
    }else{
        console.log("Menor de idade");
        document.getElementById("resultado").innerHTML = "Menor de idade";
    }
}

 