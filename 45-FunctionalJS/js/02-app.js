const sumar = (a,b) => a + b;
const multiplicar = (a,b) => a * b;

const sumarMultiplicar = fn => fn(30,20);

console.log(sumarMultiplicar(sumar));
console.log(sumarMultiplicar(multiplicar));