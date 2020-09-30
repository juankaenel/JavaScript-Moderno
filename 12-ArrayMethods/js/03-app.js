//.reduce -> función reductora, que toma una gran cantidad de datos y los une y te entrega un resultado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

//con un foreach
let total= 0;
carrito.forEach(producto=> total += producto.precio);

console.log('Total: '+total);

//con un reduce
                            //Valor previo, valor actual         
let resultado = carrito.reduce((total, producto)=> total + producto.precio, 0); //no hace falta agregar el += debido a que acumula solo el valor previo. el 0 es el que inicializa a total
console.log(resultado);