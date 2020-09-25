//Uso de this
const nombre = "Hola";
const precio = 20;

const producto = {
    categoria: "informatic",
    nombre: "impresora",
    disponible: true,
    precio:333,
    mostrarInfo: function(){
        console.log(`El producto ${nombre} tiene un precio de ${precio}`) //accede a las variables nombre y precio de afuera del objeto
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`) //this hace referencia a las propiedades de este objeto
    }
}

producto.mostrarInfo();