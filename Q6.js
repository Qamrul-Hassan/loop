//6.	Write a while loop that prints numbers from 1 to 20 but skips numbers divisible by 4 using the 	continue statement.

let n = 1;
while ( n <=20) {
    if (n % 4 ===0) {
        n++; continue;
    }
    console.log(n);
    n++;
}