//find -> crea un nuevo arreglo basado en la condición que revisamos

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 }, //con find capturo toda esta linea, es decir al objeto
    { nombre: 'Teclado', precio: 100 },
    { nombre: 'Celular', precio: 700 },
]

//con un foreach
let resultado = '';
carrito.forEach((producto,indice)=>{
    if(producto.nombre==='Tablet'){
        resultado = carrito[indice];
    }
});
console.log(resultado);

//con un .find -> me va a tomar además del indice todo el contenido(el objeto), a diferencia de findIndex que toma solo el indice
//find solo asigna el resultado al primer elemento que encuentra, es decir si hay dos Celulares solo retornará el primero
busqueda = carrito.find(producto=>producto.nombre==='Celular');
console.log(busqueda);