/* Exercicio 37

*Cria uma classe que simula um carrinho de compras de
um e-commerce;

*Propriedades itens, quantidade total, valor total;

*Crie os métodos para adicionar e remover itens;

 ESSE EXERCICIO NÃO CONSEGUI RESOLVER

*/

class Carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item){

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
               this.itens[itemCarrinho].qtd += item.qtd;
            }
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }
}

let carrinho = new Carrinho([
    {
        id:01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id:02,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho)

carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco: 20});