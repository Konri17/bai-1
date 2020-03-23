a = 10;
b = 9;
h = 8;

let x = ( a, b, h) => {return h*(a+b)*0.5};

console.log( "Pole trapezu o bokach a=" + a + ", b=" + b + " oraz wysokości h=" + h + " wynosi " + x(a,b,h) +"." );