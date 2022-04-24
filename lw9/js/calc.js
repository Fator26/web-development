function stringToArray(str) {
  let returnedArr = '';
  let bracketCounter = 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === '(' || str[i] === ')') returnedArr += ' ' + str[i] + ' ';
    else  returnedArr += (str[i]);
    if (str[i] === '(') bracketCounter++;
    if (str[i] === ')') bracketCounter--;
  }
  if (bracketCounter != 0){
    console.log('Invalid brackets');
    return false;
  }
  returnedArr = returnedArr.split(' ');
  returnedArr = returnedArr.filter(Boolean);
  for (let i = 0; i < returnedArr.length; ++i)
  {
    if (Number(returnedArr[i]) || returnedArr[i] == '0') returnedArr[i] = Number(returnedArr[i]);
  }
  return returnedArr;
}

function splitAndDoExpression(expression) {
  console.log(expression);
  let action, num1, num2;
  let operCount = 0;
  let i = 0;
  num1 = null;
  num2 = null;
  action = null;

  while (expression.length > 0)
  {
    if (expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/'){
      action = expression.shift();
      operCount = 0;
      continue;
    }
    if (num1 == null){
      if (Number.isInteger(expression[i])) {
        num1 = expression.shift();
        ++operCount;
        continue;
      }
      else {
        if (expression[i] == '('){
          expression.shift();
          num1 = splitAndDoExpression(expression);
          if (!num1) break;
          ++operCount;
          continue;
        }
      }
    }
    if (num2 == null && num1 !== null) {
      if (Number.isInteger(expression[i])) {
        num2 = expression.shift();
        ++operCount;
        continue;
      } else {
        if (expression[i] == '(') {
          expression.shift()
          num2 = splitAndDoExpression(expression);
          if (!num2) break;
          ++operCount;
          continue;
        }
      }
    }
    if (expression[i] == ')'){
      expression.shift()
      break;
    }
    if (num1 != null && num2 != null && expression[i] != ')'){
      console.log('Extra operator!');
      return false;
    }
  }

  if (action && operCount == 2 && num1 != null && num2 != null){
    if (action == "/"){
      if (num2 !== 0) return num1 / num2;
      else {
        console.log("Division by 0!!!");
        return false;
      }
    }
    if (action == '*') return num1 * num2;
    if (action == '-') return num1 - num2;
    if (action == '+') return num1 + num2;
  }

  return false;
}

function calc(str) {
  let expression = [];
  if (str !== undefined) {
    expression = stringToArray(str);
    if (expression) expression = splitAndDoExpression(expression);
    if (expression) console.log(expression);
    else console.log("Invalid expression.");
  }
  else
  {
    console.log('String is empty');
    return false;
  }
}