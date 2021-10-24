var arr = [4, 2, 9, 5, 10, 8, 7, 3, 23, 18, 15];
arr.sort(function (a, b) { return a - b });
console.log(arr);
var max = arr[arr.length - 1];
var min = arr[0];
console.log(`Max number is ${max}`);
console.log(`Min number is ${min}`);