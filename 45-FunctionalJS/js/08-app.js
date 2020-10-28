/* Closures -> me permiten hacer disponible un valor interno desde el exterior

*/

const obtenerCliente = () => {
    const nombre = 'Juan'; //este valor se hará disponible desde afuera

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;   
}

const cliente = obtenerCliente();

cliente(); //llamo a las variables que están dentro de otro scope desde afuera
