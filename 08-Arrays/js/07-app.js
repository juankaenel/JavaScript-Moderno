const carrito = [];

const producto = {
    nombre: 'Mate',
    precio: 200
}

const producto2 = {
    nombre: 'Yerba',
    precio: 30
}

const producto3 = {
    nombre: 'control remoto',
    precio: 2000
}
//------ AGREGAR -------
carrito.push(producto,producto2); //agrega al final
carrito.unshift(producto3); //agrega al inicio

//------ ELIMINAR ------
//carrito.pop(); //elimina el elemento final
//carrito.shift(); //elimina el elemento inicial

//con splice podes tener el mismo comportamiento que pop y shift
//carrito.splice(0,2); //elimina desde la pos 0 hasta 2
//carrito.splice(0,1); //elimina desde la pos 0 hasta 1 -> 1 solo elemento


console.table(carrito);