const prompt = require("prompt-sync")();

var digit = parseInt(prompt('Enter a digit(2-10): '));
var fact = 1;
if(digit>=2 && digit <= 10){
    for(let i=1;i<=digit;i++){
        fact = fact*i;
    }
    console.log(`The factorial of ${digit} is ${fact}`);
}
else{
    console.log("Out of range!");
}

