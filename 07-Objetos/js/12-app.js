//el Object constructor

//objeto literal
const producto = {
    categoria: "informatic",
    nombre: "impresora",
    disponible: true,
    precio:333,
}

//Object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Impresora laser', 333);
console.log(producto2);

