

/* 
Comentários em 
multiplas linha 
*/
// Comentário em uma única linha 

//O alert é utilizado para exibir uma mensagem popup
//alert("Olá mundo!!")
// no console conseguimos visualizar  informações
//sem exibir na página  
console.log(" OLá mundo!!! Utilizando Console!")

function botaoteste() {
    alert(" Você clicou no botao")
}

//tipo de exibição de mensagens no console
console.error(" esta e uma mensagem de erro")
console.warn("esta e uma mensagem de alerta")
console.info(" esta e uma mensagem de informação")



//declarando variaveis 
//string - conjunto de caracteres - declarar com "" ou ''
var nome = "Guilherme"
var sobrenome = "Lima"
//number - todo numero em JS e do tipo number- declarar sem ""
var idade = 16
//boolean - somente recebe true ou false 
var aprovado = true
console.log(typeof nome) //comando typeof para saber o tipo do dado


console.log(nome + ' ' + sobrenome)//concatenado strings com o + 
//se utilizaremos o + com string ele concatena se utilizar com number soma
var n1 = 10
var n2 = 25
console.log(n1 + n2)//ira somar as 2 variaveis number(35)
var n3 = "10"
var n4 = "25"
console.log(n3 + n4)//ira concatenar "juntar" as 2 variaveis ("1025")
n1 = n2 // uma variavel pode receber o valor de outra variavel
console.log("n1 = " + n1 + 'e o n2 = ' + n2)

var salario = 1290.35 // para atribuir um valor decimal utilizar . nao ,
salario = salario + 200//posso tambem somar a variavel com ela mesmo
console.log(salario)
salario += 200 //representação mais simplificadp da expressão acima
console.log(salario)
//antigamente para juntar texto o variaveis faziamos assim
console.log('ola, ' + nome + ' voce tem ' + idade + 'anos e recebe o R$ ' + salario)
//hoje e utilizamos o templateString forma mais simples
console.log(`ola,  ${nome} voce tem ${idade} anos e recebe R$ ${salario}`)


//função de botao para obter o nome
function botaonome() {
    //no prompt abre opção para digitir algo
    var nome2 = prompt('qual e seu nome?')
    //no confirm abre texto com opçao ok e cancelar 
    confirm(`olá ${nome2}, entendeu js?`)
}


function botaosoma() {
    //receber valor1 de um prompt
    var valor1 = prompt("informe valor: 1")
    console.log(typeof valor1)//vereficando que a var é string
    //recebendo valor2 de um prompt
    var valor2 = prompt("informe valor: 2")
    //variavel soma recebendo valor1 + valor2
    //convertendo a variavel valor 1 e 2 de string para number
    //posso utilizar perseInt () parsefLoat ou Number ()
    var soma = Number(valor1) + Number(valor2)
    //exibindo em um alert o valor de soma 
    alert(soma) //"1010"
    //exibir em um alert o valor de soma
    //alert (`a soma dos numeros é: $(soma)`)//"1010"
    document.getElementById("resultadoSoma").innerHTML +=
        `<br> a soma dos numeros ${valor1} e ${valor2} e = ${soma}`
}



function botaoCidade() {
    var nomeCidade = document.getElementById("cidade").value
    document.getElementById("resultadoCidade").innerHTML = nomeCidade
}
//operadores aritmeticos e ordem de precedencia
var opSoma = 5 + 2 //operador de soma +
console.log(opSoma) //7
var opSubtracao = 5 - 2 //operador de subtração -
console.log(opSubtracao) //3
var opMultiplicacao = 5 * 2 //operador de multiplicacao *
console.log(opMultiplicacao) //10
var opDivisao = 5 / 2 //operador de divisão /
console.log(opDivisao) //2.5

var opExponenciacao = 5 ** 2 //operador de exponenciação **
console.log(opExponenciacao)// 25
var opResto = 5 % 2 //operador de resto davisão %
console.log(opResto)// 1

//ordem de precedencia
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1)// 6.5
var ordemPrecedencia2 = (5 + 2) / 2
console.log(ordemPrecedencia2) //4
/* 1º ()
   2ª **
   3º * /
   4º %
   5º  + - 
   */

//constante - o valor não pode ser alterado depois de atribuido
const pi = 3.14
//pi = 3 - se o valor for alterado dará erro no javascript

