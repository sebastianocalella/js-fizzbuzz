for(let i=0; i<100; i++){
    let a;
    let color;
    if (i==0){
        console.log(i+1);
        a=i+1;
        color = 'black';
    } else if ((i+1)%3==0 && (i+1)%5==0){
        console.log('FizzBuzz');
        a='FizzBuzz';
        color='blue';
    } else if ((i + 1)%3==0 && (i + 1)%5!=0){
        console.log('Fizz');
        a='Fizz';
        color='red';
    } else if ((i + 1)%3!=0 && (i + 1)%5==0){
        console.log('Buzz');
        a='Buzz';
        color='green';
    }
    else{
        console.log(i + 1);
        a=i+1;
        color='black'
    }

    document.getElementById('main').insertAdjacentHTML('beforebegin', `<div class="${color}"> nella riga ${i + 1} appare il valore: ${a}</div>`);
}