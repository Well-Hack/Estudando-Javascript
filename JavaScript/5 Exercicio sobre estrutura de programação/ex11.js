/*Exercicio 11
*Faça uma estrutura if/else para verificar se um usuário pode dirigir;
*Armazene em variáveis algumas informações sobre o usuário:
idade - se tem CNH
*Se a idade for maior que 18 e não possuir CNH, exiba uma mensagem;
Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
*Se não tiver 18 nem CNH, exiba outra mensage;
*/

let idade = 19;
let cnh = true;

if(idade >= 18 && cnh == false){
    console.log("Você já é de maior, já pode tirar a CNH")
} else if(idade >= 18 && cnh == true){
    console.log("Você está apto para dirigir")
}else{
    console.log("Você ainda não tem idade para dirigir")
}