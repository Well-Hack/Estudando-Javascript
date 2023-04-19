//FOrmas de definir funções


function imprimirNoConsole(){
    console.log("Hello World!");
}

imprimirNoConsole();

function imprimir_um_numero(num){
    console.log("O numero é: " + num)
};

imprimir_um_numero(2);
imprimir_um_numero(7);
imprimir_um_numero(5);

const numero_aleatorio = function() {
    console.log(Math.random());
}

numero_aleatorio();
numero_aleatorio();