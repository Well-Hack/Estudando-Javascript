/* Exercicio 22

*Escreva uma função que receba um número negativo e retorne um número
positivo;

Dica: Utilize a função Math.abs

*/

function dados(n1){
    if(n1 < 0){
        return Math.abs(n1)
    }else{
      return n1
    }
}

console.log(dados(-1234))
console.log(dados(51))
console.log(dados(0))