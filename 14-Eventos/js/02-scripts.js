const nav = document.querySelector('.navegacion');

//registrar un evento

nav.addEventListener('mouseenter',()=>{
    console.log('Entrando al nav');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseout',()=>{
    console.log('Saliendo del nav');
    nav.style.backgroundColor = 'grey';
});

nav.addEventListener('mousedown',()=>{ //mousedown - similar al click

    nav.style.backgroundColor = 'red';
});

nav.addEventListener('click',()=>{

    nav.style.backgroundColor = 'blue';
});

nav.addEventListener('dblclick',()=>{

    nav.style.backgroundColor = 'yellow';
});

nav.addEventListener('mouseup',()=>{ //cuando soltas el click

    nav.style.backgroundColor = 'yellow';
});

