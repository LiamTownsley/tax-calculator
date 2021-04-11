let total = 0;

let items = {};

function addTransaction(name, amount, transactionID) {

    let currentDate = new Date();
    currentDate.toLocaleDateString('en-UK');

    const transactionTable = document.getElementById("trans-table");
    let transactionRow = transactionTable.insertRow(1);
    transactionRow.insertCell(0).innerHTML = currentDate.toLocaleDateString();
    transactionRow.insertCell(1).innerHTML = name;
    transactionRow.insertCell(2).innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(total);
    transactionRow.insertCell(3).innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(amount * 0.1);
    transactionRow.insertCell(4).innerHTML = transactionID; 
}

function addMoney() {
    const transactionID = `RJX-${Math.floor(Math.random()*(999-100+1)+100)}-${Math.floor(Math.random()*(999-100+1)+100)}-${Math.floor(Math.random()*(999-100+1)+100)}`
    
    let transName = prompt("Name this transaction.", "Unnamed Transaction");
    if(!transName) transName = "Unnamed Transaction";

    let amountToAdd = parseInt(prompt("How much money was paid?", "0"));
    while (isNaN(amountToAdd) || amountToAdd < 1) {
        amountToAdd = parseInt(prompt("How much money was paid?", "0"));
    }
    amountToAdd = Math.floor(amountToAdd);
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
// // }
// function signupSubmit() {
//     const username = document.getElementById("signup-username");
//     const password = document.getElementById("signup-password");

//     localStorage.setItem("user-username", username.value);
//     localStorage.setItem("user-password", password.value);
// }

function loginUser() {
    const username = document.getElementById("username");
    console.log();
    username.innerHTML = localStorage.getItem("signup-username");
}

// window.addEventListener('load', function() {
//     if(1 == 5) {
//         user?.innerHTML = localStorage.getItem("user-username");
//     }
//     else {
//         const div1 = document.getElementById("profilesummary");
//         const div2 = document.getElementById("transaction-history");
        
//         div1.classList.add("loggedout");
//         div2.classList.add("loggedout");

//         document.getElementById("loggedout-message").classList.add("loggedoutmsg");
//     }
//     const signupButton = document.getElementById("signup-button");
//     signupButton.addEventListener('click', (e) => {
//         const username = document.getElementById("signup-username").value;
//         const password = document.getElementById("signup-password").value;

//         localStorage.setItem("user-username", username);
//         localStorage.setItem("user-password", password);
//         e.preventDefault();
//     });
// });