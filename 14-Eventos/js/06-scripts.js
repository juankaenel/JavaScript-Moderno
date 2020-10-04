// Event bubbling -> evento que se propaga por ejemplo al presionar click sobre un elemento card, donde en el mismo tenemos un titulo y un parrafo
//si estoy a la escucha de los 3, es decir el card, el titulo y parrafo, en cualquier lado que presione sobre el card se van a activar los 3 eventos

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.card');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e =>{
    e.stopPropagation(); //detiene el event bubbling
    console.log('Click en card');
});
infoDiv.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Click en info');
});
titulo.addEventListener('click', e =>{
    e.stopPropagation();
    console.log('Click en título');
});