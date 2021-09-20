let display = document.querySelector('.upperText');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let firstNumber = null;
let secondNumber = null;
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
    let result = 0;
    switch(operator) {
        case '+':
            result = add(a, b);
            break;

        case '-':
            result = subtract(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;
        
        case '/':
            result = divide(a, b);
            break;
    }
    return result;
}

function clearCalc() {
    firstNumber = null;
    secondNumber = null;
    operator1 = null;
    display.innerText = '';
}

numbers.forEach(number => number.addEventListener("click", function() {
    if(display.innerText.length < 10) {
        if(firstNumber == null && secondNumber == null) {
        display.textContent = number.innerText;
        firstNumber = parseFloat(display.innerText);
        console.log(firstNumber);
    }
       else if(firstNumber != null && secondNumber == null && operator1 != null) {  
            display.innerText = '';     
            display.innerText = display.innerText + number.innerText;
            secondNumber = parseFloat(display.innerText);
            console.log(secondNumber);
        }
}
}));

operators.forEach(operator => operator.addEventListener("click", function(){
    switch(operator.innerText) {
        case 'C':
            clearCalc();
            break;

        case '+':
            operator1 = '+';
            break;

        case '=':
            display.innerText = operate(operator1, firstNumber, secondNumber);
            break;

            
    }
}));

/*function checkForNumbers() {
    if(firstNumber !== 0 && secondNumber == 0 ) {
        display.innerText = '';
        secondNumber = parseFloat(display.innerText);
        console.log(secondNumber);
    }
}
*/











