for(let i=0; i<100; i++){
    let a;
    if (i==0){
        console.log(i+1);
        a=i+1;
    } else if (i%3==0 && i%5==0){
        console.log('FizzBuzz');
        a='FizzBuzz';
    } else if ((i + 1)%3==0 && (i + 1)%5!=0){
        console.log('Fizz');
        a='Fizz';
    } else if ((i + 1)%3!=0 && (i + 1)%5==0){
        console.log('Buzz');
        a='Buzz';
    }
    else{
        console.log(i + 1);
        a=i+1;
    }
    document.getElementById('main').insertAdjacentHTML('beforebegin', `<div> nella riga ${i + 1} appare il valore: ${a}</div>`);
}