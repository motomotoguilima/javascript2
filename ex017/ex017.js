function grimpares() {
    document.getElementById("resultados").innerHTML = ``


    for (var contador = 1; contador <= 20; contador++) {
        if (contador % 2 == 1) {
            document.getElementById("resultados").innerHTML += `${contador}  <br>`
        }

    }
}


