// Get elements from the HTML
const balanceElement = document.getElementById("balance");
const depositButton = document.getElementById("depositBtn");
const withdrawButton = document.getElementById("withdrawBtn");

// Initial balance
let balance = 1000;
    balance=0;

// Update the balance display
function updateBalance() {
    balanceElement.textContent = balance;
}

// Event listener for deposit button
depositButton.addEventListener("click", () => {
    const amount = parseFloat(prompt("Enter the deposit amount:"));
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert("Invalid amount. Please enter a valid amount.");
    }
});

// Event listener for withdraw button
withdrawButton.addEventListener("click", () => {
    const amount = parseFloat(prompt("Enter the withdrawal amount:"));
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
    } else {
        alert("Invalid amount or insufficient funds.");
    }
});

// Initial balance update
updateBalance();
