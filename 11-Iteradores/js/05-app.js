let i=0;
do{
    //se ejecuta al menos una vez
    if(i % 3 === 0 &  i % 5 === 0){
        console.log(`El nro ${i} - Fizz Buzz`);
    }
    else if(i % 3 ===0){
        console.log(`El nro ${i} - Fizz`);
    }
    else if(i % 3 ===5){
        console.log(`El nro ${i} - Buzz`);
    }
    i++;
  i++;
}while(i<100);