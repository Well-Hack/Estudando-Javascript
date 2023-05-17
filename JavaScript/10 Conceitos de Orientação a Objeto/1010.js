function cachorro(raca, patas, cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

cachorro.prototype.uivar = function(){
    console.log("Auuuuu");

}
cachorro.prototype.latir = function(){
    console.log("au au")
}

let husky = new cachorro("Husky", 4, "Preto");

husky.uivar();
husky.latir();
console.log(husky)