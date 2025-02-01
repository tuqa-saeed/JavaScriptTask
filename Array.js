"use strict"
let arr = ["Coding", "Academy", "By", "Orange"];
// ["Coding", "Academy", "By", "Orange", "Jordan"]
arr.push("Jordan");
console.log(JSON.stringify(arr)); 
arr = ["Coding", "Academy", "By", "Orange"];
// ["Coding", "Academy"]
arr.splice(2); 
console.log(JSON.stringify(arr)); 
arr = ["Coding", "Academy", "By", "Orange"];
// ["Welcome", "To", "Coding", "Academy", "By", "Orange"]
arr.unshift("Welcome", "To");
console.log(JSON.stringify(arr)); 
// ["Academy", "By", "Orange"]
arr = ["Coding", "Academy", "By", "Orange"];
arr.shift(); 
console.log(JSON.stringify(arr)); 
// "Coding Academy By Orange"
arr = ["Coding", "Academy", "By", "Orange"];
console.log(arr.join(" ")); 
// ["Coding", "Academy", "By", "Orange"]
arr = ["Coding", "Academy", "By", "Orange"];
console.log(JSON.stringify(arr)); 
// ["Coding", "Orange"]
arr.splice(1, 2); 
console.log(JSON.stringify(arr)); 




/*  ====================*/
// 2. Array Operations with fruit and vegetables

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// a. Remove the last item from the vegetable array.
vegetables.pop();
console.log(JSON.stringify(vegetables)); 

// b. Remove the first item from the fruit array.
fruit.shift();
console.log(fruit); 

// c. Find the index of "orange."
var orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex); 

// d. Add that number to the end of the fruit array.
fruit.push(orangeIndex);
console.log(JSON.stringify(fruit)); 

// e. Find the length of the vegetable array.
var vegetablesLength = vegetables.length;
console.log(vegetablesLength); 

// f. Add that number to the end of the vegetable array.
vegetables.push(vegetablesLength);
console.log(JSON.stringify(vegetables)); 

// g. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
console.log(JSON.stringify(food)); 

// h. Remove 2 elements from your new array starting at index 4.
food.splice(4, 2);
console.log(JSON.stringify(food)); 

// i. Reverse your array.
food.reverse();
console.log(JSON.stringify(food)); 

// j. Turn the array into a string.
var foodString = food.toString();
console.log(JSON.stringify(foodString)); 