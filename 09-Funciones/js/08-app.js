let total= 0;

function agregarCarrito(precio){
    return total+=precio;
}

function calcularImpuesto(total){
    return total*1.23;
}

total = agregarCarrito(100);
total = agregarCarrito(200);
total = agregarCarrito(400);

const totalPagar = calcularImpuesto(total);

console.log(`El total es ${total}`);
console.log(`El total a pagar es ${totalPagar}`);