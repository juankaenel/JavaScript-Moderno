//Implementando arrow functions a el reproductor

const reproductor = {
    cancion:'',
    reproducir :  (id) => console.log(`Reproduciendo canción con el id ${id}`),
    pausar : (id) => console.log(`Pausando la canción con el id ${id}`),
    borrar : (id) => console.log(`Borrando la canción con el id ${id}`),
    crearPlaylist: (nombre) => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: (nombre) => console.log(`Reproduciendo la playlist ${nombre}`),
    //setter -> definir una nueva canción
    set nuevaCancion (cancion){
        this.cancion=  cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    //getter -> obtener canción
    get ObtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Stallin Guess';
reproductor.ObtenerCancion;


/*
reproductor.reproducir(33);
reproductor.pausar(33);

reproductor.borrar(22);

reproductor.crearPlaylist('Maluma dance');
reproductor.reproducirPlaylist('Los palemeras en vivo');

console.log(reproductor);*/