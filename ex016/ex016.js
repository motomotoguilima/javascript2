function tabuada(){
    var nb =  document.getElementById ("inp1").value 

    for(var contador = 1; contador <= 10; contador++){
        var ns = nb*contador
        document.getElementById("resultados").innerHTML += ` ${nb} X ${contador} = ${ns} <br>`
    }
}
