//* Separar los datos de las funciones */

const productos = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

/* const resultado = productos.filter(producto=>{
    return producto.precio>300; 
});
console.log(resultado);
 */


 //Higher order function -> Tomar una o más funciones como entrada Devolver una función como salida 
const mayorCuatrocientos = producto =>{
    return producto.precio>400;
}

const resultado = productos.filter(mayorCuatrocientos);
console.log('arreglo nuevo',resultado);

//Separamos los datos de las funciones y no modificamos los datos sino que creamos un nuevo arreglo sin modificar el original
console.log('arreglo original',productos);