var filmes = []

function cadastrarFilmes() {

    var filme = document.getElementById("inp1").value
    filmes.push(filme)
document.getElementById('resultados').innerHTML =  `` 
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById('resultados').innerHTML += `${filmes[i]}<br> `
    }
    
}
