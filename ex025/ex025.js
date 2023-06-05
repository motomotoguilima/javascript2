var listaFilmes = []

//buscando as informaçoes do localStorager gravadas no navegador
//utilizo o metodo getItem com o nome exatamente que utilizamos no setItem
listaFilmes =JSON.parse(localStorage.getItem('bdFilmes'))
if(listaFilmes == null ){
    listaFilmes = []
}
exibirFilmesVetor()

function cadastrarFilmes(){
   var filme = document.getElementById("inp").value
   var link = document.getElementById("inp1").value
    var objFilme = {
        nomeFilme : filme,
        linkes : link
    }
    listaFilmes.push(objFilme)
    document.getElementById('resultados').innerHTML = ``

    for (var andar in listaFilmes){
        document.getElementById('resultados').innerHTML +=
            `<div> 
            <img class="img" src="${listaFilmes[andar].linkes}"> 
            <p> ${listaFilmes[andar].nomeFilme} </p> 
            </div>`
    }
    /*utilizando o localStorage que ira gravar o nosso vetor de filmes
no metodo setItem, preciso passar como parãmetro o nome do espaço
que navegador ira resevar e passo tambem o vetor de filmes
convertido em formato JSON*/
localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))

exibirFilmesVetor()
document.getElementById("inp").value = ''
document.getElementById("inp1").value = ''
document.getElementById("inp").focus()

}




function indicarFilmes() {
    document.getElementById('resultados').innerHTML = ``
    var filmesSTD = parseInt(Math.random() * listaFilmes.length)
    document.getElementById("resultados").innerHTML +=
        ` <div class="meio"> 
        <img class="img" src="${listaFilmes[filmesSTD].linkes}"> 
        <br>
        ${listaFilmes[filmesSTD].nomeFilme} </div> `
}


function exibirFilmesVetor(){
    document.getElementById('resultados').innerHTML= ''
    for (var i in listaFilmes){
        document.getElementById('resultados').innerHTML +=
        `<div>
        <img src='${listaFilmes[i].link}' class="img"><p> ${listaFilmes[i].nome}</p>
        </div>`
    }
}


function limpar(){
    listaFilmes= []
    localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
    exibirFilmesVetor()
}