//Arreglo tradicional, de índices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//Arreglo de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,indice)=>{  //en el foreach, si agregamos un segundo parametro ese sería el índice
    if(mes === 'Abril'){
        console.log(`Encontrado en el índice ${indice}`);
    }
});


//Encontrar el índice de abril con findIndex
const indice_meses = meses.findIndex(mes=> mes==='diciembre' ); //si no encuentra el valor retorna -1
console.log(`Encontrado en el índice ${indice_meses}`); 

//const indice_carrito = carrito.findIndex( producto => producto.nombre==='Televisión' );
//console.log(`Producto encontrado en el índice ${indice_carrito}`);

const indice_carrito = carrito.findIndex( producto => producto.precio===100 ); //solo me va a encontrar el primero que tenga 100
console.log(`Producto encontrado en el índice ${indice_carrito}`);

