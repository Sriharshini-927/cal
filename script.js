let displayValue = '0';

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') displayValue = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = number.toString();
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    const lastChar = displayValue[displayValue.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
        displayValue = displayValue.slice(0, -1);
    }
    displayValue += operator;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    updateDisplay();
}
