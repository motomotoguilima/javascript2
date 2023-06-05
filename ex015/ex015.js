function tabuada(){

  var nb =  document.getElementById ("inp1").value 
  
    var contador = 1
    while (contador <= 10 ) {
        var ns = nb*contador
        document.getElementById("resultados").innerHTML += ` ${nb} X ${contador} = ${ns} <br>`
        contador++ 
    }
}