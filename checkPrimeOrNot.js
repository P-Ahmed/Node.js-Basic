const prompt = require("prompt-sync")();

var num = parseInt(prompt("Enter a number: "));

var count = 0;
for(let i = 2;i<num/2;i++){
    if(num%i!=0){
        continue;
    }
    else{
        count++;
        break;
    }
}
if(count>=1){
    console.log("This is not a prime number.");
}
else{
    console.log("This is a prime number.");
}