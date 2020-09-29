//Arreglo tradicional, de índices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

//Arreglo de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe dentro de un arreglo

//Forma manual
meses.forEach( mes =>{
    if(mes==='Enero'){
        console.log('Enero si existe');
    }
});
//Usando array method
const resultado =meses.includes('Enero');
console.log(resultado);

//------------- En un arreglo de objetos se utiliza .some -------------

const resultado2 = carrito.some( producto => producto.nombre==='Celular'); //el return queda implícito cuando es de una sola linea
    //return producto.nombre==='Celular';
console.log(resultado2);

//.some con un array tradicional, de índices 
const resultado3 = meses.some(mes => mes==='Mayo');