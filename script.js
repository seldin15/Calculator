let display = document.querySelector('.upperText');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let firstNumber = null;
let secondNumber = null;
let operator1;
let result = null;

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
    return Math.pow(a, b);
}

function mod(a, b) {
    return a % b;
}

function operate(operator, a, b) {
   
    switch(operator) {
        case '+':
            result = add(a, b);
            break;

        case '-':
            result = subtract(a, b);
            break;
        
        case '/':
            if(b == 0) {
                return 'Please...';
            }
            result = divide(a, b);
            break;
        
        case '*':
            result = multiply(a, b);
            break;

        case '^':
            result = exponent(a, b);
            break;
        
        case '%':
            result = mod(a, b);
            break;
    }
    return result;
}

function clearCalc() {
    firstNumber = null;
    secondNumber = null;
    operator1 = null;
    result = 0;
    display.innerText = '';
}

numbers.forEach(number => number.addEventListener("click", function() {
    if(display.innerText.length < 10) {
        if(operator1 == null) {
        display.innerText = display.innerText + number.innerText;
        firstNumber = parseFloat(display.innerText);
    }
       else if(operator1 != null && operator1 != '=') {  
            display.innerText = secondNumber;    
            display.textContent = display.innerText + number.innerText;
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
        
        case '-':
            operator1 = '-';
            break;

        case '×':
            operator1 = '*';
            break;

        case '÷':
            operator1 = '/';
            break;

        case 'X²':
            operator1 = '^';
            break;
        
        case '%':
            operator1 = '%';
            break;

        case '=':
            display.innerText = operate(operator1, firstNumber, secondNumber);
            if(display.innerText.length > 10) {
                display.innerText = 'OVERFLOW';
            }
            break;
    }
}));













