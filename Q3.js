//3. 	Given an array of numbers [3, 8, 12, 5, 9], use a for loop to calculate the sum of the elements in 	the array. 
//{ jodi paren for use kore korben, chesta korben for loop diye korar, simple kaj. Ektu 	matha 	khatale para jabe. 
//Na parle reduce diye koiren. }

let arr = [3, 8, 12, 5, 9];
let sum =0;
for (let i = 0; i<arr.length; i++) {
    sum += arr[i];
}
console.log(sum);