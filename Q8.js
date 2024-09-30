/*8.	Write a for loop that subtracts all the numbers in the array [20, 5, 8, 10, 3] starting with the 
first number (20). { loop diye korar try korben }*/

let num = [20, 5, 8, 10, 3];
let result = num[0];
for ( let i=1; i<num.length; i++ ) {
    result-= num[i];
}
console.log(result);