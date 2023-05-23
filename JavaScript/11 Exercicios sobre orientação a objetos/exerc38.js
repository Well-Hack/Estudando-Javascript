/* Exercicio 37

*Crie um objeto que simula um endereço de um cliente;

*Propriedades: Rua, Bairro, Cidade e Estado;

*No constructor o endereço já deve ser definicido por completo;

*Crie métodos para atualizar todas as propriedades;

*/

class Endereco{
    constructor(Rua, Bairro, Cidade, Estado){
        this.Rua = Rua;
        this.Bairro = Bairro;
        this.Cidade = Cidade;
        this.Estado = Estado;
    }
}

console.log(Endereco)