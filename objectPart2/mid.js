"use strict"


// 1. Get an array of an object's properties (keys)
function getObjectProperties(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      return "Invalid input: Please provide a valid object";
    }
    return Object.keys(obj);
  }
  
  const myObj1 = { name: "Adam", age: 25, gender: "male" };
  console.log(getObjectProperties(myObj1)); 
  
  
  // 2. Get an array of an object's values
  function getObjectValues(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      return "Invalid input: Please provide a valid object";
    }
    return Object.values(obj);
  }
  
  const myObj2 = { name: "Adam", age: 25, gender: "male" };
  console.log(getObjectValues(myObj2)); 
  
  
  // 3. Get an array of key-value pairs 
  function getObjectEntries(obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
      return "Invalid input: Please provide a valid object";
    }
    return Object.entries(obj);
  }
  
  const myObj3 = { name: "Adam", age: 25, gender: "male" };
  console.log(getObjectEntries(myObj3));  