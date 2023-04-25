/*Exercicio 25

*Escreva uma função que recebe um número, e o decremente
de 1 em 1 com um loop;

*Além disso imprima somente os números pares no console;

*/


function decremente(num){
    while(num > 0){
        if(num % 2 == 0){
        console.log(`${num}`)
        }
        num --
    }
}

console.log(decremente(15));