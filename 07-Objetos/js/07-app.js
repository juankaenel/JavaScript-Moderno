//el problema de los objetos -> por mas que esté declarado como constante podemos modificar el valor de sus propiedades
const producto = {
    categoria: "informatic",
    nombre: "impresora",
    disponible: true,
}  

producto.disponible = false;
producto.nombre = "cpu";

console.log(producto);



