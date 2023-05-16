const pessoa = {
    maos: 2,
}

//console.log(Object.getPrototypeOf(pessoa))
//console.log(Object.getPrototypeOf(pessoa) ===  Object.prototype)


//console.log(pessoa.hasOwnProperty("maos"));

const pessoa_nova = Object.create(pessoa);

console.log(pessoa_nova.maos);

console.log(pessoa_nova.hasOwnProperty("maos"))

console.log(Object.getPrototypeOf(pessoa_nova) === pessoa)