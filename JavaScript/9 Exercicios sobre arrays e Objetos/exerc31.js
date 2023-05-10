/* Exercicio 31

* Crie dois arrays, um com mais de 5 elementos e outro com menos,

* Faça uma função que verifica o número de elementos;

* Se possuir menos que 5, imprima "poucos elementos" no console;

* Se tiver mais, imprima "Muitos elementos"

*/ 


let arr1 = [1,2,3,4,5,6]

let arr2 = [1,2,3,4]

function verificar_elementos(arr){
    if(arr.length >= 5){
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos")
    }
}


verificar_elementos(arr1);
verificar_elementos(arr2);