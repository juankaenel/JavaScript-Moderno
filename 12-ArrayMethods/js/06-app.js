//every retorna true cuando se cumplen todas las condiciones, caso contrario retorna false
//caso contrario some retorna true cuando se cumple alguno de los elementos con la condicion

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 }, //con find capturo toda esta linea, es decir al objeto
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

resultado = carrito.every(producto => producto.precio < 1000); //retorna true pq todos cumplen la condicion
//resultado = carrito.every(producto => producto.precio < 500); //retorna false debido a que no todos son menores a 500
console.log(resultado);

//si se cumple alguno
resultado2 = carrito.some(producto => producto.precio < 200); //retorna true pq se cumplio al menos 1
console.log(resultado2); 