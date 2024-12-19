const inputField = document.getElementById("numberInput");
const outputDiv = document.getElementById("output");

inputField.addEventListener("input", function() {
    const userInput = inputField.value;
    const number = parseInt(userInput);

    if (userInput === "") {
        outputDiv.textContent = ""; 
        return;
        }

    if (isNaN(number)) {
        outputDiv.textContent = "Please enter a valid number.";
        return;
        }

    if (number < 0) {
        outputDiv.textContent = "Enter a positive value.";
  } else if (number % 2 === 0) {
        const nextEvenNumbers = [number + 2, number + 4, number + 6];
        outputDiv.textContent = `Next 3 even numbers: ${nextEvenNumbers.join(", ")}`;
  } else {
        const nextOddNumbers = [number + 2, number + 4, number + 6];
        outputDiv.textContent = `Next 3 odd numbers: ${nextOddNumbers.join(", ")}`;
        }
});