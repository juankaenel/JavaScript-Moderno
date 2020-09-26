//For each

const carrito = [
    {nombre: 'Monitor 21 Pulgadas', precio: 3000},
    {nombre: 'Tv 22 Pulgadas', precio: 500},
    {nombre: 'Notebook i3', precio: 50000},
    {nombre: 'Celular iphone 10', precio: 500000},
    {nombre: 'Monitor 32 Pulgadas', precio: 5000},
]


for(let i=0; i<carrito.length; i++){
    //console.log(`Nombre: ${carrito[i].nombre} -Precio: ${carrito[i].precio}`);
}


//con funcion normal
// carrito.forEach(producto => {
//     console.log(`Nombre: ${producto.nombre} -Precio: ${producto.precio}`);
// });

//con función flecha
carrito.forEach(function(prod){
    console.log(`Nombre: ${prod.nombre} -Precio: ${prod.precio}`);
});