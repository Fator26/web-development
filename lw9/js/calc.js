function stringToArray(str) {
  let returnedArr = '';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] == '(' || str[i] == ')') returnedArr += ' ' + str[i] + ' ';
    else  returnedArr += (str[i]);
  }
  returnedArr = returnedArr.split(' ');
  returnedArr = returnedArr.filter(Boolean);
  for (let i = 0; i < returnedArr.length; ++i)
  {
    if (Number(returnedArr[i])) returnedArr[i] = Number(returnedArr[i]);
  }
  return returnedArr;
}

function splitAndDoExpression(expression) {
  let num1, num2;

  num2 = readValue(expression);
  if (Array.isArray(num2)) num2 = splitAndDoExpression(num2);

  num1 = readValue(expression);
  if (Array.isArray(num1)) num1 = splitAndDoExpression(num1);


  if (num1 && num2){
    if (expression[0] == '/'){
      if (num2 != 0)
        return num1 / num2;
      else {
        console.log("Division by 0!!!")
        return false;
      }
    }
    if (expression[0] == '*') return num1 * num2;
    if (expression[0] == '-') return num1 - num2;
    if (expression[0] == '+') return num1 + num2;
  }

  console.log("Invalid expression.");
  return false;
}

function readValue(arr) {
  // console.log(arr);
  let returnedArr = [];
  let bracketCounter = 0;
  let arraySize;
  let buffer;
  if (arr[(arr.length - 1)] != ')') {
    buffer = arr.pop();
    return buffer;
  }
  else {
    bracketCounter = 1;
    arr.pop();
    arraySize = arr.length;
    while (bracketCounter != 0) {
      arraySize--;
      if (arraySize == 0) {
        console.log('Invalid brackets');
        return false;
      }
      if (arr[arraySize] == '(') bracketCounter--;
      if (arr[arraySize] == ')') bracketCounter++;
      buffer = arr.pop();
      if (bracketCounter != 0) {
        returnedArr.unshift(buffer);
      }
    }
  }
  return returnedArr;
}

function calc(str) {
  let expression = [];
  if (str !== undefined) {
    expression = stringToArray(str);
    expression = splitAndDoExpression(expression);
    if (expression !== false)
      console.log(expression);
  }
  else
  {
    console.log('String is empty');
    return false;
  }
}
