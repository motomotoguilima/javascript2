function calcularmedia() {
    var aluno = document.getElementById("inp").value
    var nota1 = document.getElementById("inp1").value
    var nota2 = document.getElementById("inp2").value
    if (nota1 > 10) {
        alert("Nota 1 nao ser > 10")
    }
    if (nota2 > 10) {
        alert("Nota 2 nao ser > 10")
    }

    var media = (Number(nota1) + Number(nota2)) / 2
    if (media >= 7) {
        document.getElementById("resultado").innerHTML = 
        `<b class="aprov">APROVADO</b>`
       
    }
    else {
        document.getElementById("resultado").innerHTML = 
        `<b class="repr">REPROVADO</b>`
    }

}