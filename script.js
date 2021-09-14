let display = document.querySelector('.upperText');
const numbers = document.querySelectorAll('.number');

let inputNumbers = null;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            add(a, b);
            break;

        case '-':
            subtract(a, b);
            break;

        case '*':
            multiply(a, b);
            break;
        
        case '/':
            divide(a, b);
            break;
    }
}
numbers.forEach(number => number.addEventListener("click", function() {
   display.innerText = display.innerText + number.innerText;
   inputNumbers = parseFloat(display.innerText);
   console.log(inputNumbers);
}));

function clearCalc() {
    inputNumbers = null;
    display.innerText = '';
}








