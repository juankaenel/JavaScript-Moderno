export const nombreCliente = 'Juan';
export const ahorro = 300;

export function mostrarInfo(nombre, ahorro) {
    return `Nombre: ${nombre} - Ahorro:${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;

    }
    mostrarInformacion(){
        return `Nombre: ${this.nombre} - Ahorro:${this.ahorro}`;
    }
}
/*Solo puede haber un export default por archivo. Al haber un solo export default, puede tomar el alias desde el app.js que se quiera*/
export default function nuevaFuncion(){
    console.log('Este es el export default');
}