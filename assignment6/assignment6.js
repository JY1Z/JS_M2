function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function mainProgram() {
    const diceResultsList = document.getElementById("diceResults");

    let rollResult;
    let rolls = 0;

    do {
        rolls++;
        rollResult = rollDice();

        const listItem = document.createElement("li");
        listItem.textContent = `Roll ${rolls}: ${rollResult}`;
        diceResultsList.appendChild(listItem);
    } while (rollResult !== 6);
}

document.addEventListener("DOMContentLoaded", mainProgram);
