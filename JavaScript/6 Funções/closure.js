function lembrar_soma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrar_soma(2);

console.log(soma1(5));

let soma2 = lembrar_soma(5);

console.log(soma2(7));

//---------------------------------

function contador(i){
    let cont = i;
    let somar_contador = function(){
        console.log(cont);
        cont++;
    }
    return somar_contador;
}

let meu_contador = contador(5);

meu_contador();
meu_contador();
meu_contador();
meu_contador();
meu_contador();
meu_contador();