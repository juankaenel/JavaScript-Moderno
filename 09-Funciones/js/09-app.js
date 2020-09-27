//Añadir funciones en un objeto
const reproductor = {
    reproducir : function (id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar : function (id){
        console.log(`Pausando la canción con el id ${id}`);
    },
    borrar : function(id){
        console.log(`Borrando la canción con el id ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(33);
reproductor.pausar(33);

/*reproductor.borrar = function(id){
    console.log(`Borrando la canción con el id ${id}`);
}*/

reproductor.borrar(22);

reproductor.crearPlaylist('Maluma dance');
reproductor.reproducirPlaylist('Los palemeras en vivo');

console.log(reproductor);