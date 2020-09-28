//El reto del fizz buzz

//3 6 9 12   .. Fizz

//5 10 15 20 .. Buzz

//3 5 6 9 10 .. Fizz Buzz

 let nro;
for(let i=0; i<100; i++){
    if(i % 3 === 0 &  i % 5 === 0){
        console.log(`El nro ${i} - Fizz Buzz`);
    }
    else if(i % 3 ===0){
        console.log(`El nro ${i} - Fizz`);
    }
    else if(i % 3 ===5){
        console.log(`El nro ${i} - Buzz`);
    }
}