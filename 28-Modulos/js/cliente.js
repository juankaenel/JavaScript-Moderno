export const nombreCliente = 'Juan';
export const ahorro = 300;

export function mostrarInfo(nombre,ahorro){
    return `Nombre: ${nombre} - Ahorro:${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro>0){
        console.log('Tiene saldo');
    }
    else{
        console.log('No tiene saldo');
    }
}