//auto atribuição
var n = 3
n = n + 3 //a variavel recebe ela mesmo + 3
n += 3 //quer dizer o mesmo que a expressão acima

n++ // quando precisarmos somar +1 ao valor da variavel
n-- // quando prescisarmos subtrair -1 ao valor da variavel

//operadores relacionais
var n1 = 5
var n2 = 6
console.log(n1 > n2)// > maior que 
console.log(n1 < n2) // < menor que 
console.log(n1 >= n2)// >= maior ou igual que
console.log(n1 <= n2) // <= menor ou igual que 
console.log(n1 == n2) // == igual 
console.log(n1 != n2)// != nao igual - diferente





//estruturas condicionais 
if (n1 > n2) { //verificando a condição entre parenteses
    //se a condição for verdadeira "entre" nesse bloco
    console.log("o n1 é maior que o n2")
}
else {
    //se a condição NÃO for verdadeira "entre" nesse bloco ELSE
    console.log("O n1 não é maior que o n2")
}
//exemplo de condição
var minhaIdade = 15
if (minhaIdade >= 16) {
    console.log("voce pode votar")
}
else {
    console.log("voce nao pode votar")
}
//operadores Lógicos
// && representa o E
var login = "adm"
var senha = "123"
//para entrar na condição TRUE as 2 condições precisar ser verdadeira
if (login == "adm" && senha == "123") {
    //executa esse bloco quando as condições sao TRUE
} else {
    //executa esse bloco quando as condicões for FALSE
}

var media = 6
//operador OU -> || (pipe)
// para entrar na condição TRUE pelo menos 1 condição precisa ser verdade
if (media == 6 || media == 5) {
    // executa esse bloco quando 1 condição e TRUE pelo menos 
} else {
    //aqui entre todas as condições forem falsas
}
//estruturas condicionais encadeadas 
if (media >= 7) {
    console.log("aprovado")
} else if (media >= 5) { //podemos fazer um novo if junto com else
    console.log("recuperação")
} else if (media < 5) {
    console.log("reprovado")
}

//debugger
//podemos utilizar o debugger para analisar o código linha a linha

//exit
//quando queremos parar de executar uma função do js utilizamos o exist

//para sortearmos um valor aleatorio utilizamos a Math.random()
//o Math.random retorna um numero decimal e precisamos multiplicar
//pelo nr maximo que desejamos e somar 1 quando necessario]
//o parseInt utulizamos para obter apenas a parte inteira do numero
var nrSorteado = parseInt(Math.random() * 100) + 1
console.log(nrSorteado)




//switch case 
//e como se fosse vários if else de forma mais simples
var diaSemana = 3
switch (diaSemana) {
    case 1:
    console.log("hoje e: domingo")
    break //para o switch case e nao verificar as outras opções
    case 2:
    console.log("hoje e: segunda")
    break
    case 3:
    console.log("hoje e: terça")
    break
    case 4:
    console.log("hoje e: quarta")
    break
    case 5:
    console.log("hoje e: quinta")
    break
    case 6:
        console.log("hoje e: sexta")
        break
    case 7:
    console.log("hoje e: sabado")
    break
    default:
    console.log("dia invalido")
}
//laços de repetição while (que quer dizer enquanto)
//while (condição)
// enquanto a condição do parenteses for verdadeira
//continua repentindo o codigo do bloc
var nrVidas = 5
while (nrVidas > 0) {
    console.log (`voce ainda tem ${nrVidas} `)
    nrVidas -- 
}
//verificando se numero é par com while
var contador = 1 //iniciando o contador de vezes que irá executar
while (contador <= 6 ){ //enquanto a condição for verdadeira 
  if( contador % 2 == 0){//condição para o contador for par
    console.log(`${contador} é par`)
  } else{
    console.log (`${contador} é impar `)
  }
    contador++ //adicionamos +1 ao contador para não ficar em loop
}

var cont = 1
while (cont <=5){
    console.log (cont)
    cont++
}

for(var cont = 1; cont <= 5; cont++){
    console.log(cont)
}
//for - laço de repetição
//1º expressão var i = 1
//(aqui eu inicio o controle de vezes)
//2º expressão i <= 10
//(aqui nós verificamos a condição para se manter no loop)
//3º expressão i++
//(aqui acrescentamos na variavel +1 vez)
//exibindo
for (let i = 1; i <= 10; i++){
    console.log(i)
}

