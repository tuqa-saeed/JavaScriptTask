"use strict"

// 5. Function to calculate the sum 
console.log("Function to calculate the sum ");
function addUp(n) {
    if (typeof n !== 'number' || n < 0) {
      return "Invalid input: Please provide a non-negative number";
    }
    let sum = 0;
    for (let i = n; i >= 0; i--) {
      sum += i;
    }
    return sum;
  }
  
  console.log(addUp(8)); 
  
  
  // 6. Function to analyze an array and return min, max, length, and average
  console.log("return min, max, length, and average ");

  function minMaxLengthAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "Invalid input: Please provide a non-empty array";
    }
  
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      const num = arr[i];
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
      sum += num;
    }
  
    const length = arr.length;
    const average = sum / length;
  
    return [min, max, length, average];
  }
  
  console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); 