/* Coerción -> es la conversión automática o implicita de un valor*/
const num1 = 20;
//coersión implicita
const num2 = "20"; //js se forza a modificar a numero el string
console.log(num1+num2); 


//coersión explicita
console.log(Number(num2));
console.log((num2).toString());

const pedidos = [1,2,3,4];

pedidos.toString();
JSON.stringify(pedidos);