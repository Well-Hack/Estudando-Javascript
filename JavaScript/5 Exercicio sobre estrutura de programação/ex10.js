/*Exercicio 10
*Armazene a velocidade de um carro em uma variável, com o número que deseja;
*Faça uma estrutura if/else que verifica se ele está acima da velocidade;
*80 é a velocidade máxima permitida;
*Se estiver acima ou abaixo exiba mensagens com o console.log
*/

let vel = 180

if(vel <= 120){
    console.log("Dentro da velocidade permitida")
}else{
    console.log(`Você está a ${vel}Km/h, está á ${vel - 120}Km/h acima do limite`)
}

