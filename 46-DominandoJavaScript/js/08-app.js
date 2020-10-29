//Event loop o loop de eventos

console.log('primero');

setTimeout(() => {
    console.log('segundo');
}, 0);

console.log('tercero');

setTimeout(() => {
    console.log('cuarto');
}, 0);

new Promise(function(resolve){
    resolve('desconocido...');
}).then(console.log);

console.log('utlimo');

function fn(){
    console.log('holis');
}
fn();
//orden primero,tercero,ultimo,holis, desconocido,segundo,cuarto
//se ejecuta segun su orden de prioridad, primero los clog, dspues la funcion, la promesa y los settimeout




