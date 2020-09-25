const producto = {
    categoria: "informatic",
    nombre: "impresora",
    precio: 3333,
    informacion: {
        peso: "1kg",
        medida: "2m",
    },
    fabricacion:{
        pais: "Argentina",
    }  
}

console.log(producto.informacion.medida);
console.log(producto.informacion.peso);
console.log(producto.fabricacion.pais);