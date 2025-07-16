"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
function add(num1, num2) {
    return console.log(num1 + num2);
}

function subtract(num1, num2) {
    return console.log(num1 - num2);
}

function multiply(num1, num2) {
    return console.log(num1 * num2);
}

function divide(num1, num2) {
    if (num2 === 0) {
        return console.log("Cannot divide by zero");
    }
    return console.log(num1 / num2);
}

// Step 02: Create a Validation Function for Inputs
function validateInputs(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return console.log("Both inputs must be numbers");
    }
    return null;
}

// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator(num1, num2, operation) {
    if (validateInputs(num1, num2)) {
        return;
    }

    switch (operation) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
        default:
            console.log('Invalid operation. Please use "add", "subtract", "multiply", or "divide".');
    }
}

add(10, 5);                    // 15
validateInputs(10, "a");       // 'Both inputs must be numbers'
calculator(10, 5, "add");      // 15
calculator(10, 5, "divide");   // 2
calculator(10, 0, "divide");   // 'Cannot divide by zero'
calculator(10, 5, "unknown");  // 'Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.'
