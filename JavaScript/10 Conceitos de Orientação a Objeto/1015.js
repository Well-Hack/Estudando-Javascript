class Cachorro {
    constructor(raca,patas,cor){
        this.raca = raca;;
        this.cor = cor;
    };
    latir(){
        console.log("Au au")
    }


get getCor(){
    return this.cor;
}

set set_cor(cor){
    this.cor = cor;
}

}

let pastor = new Cachorro("Pastor alemão", "Sem cor")


console.log(pastor)
