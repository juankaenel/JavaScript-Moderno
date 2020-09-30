// Filter va a crear un nuevo arreglo basado en el parámetro que es evaluado

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

//resultado = carrito.filter(producto=> producto.precio>400); //todos los productos > 400
resultado = carrito.filter(producto=> producto.precio<600); //todos los productos < 600
console.log(resultado);

//itero sobre el array nuevo
for(let prod of resultado){ //a cada iteración del carrito, es decir  cada objeto, le asigno la variable prod
        console.log(prod.nombre);
}

//resultado = carrito.filter(producto=> producto.nombre !== 'Audifonos'); //traeme todos menos audifonos
resultado = carrito.filter(producto=> producto.nombre === 'Audifonos'); //traeme solo los audifonos
console.log(resultado);