const prompt = require('prompt-sync')();

var number1 = parseInt(prompt('Enter the first number: '));
var number2 = parseInt(prompt('Enter the second number: '));
var number3 = parseInt(prompt('Enter the third number: '));

if(number1>number2 && number1>number3){
    console.log(`The maximum number is ${number1}`);
}
else if(number2>number1 && number2>number3){
    console.log(`The maximum number is ${number2}`);
}
else{
    console.log(`The maximum number is ${number3}`);
}