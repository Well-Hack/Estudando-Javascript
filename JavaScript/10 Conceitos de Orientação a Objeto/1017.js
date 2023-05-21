class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class gato extends Mamifero {
    constructor(patas, raca){
        super(patas,patas);
        this.raca = raca;
    }
    latir(){
        console.log("Miau")
    }
}


let malhado = new gato(4,"malhado")

console.log(malhado.patas)
console.log(malhado)

malhado.latir();

console.log(new gato instanceof Mamifero)