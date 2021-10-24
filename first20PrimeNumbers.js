var finalCounter = 1;
var count = 0;
var arr = [1];

for (let i = 2; i <= 1000; i++) {
    count = 0;
    for (let j = 2; j <= Math.floor(i / 2); j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 0) {
        arr.push(i);
        finalCounter++;
        if (finalCounter >= 19) {
            break;
        }
    }
}

console.log(arr);