//eventos con scroll

window.addEventListener('scroll',()=>{
    const premium = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect(); //me arroja las distancias que hay al elemento ubicación
    //console.log(ubicacion); 

    if(ubicacion.top < 784){ //si llego a la distancia menor de 784 por arriba me arroje visible
        console.log('El elemento está visible');
    }
    else{
        console.log('El elemento no está visible')
    }

})