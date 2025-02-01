"use strict"
let str = "Welcome to Orange";

// • Output: WELCOME TO ORANGE
console.log(str.toUpperCase());

// • Output: TO
console.log(str.slice(8, 10)); 

// • Output: Hello from Orange
console.log("Hello from " + str.substring(11));

// • Output: welcome to orange
console.log(str.toLowerCase());

// • Output: 17
console.log(str.length);

// • Output: Welcome to "Orange"
console.log("Welcome to \"Orange\""); 

// • Output: Welcome to Orange Jordan
console.log(str + " Jordan");


/* *********************************************** */
function replaceFirstLetterWithAsterisk(str) {
    let firstLetter = str[0]; 
    let regex = new RegExp(firstLetter, 'g');
    return str.replace(regex, '*'); 
}

let input = "cactus";

let output = replaceFirstLetterWithAsterisk(input);
console.log(output); 
