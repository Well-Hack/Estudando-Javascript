/*Exercicio 14
*Escreva um loop for ou while que exiba qual número é par e qual número é ímpar;
*O contador deve iniciar em 0 e ir até 50;
*/


let n = 0
while(n < 51){
    if(n % 2 == 0){
    console.log(`O número ${n} é par`)
    }else{
    console.log(`O  número ${n} é impar`)
    }
    n++
}