'use strict'
// console.log(this)
// console.log(window)

// this.name = 'Yan'
// function saudar(){
//     console.log('this no contexto da função', this)
//     console.log('Olá, ' + this.name)
// }
// saudar()

// let usuario = {
//     nome: 'Yan',
//     saudar: function(){
//         console.log('this no contexto da função', this)

//         console.log('this.name no contexto do metodo', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brocoles',
    temperatura: 0,
}
comida.cozinhar = function(temperaturaDeCosimento){
    console.log('this no contexto do objeto', this)
    this.temperatura = temperaturaDeCosimento;
}

console.log(comida)
comida.cozinhar(100)
console.log(comida)