const prompt = require("prompt-sync")();

var number = parseInt(prompt("Enter a number: "));
var count = 0;

for (let i = 1; i <= number; i++) {
    if(i%2==0){
        count++;
    }
}
console.log(`Total even number/s: ${count}`);