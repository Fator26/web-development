function calc(str) {
  let expretion = [];
  if (str !== undefined) {
    expretion = stringToArray(str);
    expretion = splitAndDoExpretion(expretion);
    if (expretion)
      console.log(expretion);
  }
  else
  {
    console.log('String is empty');
    return false;
  }
}

function stringToArray(str) {
  let returnedArr = '';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] == '(' || str[i] == ')')
      returnedArr += ' ' + str[i] + ' ';
    else
      returnedArr += (str[i]);
  }
  returnedArr = returnedArr.split(' ');
  returnedArr = returnedArr.filter(Boolean);
  for (let i = 0; i < returnedArr.length; ++i)
  {
    if (Number(returnedArr[i])){
      returnedArr[i] = Number(returnedArr[i]);
    }
  }
  return returnedArr;
}

function splitAndDoExpretion(expretion) {
  let a, b;
  let aArr = [];
  let bArr = [];
  let bracketCounter = 0;
  let arraySize;
  let buffer;

  if (expretion[expretion.length - 1] != ')') {
    b = expretion.pop(expretion[expretion.length - 1])
  }
  else {
    bracketCounter = 1;
    expretion.pop(expretion[expretion.length - 1]);
    while (bracketCounter != 0) {
      arraySize = expretion.length - 1;
      if (arraySize == 0) {
        console.log('Invalid bracket')
        return false;
      }
      if (expretion[arraySize] == '(') bracketCounter--;
      if (expretion[arraySize] == ')') bracketCounter++;
      buffer = expretion.pop(expretion[arraySize]);
      if (bracketCounter != 0) {
        bArr.unshift(buffer);
      }
    }
    b = splitAndDoExpretion(bArr);
  }

  if (expretion[expretion.length - 1] != ')') {
    a = expretion.pop(expretion[expretion.length - 1])
  }
  else {
    bracketCounter = 1;
    expretion.pop(expretion[expretion.length - 1]);
    while (bracketCounter != 0) {
      arraySize = expretion.length - 1;
      if (arraySize == 0) {
        console.log('Invalid bracket')
        return false;
      }
      if (expretion[arraySize] == '(') bracketCounter--;
      if (expretion[arraySize] == ')') bracketCounter++;
      buffer = expretion.pop(expretion[arraySize]);
      if (bracketCounter != 0) {
        aArr.unshift(buffer);
      }
    }
    a = splitAndDoExpretion(aArr);
  }
  if (a && b){
    if (expretion[0] == '/'){
      if (b != 0)
        return a / b;
      else {
        console.log("Деление на 0!!!")
        return false;
      }
    }
    if (expretion[0] == '*'){
      return a * b;
    }
    if (expretion[0] == '-'){
      return a - b;
    }
    if (expretion[0] == '+'){
      return a + b;
    }
  }
  return 'my poteryaly znak';
}