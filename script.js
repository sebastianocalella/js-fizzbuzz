for(let i=0; i<100; i++){
    let a;
    if (i==0){
        console.log(i+1);
        a=i+1;
    } else if ((i+1)%3==0 && (i+1)%5==0){
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
    
    document.getElementById('main').insertAdjacentHTML('beforebegin', `<div id="${i+1}"> nella riga ${i + 1} appare il valore: ${a}</div>`);

    if (i==0){
        document.getElementById(`${i + 1}`).style.color = "black";

    } else if ((i+1)%3==0 && (i+1)%5==0){
        document.getElementById(`${i + 1}`).style.color = "blue";

    } else if ((i + 1)%3==0 && (i + 1)%5!=0){
        document.getElementById(`${i + 1}`).style.color = "red";

    } else if ((i + 1)%3!=0 && (i + 1)%5==0){
        document.getElementById(`${i + 1}`).style.color = "green";

    } else{
        document.getElementById(`${i + 1}`).style.color = "black";
    }

}