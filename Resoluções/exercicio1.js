/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function operacoes(a, b){
    console.log('--------------------')
    console.log(`${a} + ${b} = ${a+b}`)
    console.log(`${a} - ${b} = ${a-b}`)
    console.log(`${a} * ${b} = ${a*b}`)
    console.log(`${a} / ${b} = ${a/b}`)
}

operacoes(2, 2)
operacoes(4, 2)
operacoes(4, 8)
operacoes(10, 2)