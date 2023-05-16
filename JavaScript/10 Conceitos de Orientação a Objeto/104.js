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
        
    }
}


console.log(gato.raca)
gato.set_raca("Garfield")
console.log(gato.raca)
