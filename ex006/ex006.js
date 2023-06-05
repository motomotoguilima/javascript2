function calcular() {
    var valor1 = document.getElementById("inp1").value
    var valor2 = document.getElementById("inp2").value
    var soma = Number(valor1) + Number(valor2)
    var subtração = Number(valor1) - Number(valor2)
    var multiplicacao = Number(valor1) * Number(valor2)
    var divisao = Number(valor1) / Number(valor2)
    var exponenciação = Number(valor1) ** Number(valor2)
    var resto = Number(valor1) % Number(valor2)
    document.getElementById("resultados").innerHTML = `<br>   ${valor1} + ${valor2} = ${soma} <br>
    ${valor1} - ${valor2} = ${subtração} <br>
    ${valor1} * ${valor2} = ${multiplicacao} <br>
    ${valor1} / ${valor2} = ${divisao} <br>
    ${valor1} ** ${valor2} = ${exponenciação} <br>
    ${valor1} % ${valor2} = ${resto} `

}