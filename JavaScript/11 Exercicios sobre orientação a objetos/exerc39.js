/* Exercicio 04

*Crie uma classe que simule um carro;

*Propriedades: marca, cor, gasolina restante;

*Crie um método de dirigir o carro, que vá diminuindo a gasolina
gradativamente

*E um de abastecer para aumentar a gasolina quando necessário;

ESSE NÃO CONSEGUI FAZER, RESPOSTA DO PROFESSOR

*/

class Carro{
    constructor(marca, cor, gasolres, consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasolres = gasolres;
        this.consumo = consumo
    }

    dirigir(km){

        let litrosConsumidos = km / this.consumo;

        this.gasolres -= litrosConsumidos;

    }
}

let carro = new Carro("Chevrolet", "Preto", 100, 14)

console.log(carro);

carro.dirigir(100);

console.log(carro);
