/* Exercicio 35

*Crie um objeto calculadora;

*Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;

*Os metodos só devem aceitar dois parâmetros;

*Utilize cada um dos métodos e imprima os valores no console;

*/


const calculadora = {
    soma: function(a,b){
        return a + b
    },
    sub: function(a,b){
        return a - b
    },
    mult: function(a,b){
        return a * b
    },
    div: function(a,b){
        return a / b
    }
}

console.log(calculadora.soma(3,4))
console.log(calculadora.sub(3,4))
console.log(calculadora.mult(3,4))
console.log(calculadora.div(3,4))