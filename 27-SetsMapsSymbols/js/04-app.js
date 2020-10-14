/*Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves)
de las propiedades de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente
como descripción del símbolo.
Ningun symbol es igual*/
const sym = Symbol('1');
const sym2 = Symbol('1');

//console.log( Symbol() === Symbol()); -> false, ningun symbol es igual

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//Agregar nombre y apellido como llaves del objjeto

persona[nombre] = 'Juan';
persona[apellido] = 'Kovid'; //Se agregan al objeto como propiedad de typo symbol
persona.topoCliente = 'Advanced';
persona.saldo = 666;
console.log(persona);
console.log(persona[nombre]); //Juan

/*------------------LAS PROPIEDADES QUE UTILIZAN UN SYMBOL NO SON ITERABLES------------*/

//Definir una descripción del symbol
const nombreCliente =Symbol('Nombre del cliente'); //nombreCliente es un symbol que tiene una descripción
const cliente = {};

cliente[nombreCliente] = 'Pedro';

// console.log(cliente);
console.log(cliente[nombreCliente]); //Pedro
console.log(nombreCliente); //Imprime la descripcion