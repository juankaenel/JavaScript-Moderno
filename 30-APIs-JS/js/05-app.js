/*Detectar cuando estamos en la página actual*/

document.addEventListener('visibilitychange',()=>{
    //console.log(document.visibilityState); //cuando cambie de pestaña pasa a hidden, si me encuentro en la misma pasa a visible
    if (document.visibilityState === 'visible'){
        console.log('Reproducir el video');
    }
    else{
        console.log('Pausar el video');
    }
})
