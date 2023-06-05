calcularDobro(3) //douglar

function calcularDobro(nr){ //ricardo
    var dobro = nr * 2
    console.log (dobro)
}



//chamando a função e passando o nº com paramentro que deseja ver a tabuada
ricardoCalcularTabuada (3) //douglas
ricardoCalcularTabuada (200) //lima
ricardoCalcularTabuada (9) //maria f

//função com entrada de parametro e sem retorno (sem saida de dados)
//criandoa função para gerar no console a tabuada do nr desejado
function ricardoCalcularTabuada(nr){
    for(var i = 1; i <= 20; i++){
        console.log(`${nr} x ${i} = ${nr*i}`)
    }
}



//chamando função para calcular o dobroe receber o resultado na variavel
var resultado
resultado = calcularDobro(6233)//douglas 
console.log (resultado)
//declarando a função recebendo o parametro e retornando um valor
function calcularDobro(nr){ //ricardo
        var dobro = nr * 2
        return dobro// com o comando return "devolve" o valor calculado para a chamada
    }


    function calcularMedia(nota1,nota2){
        var soma = nota1 + nota2
        var media= soma / 2
        return media
    }

    var mediaAluno1 = calcularMedia(9, 7)
    console.log (`media do aluno 1 é 5 ${mediaAluno1}`)
    var mediaAluno2 = calcularMedia(5,3)
    console.log (`media do aluno 2 é 5 ${mediaAluno2}`)


var login = 'admin'
var senha = '123'
var possoAcessar = validarLogin(login, senha)
if(possoAcessar == true){
    console.log ('voce pode acesssar o sistema')
} else {
    console.log ('voce nao tem acesso')
}



function validarLogin(login, senha) {
    if (login == '' || senha == '') {
        return false
    }
    if (login == 'admin' && senha == '123') {
        return true
    } else {
        return false
    }
}

