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
        ubicacion: {
            lat: 33,
            long: 44,
        }
    }  
}

//Destructuring
const {fabricacion: {pais}} = producto; //extraigo pais
const {fabricacion: {ubicacion: {lat}}} = producto; //extraigo latitud

console.log(lat);
console.log(pais);

const {nombre, informacion, informacion:{medida}} = producto; //extraigo nombre, informacion, y medida
console.log(nombre, informacion, medida);
