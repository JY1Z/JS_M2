'use strict';

const enteredNumbers = [];
while (true) {
    const userInput = parseFloat(prompt("Enter a number:"));

    if (isNaN(userInput)) {
        alert("Please enter a valid number.");
        continue;
    }

    if (enteredNumbers.includes(userInput)) {
        alert("Number already given. Stopping operation.");
        break;
    }

    enteredNumbers.push(userInput);
}

const sortedNumbers = enteredNumbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", sortedNumbers);

