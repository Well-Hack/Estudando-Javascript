function lembrar_soma(x){
    return function(y){
        return x + y;
    }
}

let soma1 = lembrar_soma(2);

console.log(soma1(5));

let soma2 = lembrar_soma(5);

console.log(soma2(7));