/*Exercicio 20

*Escreva uma função que receve a idade de uma pessoa;
*Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima
uma mensagem informando isso;
*Se ela tem menos, ela não pode, imprima outra mensagem com esse aviso;
*Execute a função nos dois casos
*/


function permissao(idade){
    
    if (idade >= 18){
        return(`Você tem ${idade} poderá ingressar na auto-escola`)
    }else{
        return(`Você tem ${idade} ainda não poderá ingressar em uma auto-escola`)
    }
}

console.log(permissao(21))
console.log(permissao(15))