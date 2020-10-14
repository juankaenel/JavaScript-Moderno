/*
Set -> El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo puede estar una vez;
éste es único en la colección Set.

métodos -> add,delete,has.
size -> conocer la extensión del set
*/

const carrito = new Set();

carrito.add('disco 1')
carrito.add('disco 2')
// carrito.add('disco 1') no me deja agregar debido a que ya existe el mismo
carrito.delete('disco 1');
console.log(carrito.has('disco 2')); //returno true si existe

// carrito.clear(); //vacia todos los elementos

carrito.forEach((producto,index) =>{
        console.log(producto); //llave o valor en un set es lo mismo debido a que solo existe el valor
        console.log(index);
    }
);

//Ejemplo de uso -> del siguiente arreglo eliminar los duplicados

const numeros = [1,2,3,4,5,6,6,6];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);