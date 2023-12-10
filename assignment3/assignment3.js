'use strict';

const dogNames = [];

for (let i = 1; i <= 6; i++) {
    const dogName = prompt("Enter the name of dog " + i + ":");
    dogNames.push(dogName);
}

dogNames.sort().reverse();

const unorderedList = document.createElement("ul");

dogNames.forEach(name => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    unorderedList.appendChild(listItem);
});

document.body.appendChild(unorderedList);
