'use strict';

const numbers = [];

let userInput;
do {
    userInput = parseFloat(prompt("Enter a number:"));
    if (!isNaN(userInput)) {
        numbers.push(userInput);
    } else {
        alert("Please enter a valid number.");
    }
} while (userInput !== 0);

const sortedNumbers = numbers.sort((a, b) => b - a);

console.log("Sorted Numbers:", sortedNumbers);

const sortedNumbersText = "Sorted Numbers: " + sortedNumbers.join(", ");
const resultElement = document.createElement("p");
resultElement.textContent = sortedNumbersText;
document.body.appendChild(resultElement);
