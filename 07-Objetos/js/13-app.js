const producto = {
    categoria: "informatic",
    nombre: "impresora",
    disponible: true,
    precio:333,
}

console.log(Object.keys(producto)); //retorna la parte izquierda del objeto
console.log(Object.values(producto)); //retorna la parte derecha, los valores del objeto
console.log(Object.entries(producto)); //retorna un array de cada clave valor

