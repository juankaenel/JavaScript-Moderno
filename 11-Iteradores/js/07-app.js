//for of itera sobre arrays

const carrito = [
    {nombre: 'Monitor 21 Pulgadas', precio: 3000},
    {nombre: 'Tv 22 Pulgadas', precio: 500},
    {nombre: 'Notebook i3', precio: 50000},
    {nombre: 'Celular iphone 10', precio: 500000, descuento:true},
    {nombre: 'Monitor 32 Pulgadas', precio: 5000},
]

//for(let producto of carrito){ //a cada iteración del carrito, es decir  cada objeto, le asigno la variable producto
//    console.log(producto);
//}

for(let [llave,valor] of Object.entries(automovil){
    console.log(llave);
    
})