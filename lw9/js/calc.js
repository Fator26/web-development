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
  let a, b;

  b = readNewArray(expression);
  if (Array.isArray(b)) b = splitAndDoExpression(b);

  a = readNewArray(expression);
  if (Array.isArray(a)) a = splitAndDoExpression(a);

  if (a && b){
    if (expression[0] == '/'){
      if (b != 0)
        return a / b;
      else {
        console.log("Division by 0!!!")
        return false;
      }
    }
    if (expression[0] == '*') return a * b;
    if (expression[0] == '-') return a - b;
    if (expression[0] == '+') return a + b;
  }
  console.log("Invalid expression.");
  return false;
}

function readNewArray(arr) {
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
