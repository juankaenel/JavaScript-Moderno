const meses = ['Enero','Febrero','Marzo','Abril','Mayo'];

meses.push('Abril'); //agrega al final

console.table(meses);

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

carrito.push(producto,producto2); //agrega al final
carrito.unshift(producto3); //agrega al inicio

console.table(carrito);