let total = 0;

let items = {};

function addTransaction(name, amount, transactionID) {

    const a = document.getElementById("trans-name");
    const b = document.getElementById("trans-amount");
    
    let currentDate = new Date();
    currentDate.toLocaleDateString('en-UK');

    const c = document.getElementById("trans-table");
    let row1 = c.insertRow(1);
    row1.insertCell(0).innerHTML = currentDate.toLocaleDateString();
    row1.insertCell(1).innerHTML = name;
    row1.insertCell(2).innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(amount);
    row1.insertCell(3).innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(amount * 0.1);
    row1.insertCell(4).innerHTML = transactionID; 
}

function addMoney() {
    const transactionID = `RJX-${Math.floor(Math.random()*(999-100+1)+100)}-${Math.floor(Math.random()*(999-100+1)+100)}-${Math.floor(Math.random()*(999-100+1)+100)}`
    
    let transName = prompt("Name this transaction.", "Unnamed Transaction");
    if(!transName) transName = "Unnamed Transaction";

    let amountToAdd = parseInt(prompt("How much money was paid?", "0"));
    while (isNaN(amountToAdd) || amountToAdd < 1) {
        amountToAdd = parseInt(prompt("How much money was paid?", "0"));
    }

    addTransaction(transName, amountToAdd, transactionID);
    
    total = total + amountToAdd;

    const profit = document.getElementById("profit");
    const loss = document.getElementById("loss");

    profit.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(total * 0.9).toString();
    loss.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(total * 0.1).toString();

    // TODO: Add localstorage support
    items[transactionID] = [total, transName];
}


// function saveInfo() {
//     window.localStorage.setItem("transactionHistory", JSON.stringify(items));
// }

// function loadInfo() {
//     console.log(window.localStorage.getItem("transactionHistory"))
//     // const transactionHistory = JSON.parse(localStorage.getItem("transactionHistory"));
//     // items = transactionHistory;
//     // console.log(transactionHistory);
//     // transactionHistory.forEach(e => {
//     //     console.log(e);
//     // })
// }