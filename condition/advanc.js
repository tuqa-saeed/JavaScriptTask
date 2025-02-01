"use strict"

// 9- Multiple of 3

let z = 9; 

if (z % 3 === 0) {
  console.log("z is a multiple of 3");
} else {
  console.log("z is not a multiple of 3");
}



// 10- Password length check

let password = "mypassword123"; 

if (password.length >= 8) {
  console.log("Your password is strong");
} else {
  console.log("Your password is not strong enough");
}



// 11- Age between 18 and 65 (inclusive)

let aage = 30; 

if (aage >= 18 && aage <= 65) {
  console.log("You are of working age");
} else {
  console.log("You are not of working age");
}



// 12- Primary color check

let color = "red"; 

if (color === "red" || color === "green" || color === "blue") {
  console.log("color is a primary color");
} else {
  console.log("color is not a primary color");
}



// 13- isNumber() function using isNaN()

function isValidNumber(input) {
  if (isNaN(input)) {
    return input + " is not a number";
  } else {
    return input + " is a valid number";
  }
}
console.log(isValidNumber(11));    
console.log(isValidNumber("19"));    
console.log(isValidNumber("xyz"));   
console.log(isValidNumber("17.5")); 
console.log(isValidNumber("21F"));   