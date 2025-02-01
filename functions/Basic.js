"use strict"
/*smallest value in an array  */
console.log("smallest value in an array");
function findSmallest(arr) {
    if (!arr || arr.length === 0) {
      return "Array is empty or invalid"; 
    }
    let smallest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    return smallest;
  }
  
  console.log(findSmallest([30, 45, 60, 7])); // Output: 7
  
  /*string in alphabetical order  */
console.log("string in alphabetical order");
  function alphabeticalOrder(str) {
    if (!str) {
      return "String is invalid"; // Handle invalid input
    }
    return str.split('').sort().join('');
  }
  
  console.log(alphabeticalOrder('hello')); // Output: "ehllo"
  
  /*factorial  */
console.log("factorial");
  function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    if (n === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(8)); 
  
  /*even or odd  */
console.log("even or odd");
  
  function oddOrEven(num) {
    if (typeof num !== 'number') {
      return 7;
    }
    return num % 2 === 0 ? "Even" : "Odd";
  }
  
   console.log(oddOrEven(9)); 
 
