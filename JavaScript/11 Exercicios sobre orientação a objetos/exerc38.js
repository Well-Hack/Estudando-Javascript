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

    set novaRua(novaRua){
        this.Rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.Bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.Cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.Estado = novoEstado;
    }
}

let endereco = new Endereco("Rua Birinepe", "Jd. Cumbica", "Guarulhos", "São Paulo");


console.log(endereco)

endereco.novaRua = "Rua Felisburgo"
endereco.novoBairro = "Parque Alvorada"
endereco.novaCidade = "Guarulhos"
endereco.novoEstado = "São Paulo"

console.log(endereco)