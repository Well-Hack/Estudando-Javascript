let carro = {
    portas: 2,
    portamalas: "200l",
    motor: "2.0",
    portas: 4
}

let add = {
    tetosolar: true,
    cambio: "Automatico",
    arcondicionado: true,
}

console.log(carro, add)


Object.assign(add, carro)

console.log(add)