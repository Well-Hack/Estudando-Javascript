let a = 1;
let b = 2;
let c = 3;

if(c > a){
    a = b;
}

for(let i = 5; i > 0; i --){
    b++;
    a = a + c + 1;
    c += 2;
}

if(b == a){
    a++;
} else {
    a = a + b + c;
}

a = a * b;