"use strict";
/*forEach  */
console.log("forEach");
const nnumber = [1, 2, 3, 4, 5];

let resultt = [];
nnumber.forEach(number => resultt.push(number));

console.log(resultt);  // [1, 2, 3, 4, 5]

/*map  */
console.log("map")
const numberss = [1, 2, 3, 4, 5];

const squaredNumbers = numberss.map(number => number * number);

console.log(squaredNumbers); 

/*filter  */
console.log("filtermap")
const numbersss = [1, 2, 3, 4, 5];

const evenNumberss = numbersss.filter(number => number % 2 === 0);

console.log(evenNumberss); 


/*reduce  */
console.log("reduce")
const numberssss = [1, 2, 3, 4, 5];

const ssumm = numberssss.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 

console.log(ssumm); 

/*sort  */
console.log("sort")
const strings = ["apple", "banana", "cherry"];

strings.sort(); 

console.log(strings); 