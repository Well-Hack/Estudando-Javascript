let obj = {
    rodas: 4,
    portas: 4,
    teto_solar:true,
    motor: "2.0"
}

const { rodas: v_rodas, portas: v_portas, teto_solar: v_teto_solar, motor: v_motor} = obj;

console.log(v_rodas)
console.log(v_portas)
console.log(v_teto_solar)
console.log(teto_solar) //Não funciona por se tratar de objeto

