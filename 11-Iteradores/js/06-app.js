//Foreach

const pendientes=['Tarea','Comer','Dormir','Correr','Estudiar'];

pendientes.forEach((pendiente,indice)=> {
console.log(`${indice} - ${pendiente}`);
});
    

const carrito = [
    {nombre: 'Monitor 21 Pulgadas', precio: 3000},
    {nombre: 'Tv 22 Pulgadas', precio: 500},
    {nombre: 'Notebook i3', precio: 50000},
    {nombre: 'Celular iphone 10', precio: 500000, descuento:true},
    {nombre: 'Monitor 32 Pulgadas', precio: 5000},
]

carrito.forEach((producto,pos)=>{
    console.log(`${pos} - Nombre: ${producto.nombre} - Precio:${producto.precio}`);
})
