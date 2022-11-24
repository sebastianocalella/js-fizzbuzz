for(let i=1; i<=100; i++){
    let a;
    let color;
    if (i%3==0 && i%5==0){
        console.log('FizzBuzz');
        a='FizzBuzz';
        color='blue';
    } else if (i%3==0 && i%5!=0){
        console.log('Fizz');
        a='Fizz';
        color='red';
    } else if (i%3!=0 && i%5==0){
        console.log('Buzz');
        a='Buzz';
        color='green';
    }
    else{
        console.log(i);
        a=i;
        color='black'
    }

    document.getElementById('main').insertAdjacentHTML('beforebegin', `<div class="${color}"> nella riga ${i} appare il valore: ${a}</div>`);
}