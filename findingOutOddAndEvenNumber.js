const prompt = require('prompt-sync')();

var number = parseInt(prompt("Enter a number: "));

if(number%2==0){
    console.log('This is an even number.');
}
else{
    console.log('This is an odd number.');
}