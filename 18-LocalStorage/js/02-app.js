//Obtener valores de local storage

const nombre = localStorage.getItem('nombre');
// console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log( JSON.parse(productoJSON)); //parseamos el string a JSON

const meses = localStorage.getItem('Meses');
console.log( JSON.parse(meses)); //parseamos el string a JSON