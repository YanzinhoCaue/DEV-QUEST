/*
    == ---- igual ----- a==b ---- verdadeiro se a for igual a b
    === ---- identico ---- a===b ---- verdadeiro se a for identico a b
    !== ---- não identico ----- a===b ---- verdadeiro se a for  não identico a b
    != ---- diferente ---- a!=b ---- verdadeiro se a for diferente a b
    < ---- menor que ---- a < b ---- verdadeiro se a for menor que a b
    <= ---- menor igual que ---- a <= b ---- verdadeiro se a for menor igual a b
    > ---- maior que ---- a > b ---- verdadeiro se a for maior que a b
    >= ---- maior igual que ---- a >= b ---- verdadeiro se a for maior igual a b
*/
// const a=1
// const b=0
// console.log(a>b)

// &&
// const a=2
// const b=2
// console.log(a===b && a<=b) // verdadeiro e verdadeiro = verdadeiro
// console.log(a === b && a<b) // verdadeiro e falso = falso
// console.log(a > b && a === b) // falso e verdadeiro = falso
// console.log(a > b && a < b) // falso e falso = falso

// OR 
// const a=2
// const b=2
// console.log(a === b || a <=b) // verdadeiro e verdadeiro = verdadeiro
// console.log(a == b || a < b) // verdadeiro e falso = verdadeiro
// console.log(a > b || a === b) // falso e verdadeiro = verdadeiro
// console.log(a > b || a < b) // falso e falso = falso

// NOT 
const a=2
const b=2
console.log(!(a === b)) //falso
console.log(!(a < b))//verdadeiro 