//se ejecutan cuando una condición se cumpla o se dejan de cumplir
//For loop -> se ejecutan hasta que se deja 


/* for (let i =1; i<=20;i++ ) {
    if(i % 2 === 0){
     console.log(`El número ${i} es Par`);
    }
    else{
        console.log(`El número ${i} es Impar`);
    }
} */

const carrito = [
    {nombre: 'Monitor 21 Pulgadas', precio: 3000},
    {nombre: 'Tv 22 Pulgadas', precio: 500},
    {nombre: 'Notebook i3', precio: 50000},
    {nombre: 'Celular iphone 10', precio: 500000},
    {nombre: 'Monitor 32 Pulgadas', precio: 5000},
]
console.log(carrito);
for(let i=0; i < carrito.length; i++){
    console.log(`Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}