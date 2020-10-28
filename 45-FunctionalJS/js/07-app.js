/* Funciones que retornan funciones  */

const obtenerCliente = () => () => console.log('juanito');

const fn = obtenerCliente(); //segunda funcion

fn(); //funcion -> () => console.log('juanito)