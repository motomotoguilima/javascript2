function gimpares() {
    document.getElementById("resultados").innerHTML = ``

    var valorI = Number(document.getElementById("inp").value)
    var valorII = Number(document.getElementById("inp1").value)
    

document.getElementById("resultados").innerHTML = ``


    for (var contador = valorI; contador <= valorII; contador++) {
        if (contador % 2 == 1) {
            document.getElementById("resultados").innerHTML += `${contador}  <br>`
        }

    }
}