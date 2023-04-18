/*Exercicio 15
*Verifique se o número é primo!
*Um número primo, é um número natural, maio que 1 e apenas divisivel por
si proprio e por 1;
*/


let num = 15;
let div = 0;

for(let i = 1; i <= num; i++){

    if(num % i == 0){
        div++;
    }
}


if(div == 2){
    console.log(`O número ${num} é primo`)
}else{
    console.log(`O numero ${num} não é primo`)
}