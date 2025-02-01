"use strict"
// 7. Function to count words in a string
console.log("Function to count words in a string");
function countWords(str) {
    if (typeof str !== 'string' || str.trim() === "") {
      return 0; 
    }
    const words = str.trim().split(/\s+/); 
    return words.length;
  }
  
  console.log(countWords('hello from CodingAcademy!')); 
 
  
  
  // 8. Function to multiply array elements by their length
  console.log("multiply array elements");

  function MultiplyByLength(arr) {
    if (!Array.isArray(arr)) {
      return "Invalid input: Please provide an array";
    }
    const length = arr.length;
    return arr.map(element => element * length);
  }
  
  console.log(MultiplyByLength([4, 2, 5])); 
  
  
  // 9. Function to check if str1 ends with str2
  console.log("check if str1 ends with str2");

  function checkEnding(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return "Invalid input: Please provide two strings";
    }
    return str1.endsWith(str2);
  }
  
  console.log(checkEnding("CodingSchool", "Ac")); 
  
  
  // 10. Function to double each character in a string
  console.log("double each character in a string");

  function doubleChar(str) {
    if (typeof str !== 'string') {
      return "Invalid input: Please provide a string";
    }
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += str[i].repeat(2);
    }
    return result;
  
  
  }
  
  console.log(doubleChar('Coding')); 
  
  
  // 11. Function to find the index of an element in an array
  console.log("find the index of an element in an array");

  function findIndex(arr, element) {
    if (!Array.isArray(arr)) {
      return "Invalid input: First argument must be an array";
    }
    return arr.indexOf(element); 
  }
  
  console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Mazen')); 
