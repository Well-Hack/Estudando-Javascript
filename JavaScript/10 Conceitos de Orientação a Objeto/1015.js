class Cachorro {
    constructor(raca,patas,cor){
        this.raca = raca;;
        this.cor = cor;
    };
    latir(){
        console.log("Au au")
    }


get get_Cor(){
    return this.cor;
}

set set_cor(cor){
    this.cor = cor;
}

}

let pastor = new Cachorro("Pastor alemão", "Sem cor")


console.log(pastor)

pastor.set_cor = "Preto";

console.log(pastor.get_Cor);
