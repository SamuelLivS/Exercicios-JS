/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


function tipoTriangulo(a, b, c){
    if(a === b && b === c){
        return 'Triângulo equilátero'
    }else if(a === b && a != c || a === c && a != b || b === c && b != a){
        return 'Triângulo Isósceles'
    }else if(a != b && a != c && b != c){
        return 'Triângulo Escaleno'
    }
}

console.log(tipoTriangulo(12, 12, 12))
console.log('-----------------------')
console.log(tipoTriangulo(12, 12, 23))
console.log(tipoTriangulo(12, 2, 12))
console.log(tipoTriangulo(21, 12, 12))
console.log('-----------------------')
console.log(tipoTriangulo(21, 10, 12))
console.log(tipoTriangulo(21, 56, 1))
console.log(tipoTriangulo(21, 12, 8))
console.log('-----------------------')