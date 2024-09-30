//9.	Given the array [10, 20, 30, 40, 50], calculate the average of the numbers using a for loop.

let arr = [10, 20, 30, 40, 50];
let total = 0;
for (let i=0; i<arr.length; i++) {
    total += arr[i];
}
let average = total / arr.length;
console.log(average);