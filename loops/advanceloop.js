"use strict";
console.log("Q-10");

/* 2d arr */
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let m = 0; m < matrix.length; m++) {
  for (let n = 0; n < matrix[m].length; n++) {
    console.log(matrix[m][n]);
  }
}
console.log("Q-11");
/*  */
const arr1 = [1, 2, 3, 4, 5];

for (let i = arr1.length - 1; i >= 0; i--) {
  console.log(arr1[i]); 
}
console.log("Q-12");

/*  */
const arrii = [1, 2, 3, 4, 5];
const step = 2;

for (let j = 0; j < arrii.length; j += step) {
  console.log(arrii[j]); 
}
console.log("Q-13");

/* freq */
function frequencyOfNumber(arrr, num) {
    let frequency = 0;
    for (let t = 0; t < arrr.length; t++) {
      if (arrr[t] === num) {
        frequency++;
      }
    }
    return frequency;
  }
  
  const arrry = [1, 2, 1, 3, 2, 1];
  const num = 1;
  console.log(frequencyOfNumber(arrry, num)); 
  console.log("Q-14");

  /* heros */

  const heros = [
    { name: 'Iron Man', power: 'Tech' },
    { name: 'Spider-Man', power: 'Spider abilities' },
    { name: 'Thor', power: 'Godly powers' },
    { name: 'Hulk', power: 'Super strength' }
  ];
  
  const newHeros = heros.map((hero, index) => {
    return {
      hero: hero.name, 
      power: hero.power,
      id: index 
    };
  });
  
  console.log(newHeros);
  console.log("Q-15");
  /* filterLongWords */
  function filterLongWords(words) {
    return words.filter(word => word.length >= 7);
  }
  
  const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
  const ooutput = filterLongWords(inputWords);
  console.log(ooutput); 
  console.log("Q-16");


  /* sumSquaredDivisibleBy5 */

const nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumSquaredDivisibleBy5 = nnumbers.reduce((summm, num) => {
  if (num % 5 === 0) {
    return summm + (num ** 2);
  }
  return summm;
}, 0);

console.log(sumSquaredDivisibleBy5); // 625

