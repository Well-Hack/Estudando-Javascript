/*Exercicio 19

*Escreva uma função que retorne um numero aleatório;
*O número maximo retornado deve ser passado via parâmetro;
*Dica: Utilize math.random();
*/

function math(num){
    return Math.floor(Math.random() * num) + 1;
}

console.log(math(10));
console.log(math(100));
console.log(math(35));

