const prompt = require('prompt-sync')();

var num = parseInt(prompt("Enter a number: "));
var sum = 0;

while (num) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
}

console.log(sum);