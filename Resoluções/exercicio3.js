//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function potencia(base, expoente){
    return Math.pow(base, expoente)
}

console.log(potencia(3, 3))
console.log(potencia(1, 2))
console.log(potencia(4, 4))
console.log(potencia(5, 7))
console.log(potencia(5))// NaN, como só passei um parâmetro o outro ficou undefined
