let pessoa1 = {
    nome: "Wellerson"
}

let pessoa2 = pessoa1; //esse "comando" torna os 2 iguais, o que ocasiona uma mudança nas duas variaves do objeto

console.log(pessoa1 == pessoa2)


pessoa2.nome = "Pedro"

console.log(pessoa2.nome)