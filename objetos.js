var listaCarros= []
//todo objeto declaramos com {}
//declarando um objeto e informando os atributos
var carro = {
   ano: '2020',
   modelo: 'gol',
   marca:  'VW',
}

//para exibir atributo do objeto faço da seguite forma objeto.atributo
console.log (carro.ano + ' - ' + carro.modelo)

//outro jeito de fazer :
console.log (`${carro.ano} - ${carro.modelo}`)


//adicionando o objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log(listaCarros.length) // 1 - so existe 1 item

//novo objeto - novo carro
 carro = {
    ano: '2022',
   modelo: 'onix',
   marca: 'GM'
 }

 //adicionando o objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log(listaCarros.length) 

for (var andar in listaCarros){
    console.log( listaCarros[andar].modelo)
}
