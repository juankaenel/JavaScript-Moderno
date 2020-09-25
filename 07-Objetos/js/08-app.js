"use strict"; //activa el modo estricto donde no se permiten malas practicas, como x= 20; tampoco se permite que se modifique un objeto q esté declarado como constante


const producto = {
    categoria: "informatic",
    nombre: "impresora",
    disponible: true,
}

Object.freeze(producto); //congelo el objeto producto para que no pueda ser modificado

//producto.disponible = false;
//producto.imagen = "cpu.png";
//delete producto.categoria;

console.log(Object.isFrozen(producto)); //pregunta si el objeto está congelado
console.log(producto);


