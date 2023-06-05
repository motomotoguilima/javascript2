function exibirFilmes(){
var filmes = ['harry potter', 
' barbie ', 
' homen-aranha 3 ', 
' venon', 
' mario bross', 
' mulher maravilha']
for (var i=0; i < filmes.length; i++){
        document.getElementById('resultados').innerHTML += ` posição no vetor  ${i} - filme ${filmes[i]} <br> `
    }
}
