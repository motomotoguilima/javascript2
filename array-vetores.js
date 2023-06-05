//declarando um array vazio
var meuVetor = []

//criando vetores com dados no plural 
var numeros = [4, 1, 18, 2, 7]
var nomes = ['silva' , 'marcos', 'sandra'] //String - aspas simples por que e nome
var novoVetor = [20, 'SESI', true] // ou false,boolean

//acessando os dados de um vetor
console.log( nomes[1] )
console.log(novoVetor [1])

//verificando o tamanho de um vetor usando .lenght
console.log(numeros.length)-5
console.log(nomes.length)-3
console.log(novoVetor.length)-3

//indice         0         1        2         3        4      mais simples
var frutas = ['maça' , 'laranja', 'pera', 'morango', 'uva']
for (var i=0; i < frutas.length; i++){
    //coloco o i no indice de frutas para pegar o valor de cada indice de vetor
console.log( frutas [i])
}
//uma forma de indice mais dificil 
console.log (frutas [0])
console.log (frutas [1])
console.log (frutas [2])
console.log (frutas [3])
console.log (frutas [4])


//adicionando novo valor no final do vetor
frutas.push ('abacaxi')
console.log( frutas.length)
console.log ( frutas )

var novaListaFrutas = []  //  []
novaListaFrutas.push ('limão')
console.log(novaListaFrutas) //['limão']
novaListaFrutas.push('melancia')
console.log (novaListaFrutas) //['limão', 'melância']


//mudando as frutas 
novaListaFrutas[0] = 'melão'
console.log (novaListaFrutas) // ['melão', 'melância']

novaListaFrutas[1] = 'banana'
console.log (novaListaFrutas) // ['melão', 'banana']


novaListaFrutas.push('melancia')
console.log (novaListaFrutas) //['limão', 'banana', 'melância']
novaListaFrutas[3] = 'abacate'
console.log(novaListaFrutas) // ['limão', 'banana', 'melancia', 'abacate']


for(var i=0; i < frutas.length; i++ ){
    console.log( frutas[i] )

}
//for in -> não precisa inicializar uma variavel de contador de loop
for(var indice in novaListaFrutas){
    console.log (indice + ' - ' + novaListaFrutas[indice])
}
//metodo forEach de um vetor percorre e retorna todos os elementos do vetor
novaListaFrutas.forEach(fruta => {
    console.log(fruta) 
       })


//o metodo forEach - significa para cada intem do vetor
//dentro do parenteses colocamos a variavel que ira
//receber o conteudo de cada linha do vetor
//e com o => {} informamos o bloco que ira executar para cada linha
 frutas.forEach( item => {
console.log('intem pelo forEach', item)
 } )
 frutas.forEach( (intem, pos) => {
    console.log('intem pelo forEach com posição', pos ,item)
     } )