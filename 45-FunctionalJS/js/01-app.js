/*  Conceptos claves de la programacion funcional en js o Functional JS

* -- Inmutabilidad : los datos no deben modificarse, utilizar const casi siempre. No puedes tener
let cliente = "juan";
cliente = "pedro";

* -- Seperar funciones de datos, los array methods son muy usados, de esa forma tendremos funciones que entregan un resultado nuevo pero nunca modifican los datos

*First class functions
Es poder crear funciones que parezcan cualquier variable como lo es function expression. Cuando podes asignar una funcion como un numero, booleano o string a otra variable


*/

const suma = function(a,b){
    return a+b;
}

//first class function
const resultado = suma; //cuando un lenguaje puede asignar una función, un string, un booleano o número quiere decir que ese lenguaje soporta first class function

console.log(resultado(1,2));