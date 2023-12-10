'use strict';

const  numbers = [];
for (let i = 0; i < 5; i++) {
    const  userInput = prompt("Enter number " + (i + 1) + ":");
    numbers.push(parseFloat(userInput));
}

console.log("Numbers in reverse order:");
for (let j = numbers.length - 1; j >= 0; j--) {
    console.log(numbers[j]);
}
