let n1 = 1;
let n2 = 2;
let n3 = 3;
let n4 = 4;

function imprimir_numero(...args){
    for(let i = 0; i , args.length; i++){
        console.log(args[i]);
    }
}

imprimir_numero(n1,n2,n3);
console.log("Puasa")
imprimir_numero(n3,n4);
console.log("Pausa")
imprimir_numero(2,4,7,8,9,3,7,6,4,9)
