const busqueda = document.querySelector('.busqueda');

//busqueda.addEventListener('keydown', ()=>{ //cuando presiono
//    console.log('apretando tecla...');
//});
//
//busqueda.addEventListener('keyup', ()=>{ //cuando suelto la tecla
//    console.log('soltando...');
//});
//
//busqueda.addEventListener('blur', ()=>{ //cuando entro al input y salgo(doy click afuera)
//    console.log('entrando y saliendo...');
//});
//
//busqueda.addEventListener('copy', ()=>{ //cuando copio o aprieto control c // paste cuando pega // cut cuando corta
//    console.log('copiando...');
//});

busqueda.addEventListener('input', (e)=>{ //es un todo en uno exceptuando el blur realiza todos los demás eventos
    //console.log(e.type); //indica el tipo de evento
    //console.log(e.target); // indica toda la info del input
    //console.log(e.target.value); //indica el valor del input , lo que estan escribiendo
    if(e.target.value===''){
        console.log('Usted no ingresó nada');
    }
});

