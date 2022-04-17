function isPrimeNumber(n) {
  let isPrime;
  let numberSet = [];
  if (n !== undefined) {
    if (Number.isInteger(n)) {
      numberSet.push(n);
    }
    else if (Array.isArray(n)) {
      numberSet = n;
    }
    else {
      console.log(n, 'is not number or array');
      numberSet = [];
    }
    for (let i = 0; i < numberSet.length; i++ ) {
      isPrime = true;
      if (Number.isInteger(numberSet[i])) {
        if (numberSet[i] > 1) {
          for (let j = 2; j <= Math.round(Math.sqrt(numberSet[i])); j++) {
            if (numberSet[i] % j === 0) {
              isPrime = false;
              break;
            }
          }
        }
        else {
        isPrime = false;
        }
      }
      else {
        console.log(numberSet[i], 'is not number');
        continue;
      }
      if (isPrime) console.log(numberSet[i], ' is prime number');
      else  console.log(numberSet[i], ' is not prime number');
    }
  }
}