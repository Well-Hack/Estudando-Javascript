let cachorro = {
    patas: 4,
    raca: "SRD",
    latir: function(){
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro)

labrador.latir();

labrador.raca = "labrador"

console.log(labrador.raca);
console.log(cachorro.raca)