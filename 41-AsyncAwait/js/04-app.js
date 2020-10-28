function descargarClientes(){ //promise 1
    return new Promise(resolve=>{
        console.log('Descargando clientes');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);
    })
}

function descargarPedidos(){ //promise 2
    return new Promise(resolve=>{
        console.log('Descargando pedidos');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);
    })
}

const app = async () => {
    try {
/*         const clientes = await descargarClientes();
        console.log(clientes);
        const pedidos = await descargarPedidos();
        console.log(pedidos);    con este código, para que se ejecuten los peidos anteriormente se tuvo que ejecutar y haber esperado
        por la finalizacion de descargarClientes. para hacer que se ejecten ambos al mismo tiempo ejecuto lo siguiente..*/

        const respuesta = await Promise.all([descargarClientes(),descargarPedidos()]); //ambas se ejecutan en paralelo
        console.log(respuesta[0]);
        console.log(respuesta[1]);


    } catch (error) {
        console.log(error);
    }
}
app();