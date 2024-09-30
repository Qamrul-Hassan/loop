//5.	Write a for loop that loops through numbers 1 to 100, but breaks the loop when it encounters the 	number 45.

for (let i = 1; i <= 100; i++) {
    if (i===45) {
        break;
    }
    console.log(i);
}