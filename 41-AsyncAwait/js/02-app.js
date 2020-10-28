function descargarClientes(){
    return new Promise((resolve,reject)=>{
        const error = false; //con esto controlo si salta el try o catch

        setTimeout(() => {
            if(!error){
                resolve('El listado de clientes se descargó correctamente');
            }
            else{
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

//Async await

async function ejecutar(){ //func padre es la que tiene el async
try { 
    console.log(1+1);
    //la fn donde quiero esperar por una respuesta es donde va el await
    const respuesta = await descargarClientes(); //cuando llegá va a la función descargarClientes, y espera una respuesta
    console.log(2+2);  

    console.log(respuesta); //se ejecuta el resolve
} catch (error) { //si se detecta un error en el try se salta hacia aquí imrpimiendo la excepción, error
    console.log(error); //se ejecuta el reject
}

}
ejecutar();