
var maisVidas = 0
function maisVida() {
    document.getElementById("resultados").innerHTML = ``
    maisVidas++
    for (var contador = 0; contador < maisVidas; contador++) {
        document.getElementById("resultados").innerHTML += `${contador}  <br>  <img class="img" src="download.png"> <br>`
    }

}


function menosVida() {
    document.getElementById("resultados").innerHTML = ``
    maisVidas--
    for (var contador = 0; contador < maisVidas; contador++) {
        document.getElementById("resultados").innerHTML += `${contador}  <br>  <img class="img" src="download.png"> <br>`
    } 
    if (maisVidas <= 0) {
        document.getElementById("resultados").innerHTML += `${contador}  <br>  <img class="img" src="game-over.gif"> <br>`
    }
}





var x = 5
var resultado = 0
resultado = calc