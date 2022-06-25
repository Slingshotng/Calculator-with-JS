let number1 = prompt ('Enter the first number: '); 
let operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): '); 
let number2 = prompt ('Enter the second number: '); 

//converting string input to number
let num1 = parseInt(number1);
let num2 = parseInt(number2);

  
let result = null; 
  
  
if (operator == '+') {  
    result = num1 + num2;  
}  
else if (operator == '-') {
    result = num1 - num2;  
}  
else if (operator == '*') { 
    result = num1 * num2;  
}  
else {  
    result = num1 / num2;  
}  
  
  
window.alert(" Result is " + result); 