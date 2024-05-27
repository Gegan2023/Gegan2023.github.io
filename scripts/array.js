let arr = [3, 1, 4, 1, 5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let i = 0; i < arr.length; i++){
    console.log(arr.at(-i-1));
}

let cubeNumbers = [];
for(let i = 1; i <= 10; i++){
    cubeNumbers.push(i**3);
}
console.log(cubeNumbers);

let fibonacciNumbers = [0, 1];
for(let i = 2; i < 10; i++){
    fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
}
console.log(fibonacciNumbers);

let reversedArr = [];
for(let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
}
console.log(reversedArr);
