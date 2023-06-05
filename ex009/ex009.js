function verificar(){
    var nome = document.getElementById("inp").value
    var idade = document.getElementById("inp1").value

        if (idade >= 18) {
            document.getElementById("resultados").innerHTML = 
            `<b class="aprov">Parabens, ${nome} voce  pode tirar CNH</b>
            <br>
            <img class="img" src="js-img.jpg">`
        }
            else {
                document.getElementById("resultados").innerHTML = 
                `<b class="repr">Parabens,  ${nome} voce nao pode tirar CNH
                </b>
                <br>
                <img class="img" src="post-dicas-cnh-suspensa.jpg"> `
            }
}