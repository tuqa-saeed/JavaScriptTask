"use strict"


// 3- Check if "char" is a letter

let char = "a"; 

if (/[a-zA-Z]/.test(char) && char.length === 1) {  
  console.log("It's a letter");
} else {
  console.log("It's not a letter"); 
}



// 4- Check if "list" is an array

let list = [1, 2, 3]; 

if (Array.isArray(list)) {
  console.log("It's an array");
} else {
  console.log("It's not an array");
}



// 5- Check if "x" is a positive number

let x = 5; // You can change this value to test
// let x = -2; // Try setting it to a negative number
// let x = 0;  // Try setting it to zero

if (typeof x === 'number' && x > 0) { // Also checks if it's a number type
  console.log("x is a positive number");
} else {
  console.log("x is not a positive number");
}