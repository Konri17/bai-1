// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

p = 0.5*(a+b+c);

let x = (a,b,c) => {return Math.sqrt(p*(p-a)*(p-b)*(p-c))};

console.log( "Pole trójkąta o bokach a=" + a + ", b=" + b + " oraz c=" + c + " wynosi " + x(a,b,c) +"." );