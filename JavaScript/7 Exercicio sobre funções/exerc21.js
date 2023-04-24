/* Exercicio 21

*Escreva uma função que detecta o tipo de dado passado;

*Verifique se é um: number, boolean ou string;

*E retorne uma mensagem para cada tipo;

*Execute uma função para cada caso;

 */

function detec(n1){
    console.log(`Esse tipo de dado é ${typeof(n1)}`)
}

detec(5)
detec("Olá mundo")
detec(false)