'use strict';

const numParticipants = parseInt(prompt("Enter the number of participants:"));

if (isNaN(numParticipants) || numParticipants < 1) {
    alert("Please enter a valid number of participants.");
} else {
    const participantNames = [];

    for (let i = 1; i <= numParticipants; i++) {
        const participantName = prompt("Enter the name of participant " + i + ":");
        participantNames.push(participantName);
    }

    participantNames.sort();

    const orderedList = document.createElement("ol");

    participantNames.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        orderedList.appendChild(listItem);
    });

    document.body.appendChild(orderedList);
}
