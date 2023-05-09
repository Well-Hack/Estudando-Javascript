/* Exercicio 29

*Adicione a propriedade janelas no ônibus, com o valor de 20;

*Delete a propriedade rodas;

imprima a propriedade janelas no console;

*/

let onibus = {
    rodas: 8,
    limit: 40,
    portas: 2,
}

console.log(onibus.rodas)
console.log(onibus.limit)
console.log(onibus.portas)


onibus.janelas = 20

console.log(onibus)

delete onibus.rodas

console.log(onibus)

console.log(onibus.janelas)