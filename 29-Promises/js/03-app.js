const aplicarDescuento = new Promise((resolve,reject)=>{
    const descuento = false;

    if(descuento){
        resolve('Promesa cumplida, descuento aplicado');
    }else{
        reject('Promesa no cumplida, descuento no aplicado');
    }
});

aplicarDescuento
.then(resultado=>{
    console.log(resultado); //accede al valor del resolve
}).catch(error=>{
    console.log(error); //accede al valor del reject
})


//Hay 3 tipos posibles
/*
1 - fulfilled - el promise se cumplió
2 - rejected - no se cumplió
3 - pending -No se cumplió y tampoco se rechazó, suele suceder cuando no hay codigo escrito dentro de la promesa y no se sabe si se cumplio o no
 */

