/*Exercicio 23

*Escreva uma função que rcebe uma string;

*Se o texto conter mais de 10 caracteres imprima "Texto muito longo";

8Se conter menos, imprima "Texto dentro do limite";

*/


function string(st){
    if(st.length > 10){
        console.log("Texto muito longo")
    }else{
        return console.log(st);
    }
}

string("Olá")