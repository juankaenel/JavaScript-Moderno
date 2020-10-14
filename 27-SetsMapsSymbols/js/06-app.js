/*---- Iteradores ----*/

function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            const fin = (i >= carrito.length);
            const actual = !fin ? carrito[i++] : undefined; //si no estoy en el final aumentame la pos de carrito, si llegué al final tira undefined
            return {
                fin,
                actual
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

//Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);
// console.log(recorrerCarrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());//Object { fin: false, actual: "Producto 3" }
console.log(recorrerCarrito.siguiente());//Object { fin: true, actual: undefined }

