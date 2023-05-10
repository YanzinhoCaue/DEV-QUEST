// function (a, b, ...args){
//     ...
// }

function incentivarQuester(mensagem, ...nomesQuesters){
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}
incentivarQuester('Parabens por ter chego ao modulo avançado de JavaScript', 'Yan', 'Joao', 'Pedro')