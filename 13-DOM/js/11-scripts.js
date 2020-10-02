const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcutarFooter);

function mostrarOcutarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        //btnFlotante.classList.remove('activo');
        this.classList.remove('activo'); //hago referencia a lo q llamó a ejecutar la función q es el btnFlotante
        this.textContent = 'Idioma y moneda';
    }
    
    else{
        footer.classList.add('activo');
        //btnFlotante.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    console.log(footer.classList);
}
