/*API Pantalla completa con JS*/

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', abrirPantallaCompleta);
cerrarBtn.addEventListener('click', cerrarPantallaCompleta);

function abrirPantallaCompleta(){
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta(){
    document.exitFullscreen();
}