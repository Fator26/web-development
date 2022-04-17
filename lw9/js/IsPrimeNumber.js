function isPrimeNumber(n) {
    let isPrime;
    let numberSet = [];

    if (n !== undefined) {
        if (!Array.isArray(n)) numberSet.push(n);
        else numberSet = n;

        for (let i = 0; i < numberSet.length; i++ ) {
            isPrime = true;
            if (Number.isInteger(numberSet[i]) && numberSet[i] > 1) {
                for (let j = 2; j <= Math.round(Math.sqrt(numberSet[i])); j++) {
                    if ((numberSet[i] % j === 0) || !Number.isInteger(numberSet[i])) {
                        isPrime = false;
                        // console.log(numberSet[i], ' is not prime number');
                        break;
                    }
                }
            }
            else {
                isPrime = false;
            }

            if (isPrime) console.log(numberSet[i], ' is prime number');
            else  console.log(numberSet[i], ' is not prime number');
        }
    }
}