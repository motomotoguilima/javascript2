var nrSorteado = parseInt (Math.random() * 100)
var nrTentativas= 0 

function botaochutarnr(){
    
    var chutar = prompt ("chutar")
    nrTentativas++ 
    if (chutar == nrSorteado){
        document.getElementById("resultados").innerHTML += `Parabens voce acertou no <strong>${chutar}</strong> em ${nrTentativas} tentativas <br> `  
    } 
    else if(chutar < nrSorteado){
        document.getElementById("resultados").innerHTML += `Você chutou um <strong>${chutar}</strong> pensei em um numero maior <br> ` 
        if(nrTentativas >= 5){
            alert("GAMER OVER, nº de tentativas excedidas")
        }
    }
    else if(chutar > nrSorteado){
        document.getElementById("resultados").innerHTML += `Você chutou um <strong>${chutar}</strong> pensei em um numero menor <br> `
        if(nrTentativas >= 5){
            alert("GAMER OVER, nº de tentativas excedidas")
        } 
    }

    
   
}
function botaonovojogo(){
    document.getElementById("resultados").innerHTML = ""
    nrSorteado = parseInt (Math.random() * 100)
    nrTentativas = 0
}