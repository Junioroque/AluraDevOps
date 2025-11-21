function nota() {
    let nota = document.getElementById("valor1").value;

    if(nota >= 70) {
        console.log("Aprovado");
        document.getElementById("resultado").innerHTML = "Aprovado";

    }else{
        console.log("Reprovado");
        document.getElementById("resultado").innerHTML = "Reprovado";
      
    }
   
}
