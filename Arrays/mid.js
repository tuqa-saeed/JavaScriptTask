"use strict";
/* reverse */
console.log("reverse");
const fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); 

/* concat */
console.log("concat");
const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];
const combinedArray = arr11.concat(arr22);
console.log(combinedArray); 

/* slicedArray */
console.log("slicedArray");
const nuumbers = [1, 2, 3, 4, 5, 6];
const slicedArray = nuumbers.slice(2, 4); 
console.log(slicedArray); 

/* splice */
console.log("splice");

const numbeers = [1, 2, 3, 4, 5];
const removedElements = numbeers.splice(1, 1); 

console.log(removedElements); 
  

/* indexOf */
console.log("indexOf");
const numbbers = [1, 2, 3, 4, 5];
const index = numbbers.indexOf(3);
console.log(index); 






/* join */
console.log("join");
const nummbers = [1, 2, 3, 4, 5];
const joinedString = nummbers.join(","); 
console.log(joinedString); 

/* split */
console.log("split");
const strr = "apple,banana,cherry";
const fruitArray = strr.split(","); 
console.log(fruitArray); 
