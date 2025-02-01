"use strict";

/*  */
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

/*  */
const array = [1, 2, 3, 4, 5];
for (let j = 0; j < array.length; j++) {
  console.log(array[j]);
}

/*  */
for (let m = 0; m <= 10; m += 2) {
    console.log(m);
  }

  /*  */
  let sum1 = 0;
for (let t = 1; t <= 10; t++) {
  sum1 += t;
}
console.log(sum1); 

/*  */
const arri = [1, 2, 3, 4, 5];
let largest = arri[0]; 

for (let e = 1; e < arri.length; e++) {
  if (arri[e] > largest) {
    largest = arri[e];
  }
}
console.log(largest); 

/*  */
const arrr = [1, 2, 3, 4, 5];
let summ = 0;

for (let n = 0; n < arrr.length; n++) {
  summ += arrr[n];
}

const average1 = summ / arrr.length;
console.log(average1); 

/* factorial */
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); 

  /* fib */
  function fibonacci(n) {
    const sequence = [0, 1]; 
  
    for (let i = 2; i < n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
  
    return sequence;
  }
  
  console.log(fibonacci(10)); 

  /* sPrime */
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function primesUpTo(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  console.log(primesUpTo(20)); 

  /*  */