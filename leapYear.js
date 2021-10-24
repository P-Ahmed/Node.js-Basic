const prompt = require("prompt-sync")();

var year = parseInt(prompt('Enter a year: '));

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log('This is a leap year');
        }
        else{
            console.log('This is not a leap year');
        }
    }
    else{
        console.log('This is a leap year');
    }
}
else{
    console.log('This is not a leap year');
}