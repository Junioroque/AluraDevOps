function calcular() {
    let valor1 = Number(document.getElementById("valor1").value);
    let valor2 = Number(document.getElementById("valor2").value);

    resultado = valor1 + valor2;

    console.log("A soma do numero: "+ valor1+" + "+valor2+" = "+resultado );

    document.getElementById("resultado").innerHTML =  valor1+ " + " +valor2+ " = " +resultado;
}