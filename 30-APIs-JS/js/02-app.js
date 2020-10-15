/*API Intersection Observer, me permite observar elementos del DOM y notificarme cuando se hacen visibles por ejemplo*/
document.addEventListener('DOMContentLoaded',()=>{
    //Creo el observador
    const observer = new IntersectionObserver(entries => {
        console.log(entries);
        if(entries[0].isIntersecting){
            console.log('Ya está visible');
        }
    });
    //Lo pongo a la escucha la clase premium de mi DOM
    observer.observe(document.querySelector('.premium'));

})