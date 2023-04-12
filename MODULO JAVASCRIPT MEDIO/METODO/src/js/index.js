let usuario = {
    nome: 'Yan',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }
}

usuario.excluir()