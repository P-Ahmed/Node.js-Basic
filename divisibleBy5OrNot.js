const prompt = require("prompt-sync")();

var number = parseInt(prompt("Enter a number: "));

if(number%5==0){
    console.log('The number is divisible by 5.');
}
else{
    console.log('The number is not divisible by 5.');
}