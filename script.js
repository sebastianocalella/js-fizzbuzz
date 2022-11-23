for(let i=0; i<100; i++){
    if (i==0){
        console.log(i+1);
    } else if (i%3==0 && i%5==0){
        console.log('FizzBuzz');
    } else if ((i + 1)%3==0 && (i + 1)%5!=0){
        console.log('Fizz');
    } else if ((i + 1)%3!=0 && (i + 1)%5==0){
        console.log('Buzz');
    }
    else{
        console.log(i + 1);
    }
}