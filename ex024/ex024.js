function calcularmedia() {
    var aluno = document.getElementById("inp").value
    var nota1 = document.getElementById("inp1").value
    var nota2 = document.getElementById("inp2").value
   
    var possoCalcular = validarNotas(nota1, nota2)
    if (possoCalcular == false) {
        return
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











function validarNotas(nota1, nota2) {
    if (nota1 > 10) {
        alert("Nota 1 nao ser > 10")
        return false
    }
    if (nota2 > 10) {
        alert("Nota 2 nao ser > 10")
        return false
    }
}

function calcularMedia(nota1, nota2){
    var mediaCalculada = (Number(nota1) + Number(nota2)) /2
    return mediaCalculada
}

function exibirAprovacao (media){
    
}