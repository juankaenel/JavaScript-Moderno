const carrito = [
    {nombre: 'Monitor 21 Pulgadas', precio: 3000},
    {nombre: 'Tv 22 Pulgadas', precio: 500},
    {nombre: 'Notebook i3', precio: 50000},
    {nombre: 'Celular iphone 10', precio: 500000},
    {nombre: 'Monitor 32 Pulgadas', precio: 5000},
]


const nuevoArreglo1 = carrito.map(producto => `Nombre: ${producto.nombre} -Precio: ${producto.precio}` );

console.log(nuevoArreglo1); //solo con map podes guardar la iteración

carrito.forEach(producto => console.log(`Nombre: ${producto.nombre} -Precio: ${producto.precio}` ));

