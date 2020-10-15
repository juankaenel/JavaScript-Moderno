const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click',()=>{
    Notification //Habilitamos notification API
        .requestPermission() //preguntamos por un permiso para recibir notificaciones
        .then(resultado=>{
            console.log('El resultado es: ',resultado); //granted es cuando el usuario da ok, y default cuando da cancelar
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click',()=>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificación',{
            icon: 'img/devkoders.jpg',
            body:'Devkoders, Soluciones tecnológicas'
        });
        notificacion.onclick = function (){
            window.open('https://www.devkoders.com');
        }
    }
})
