let num1, num2, operator, result;
num1 = +prompt('Enter first number: \n Empty field will be considered as 0');
num2 = +prompt('Enter second number: \n Empty field will be considered as 0');
operator = prompt('Enter operator: \n +, -, *, / \n Empty field will be considered as +');
if (operator === '+' || operator === 0) {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } 
  if (num1 === 0 && num2 === 0 && (operator === 0 || operator === '+')) {
    alert(`The result of ${num1} plus ${num2} is 0`);
  } else {
    alert(`The result of ${num1} ${operator} ${num2} is ${result}`);
  }

// alert(`You entered ${num1}`);
// if (num1 != 0) {
//     operator = prompt('Enter operator (type +, -, / or *):');
//     if(operator != 0) {
//         num2 = +prompt('Enter second number:');
//         if(num2 != 0) {
//             if (operator === '+') {
//                 result = num1 + num2;
//               } else if (operator === '-') {
//                 result = num1 - num2;
//               } else if (operator === '/') {
//                 result = num1 / num2;
//               } else if (operator === '*') {
//                 result = num1 * num2;
//               } else {
//                 alert('Error! Kindly check the operator used');
//               }
//                 alert(`The result is ${result}`);
//             }
//     }

// }
//  operator = prompt('Enter operator (type +, -, / or *):');
//  num2 = +prompt('Enter second number:');



// if (isNaN(num1) || isNaN(num2)) {
//   alert('Error! Kindly refresh the page and input numbers in the required boxes!');
// } else if (operator === '+') {
//   result = num1 + num2;
// } else if (operator === '-') {
//   result = num1 - num2;
// } else if (operator === '/') {
//   result = num1 / num2;
// } else if (operator === '*') {
//   result = num1 * num2;
// } else {
//   alert('Error! Kindly check the operator used');
// }

// let message = num1 + ' ' + operator + ' ' + num2 + ' = ' + result;

// alert(message);