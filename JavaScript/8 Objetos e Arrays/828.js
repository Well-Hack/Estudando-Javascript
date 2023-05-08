let pessoa = {
    "Nome": "Matheus",
    "Idade": 28,
    "Profissão":"Programador",
    "Hobbies":["Video game", "leitura", "Correr"]
}

let pessoatxt = JSON.stringify(pessoa);

console.log(pessoatxt)


let pessoasJSON = JSON.parse(pessoatxt)

console.log(pessoasJSON)

console.log(pessoasJSON.Hobbies[0])