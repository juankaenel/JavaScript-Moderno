//spread operator ...
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]
//Spread operator con arreglo de indices
const meses2= [...meses,'Agosto']; //creamos un nuevo array en base al array meses y le añadimos agosto
console.log(meses2);

//Spread operator con arreglo de objetos
const producto = {nombre: 'Disco duro',precio:3000};

const carrito2 = [...carrito,producto];

console.log(carrito2);