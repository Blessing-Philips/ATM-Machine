// This is an incomplte program. I'd like you to customize or create your alert box... 

// A simple ATM Machine program


let pin = 1234;
let outstanding = 100000;

let operation = function() {
    let decisor = prompt("Welcome", "Welcome user!")
    if (decisor != null) {
        withdrawal()
    } else {
        alert("Operation Cancelled!")
    }
}

function withdrawal() {
    let requestPin = parseInt(prompt("Enter your pin", ""));
    if (pin == requestPin) {
        let requestAmount = parseFloat(prompt("Enter amount to withdraw", ""));
        if (requestAmount <= outstanding) {
            alert("Processing...\nCLick OK")
            let balance = outstanding - requestAmount;
            alert("Withdrawal successful! " + "Your available balance is " + balance)
        } else {
            alert("Insufficient Balance!")
        }
        
    } else {
        alert("Invalid pin!")
    }
}
    
