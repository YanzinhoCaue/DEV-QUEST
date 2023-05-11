const calcularValorPedido = require('./index');

test('não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    const meuPedido = {
        itens: [
            {nome:'Poção de vida', valor: 100},
            {nome:'Espada de prata', valor: 200},
            {nome:'Entrega', valor: 40, entrega: true}
        ]
    }
    calcularValorPedido(meuPedido)
}) 