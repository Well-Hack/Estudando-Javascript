//mais sobre funções

function multiplicar_3_numeros(x,y,z){
    return x * y * z;
}

console.log(multiplicar_3_numeros(2,3,4));

const mult = multiplicar_3_numeros(5,4,8);

console.log("O valor de mult é " + mult);




function pode_dirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode Dirigir")
    }else{
        console.log("Não pode dirigir")
    }
}


// 0 é false e 1 é true

console.log(pode_dirigir(19, true));
console.log(pode_dirigir(25, true));
console.log(pode_dirigir(44,0));
console.log(pode_dirigir(19,1));
console.log(pode_dirigir(17,false));

