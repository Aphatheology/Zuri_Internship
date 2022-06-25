let firstNumber, secondNumber, operator, result;
firstNumber = +prompt('Enter first number: ');
secondNumber = +prompt('Enter second number: ');
operator = prompt('Enter any of these operator: \n +, -, *, / ');

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert('Error! Kindly refresh the page and input numbers in the required boxes!');
} else if (operator === '+') {
    result = firstNumber + secondNumber;
} else if (operator === '-') {
    result = firstNumber - secondNumber;
} else if (operator === '/') {
    result = (firstNumber / secondNumber).toFixed(2);
} else if (operator === '*') {
    result = firstNumber * secondNumber;
} else {
    alert('Error! Kindly check the operator used');
}

if (result) {
    alert(`The result of ${firstNumber} ${operator} ${secondNumber} is ${result}`);
}
