/*Exercicio 34

*Crie um array a partir de uma frase;

*Imprima cada palavra do array no console por meio de um for;

*/


let frase = "Quem tem luz própria jamais ficará na escuridão"

console.log(frase.split(" "))

for(let i = 0; i <= frase.length; i++){
    console.log(frase.split(" ")[i])
}