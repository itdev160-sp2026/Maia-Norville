console.log("=== Activity 5: Simple Math Operations Widget ===");

// === ELEMENT SELECTION ===
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const operation = document.getElementById("operation");
const result = document.getElementById("result");

// Create a Clear button dynamically (since your HTML doesn't have one)
let clearBtn = document.createElement("button");
clearBtn.textContent = "Clear All";
clearBtn.id = "clearBtn";
clearBtn.style.background = "#d9534f";
clearBtn.style.color = "white";
clearBtn.style.padding = "10px";
clearBtn.style.marginTop = "10px";
clearBtn.style.width = "100%";
clearBtn.style.border = "none";
clearBtn.style.borderRadius = "5px";
clearBtn.style.cursor = "pointer";
document.querySelector(".math-widget").appendChild(clearBtn);

console.log("\n=== ELEMENT SELECTION AND SETUP ===");
console.log("Number1 input:", number1);
console.log("Number2 input:", number2);
console.log("Operation dropdown:", operation);
console.log("Result div:", result);

// === EVENT LISTENERS ===
console.log("\n=== SETTING UP EVENT LISTENERS ===");

const calcBtn = document.querySelector("button[onclick='calculate()']");
console.log("Added click listener to Calculate button");
calcBtn.addEventListener("click", calculate);

console.log("Added click listener to Clear All button");
clearBtn.addEventListener("click", clearAll);

console.log("All event listeners attached successfully!");
console.log("Math Operations Widget initialized!");
console.log("Try entering numbers and clicking operation buttons!");

// === FUNCTIONS ===
function calculate() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const op = operation.value;

    // validation
    if (isNaN(num1)) {
        showError("Please enter a valid first number.");
        return;
    }
    if (isNaN(num2)) {
        showError("Please enter a valid second number.");
        return;
    }

    let answer;

    switch (op) {
        case "add":
            answer = num1 + num2;
            break;
        case "subtract":
            answer = num1 - num2;
            break;
        case "multiply":
            answer = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                showError("Error: Cannot divide by zero.");
                return;
            }
            answer = num1 / num2;
            break;
    }

    showSuccess("Result: " + answer);
}

function clearAll() {
    number1.value = "";
    number2.value = "";
    operation.value = "add";
    result.textContent = "";
    result.className = "";
}

function showError(msg) {
    result.textContent = msg;
    result.style.color = "red";
}

function showSuccess(msg) {
    result.textContent = msg;
    result.style.color = "green";
}
