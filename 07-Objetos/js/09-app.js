"use strict"; //activa el modo estricto donde no se permiten malas practicas, como x= 20; tampoco se permite que se modifique un objeto q esté declarado como constante


const producto = {
    categoria: "informatic",
    nombre: "impresora",
    disponible: true,
}


Object.seal(producto); // a diferencia de freeze, en seal no se pueden agregar ni eliminar propiedades pero si modificar las existentes

producto.disponible = false;
// producto.imagen = "cpu.png"; 
//delete producto.categoria;

 console.log(Object.isSealed(producto)); //pregunta si el objeto está sellado
console.log(producto);
