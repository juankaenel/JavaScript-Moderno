//Break y continue 

for (let i =1; i<=20;i++ ) {
    if(i === 5){
     break; //va hasta el 4. Si pongo continue saltea el 5 va hasta el 20
    }
    console.log(`Numero ${i}`);
}

const carrito = [
    {nombre: 'Monitor 21 Pulgadas', precio: 3000},
    {nombre: 'Tv 22 Pulgadas', precio: 500},
    {nombre: 'Notebook i3', precio: 50000},
    {nombre: 'Celular iphone 10', precio: 500000, descuento:true},
    {nombre: 'Monitor 32 Pulgadas', precio: 5000},
]

console.log(carrito);
for(let i=0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El artículo: ${carrito[i].nombre} - tiene descuento`);
    }
    
}