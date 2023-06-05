var filmes = []
var links = []

function cadastrarFilmes() {
    var filme = document.getElementById("inp").value
    filmes.push(filme)
    var link = document.getElementById("inp1").value
    links.push(link)
    document.getElementById('resultados').innerHTML = ``

    //for (var i in filmes){}
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById('resultados').innerHTML +=
            `<div> 
            <img class="img" src="${links[i]}"> 
            <p> ${filmes[i]} </p> 
            </div>`
    }

}

function indicarFilmes() {
    document.getElementById('resultados').innerHTML = ``
    var filmesSTD = parseInt(Math.random() * filmes.length)
    document.getElementById("resultados").innerHTML +=
        ` <div class="meio"> 
        <img class="img" src="${links[filmesSTD]}"> 
        <br>
        ${filmes[filmesSTD]} </div> `
}
