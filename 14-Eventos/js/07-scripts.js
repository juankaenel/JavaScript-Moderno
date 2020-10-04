//Prevenir el event bubbling con delegación

const cardDiv = document.querySelector('.card'); //tenemos el elemento principal y sobre ese realizamos las delegaciones

cardDiv.addEventListener('click', e =>{
    console.log(e.target.classList);

    //delegations
    if(e.target.classList.contains('titulo')){
        console.log('Seleccionaste titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('Seleccionaste precio');
    }
    if(e.target.classList.contains('card')){
        console.log('Seleccionaste card');
    }

});