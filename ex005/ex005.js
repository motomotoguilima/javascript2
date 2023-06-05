

function botaocalcular() {
    var valor = document.getElementById("inp").value
    var dobro = Number(valor) * 2
    var metade = Number(valor) / 2

    document.getElementById("resultados").innerHTML += `<br> o dobro de  ${valor} e igual a ${dobro} e a metade e ${metade}`

}
function botaolimpar() {
    document.getElementById("resultados").innerHTML = ""
}
