/*API para saber si tenemos o no conexión a internet*/

window.addEventListener('online',actualizarEstado);
window.addEventListener('offline',actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Estás en línea');
    }else{
        console.log('No tenés internet');
    }
}