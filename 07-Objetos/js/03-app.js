const product = {
    category: "informatic",
    name: "impresora",
    price: 3333,
}

//Agregar propiedades
product.imagen = "imagen.jpg"; 

//Eliminar
delete product.category; //elimino la prop category

console.log(product);