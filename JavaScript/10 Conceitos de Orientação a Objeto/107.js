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


let pastor_alemao = Object.create(cachorro);
pastor_alemao.raca = "Pastor alemão";

console.log(pastor_alemao.raca)

