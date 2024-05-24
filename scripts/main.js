console.log("task one");

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Blastoff!");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 100 is:", sum);

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

for (let i = 1; i <= 10; i++) {
    console.log(i + "! = " + factorial(i));
}
