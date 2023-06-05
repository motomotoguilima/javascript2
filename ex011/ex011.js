function verificar() {
    var nome = document.getElementById("inp").value
    var idade = document.getElementById("inp1").value

    if (idade == "") {
        alert("Digite uma idade")
        exit
    }
    

    if (idade >= 18 && idade <= 65) {
        document.getElementById("resultados").innerHTML =
            `<b class="aprov"> ${nome}, voce é obrigado a votar</b> `
    }
    else if (idade >= 16  || idade > 65) {
        document.getElementById("resultados").innerHTML =
            `<b class="repro">${nome}, voce pode votar mas não e obrigado </b> `
    } else if (idade < 16) {
        document.getElementById("resultados").innerHTML =
            `<b class="repr"> ${nome}, voce não pode votar</b> `
    }

}