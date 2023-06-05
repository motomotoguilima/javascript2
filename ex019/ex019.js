function gerarImagens(){
var nb =  document.getElementById ("inp1").value 
document.getElementById("resultados").innerHTML = ``
    for (var contador = 0; contador < nb; contador++) {

            document.getElementById("resultados").innerHTML += `${contador}  <br>  <img class="img" src="download.png"> <br>`
}

}