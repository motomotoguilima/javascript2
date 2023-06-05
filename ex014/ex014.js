function sortear() {
    document.getElementById("resultados").innerHTML = ``

   var contador = 1
    while (contador <= 6 )
    {
        var NRcontador =  parseInt(Math.random() * 60 ) + 1
        document.getElementById("resultados").innerHTML += ` ${NRcontador}  `
        contador++
    }

}