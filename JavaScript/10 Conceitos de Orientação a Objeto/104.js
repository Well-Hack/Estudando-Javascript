const gato = {
    raca: "SRD",
    miar: function(){
        console.log("Miaau")
    },
    raiva: function(){
        console.log("Miaaaaaaaaaaaaaaaaau")
    },
    set_raca: function(raca){
        this.raca = raca;   
    },
    get_raca: function(){
        return "A raça é: " + this.raca;
    }
}


console.log(gato.raca)
gato.set_raca("Garfield")
console.log(gato.raca)
console.log(gato.get_raca())
