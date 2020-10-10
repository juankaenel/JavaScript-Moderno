const diaHoy = new Date();

moment.locale(); //con esto paso a hora local

console.log(moment().format('DD MMMM YYYY'));
console.log(moment().format('DD MMMM YYYY h:mm:ss'));
console.log(moment().format('DD MMMM YYYY h:mm:ss a'));

/*https://momentjs.com/ */