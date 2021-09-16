let display = document.querySelector('.upperText');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let firstNumber = 0;
let secondNumber = 0;
let operator1;

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

function exponent(a, b) {
    return a ** b;
}

function mod(a, b) {
    return a % b;
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

function clearCalc() {
    firstNumber = 0;
    secondNumber = 0;
    operator1 = null;
    display.innerText = '';
}

numbers.forEach(number => number.addEventListener("click", function() {
    if(display.innerText.length < 10) {
        display.innerText = display.innerText + number.innerText;
        firstNumber = parseFloat(display.innerText);
}
}));

operators.forEach(operator => operator.addEventListener("click", function(){
    switch(operator.innerText) {
        case 'C':
            clearCalc();
            break;

        case '+':
            operator1 = '+';
            checkForNumbers();
            break;

        case '=':
            operate(operator1, firstNumber, secondNumber);
            break;

            
    }
}));

function checkForNumbers() {
    if(firstNumber !== 0 && secondNumber == 0 ) {
        display.innerText = '';
        secondNumber = parseFloat(display.innerText);
        console.log(secondNumber);
    }
}












