const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);
    const entrega = pedido.itens.filter(item => item.entrega);

    if(valorProdutos > 500){
        return valorProdutos;
    }else {
        return valorProdutos + entrega[0].valor;
    }
}
// pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

console.log(calcularValorPedido(meuPedido))