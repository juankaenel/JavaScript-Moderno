//import alias , {nombreCliente, ahorro, mostrarInfo, tieneSaldo,Cliente} from './cliente.js';
import nuevaFuncion , {nombreCliente, ahorro, mostrarInfo, tieneSaldo,Cliente} from './cliente.js';
import {Empresa} from "./empresa.js";
//console.log(nombreCliente);
//console.log(ahorro);

//alias(); //este es el export default, nuevaFuncion() -> en este caso al ser unico puede tomar cualquier alias desde donde se lo importa y hará referencia a esa funcion
nuevaFuncion();
console.log(mostrarInfo(nombreCliente,ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente,ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion()); //accediendo desde el metodo


const empresa = new Empresa(nombreCliente,ahorro,'ventas');
console.log(empresa);
console.log(empresa.mostrarInformacion());