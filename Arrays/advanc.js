"use strict";
/*getArrayLength  */
console.log("getArrayLength");
function getArrayLength(arr) {
    return arr.length;
  }
  
  const arr7 = [1, 2, 3, 4, 5];
  console.log("Length of arr7:", getArrayLength(arr7)); 
  
  /*iterateArrayForOf  */
console.log("iterateArrayForOf");
function iterateArrayForOf(arr) {
    let result = [];
    for (const element of arr) {
      result.push(element);
    }
    console.log(result.join(" "));
  }
  
  const arr8 = [1, 2, 3, 4, 5];
  iterateArrayForOf(arr8);
  
  
  /*iterateArrayForIn  */
console.log("iterateArrayForIn");
function iterateArrayForIn(arr) {
  let result = [];
  for (const index in arr) {
    result.push(arr[index]);
  }
  console.log(result.join(" "));
}

const arr9 = [1, 2, 3, 4, 5];
iterateArrayForIn(arr9);

  
  
  
   /*isArrayCheck  */
console.log("isArrayCheck");
  function isArrayCheck(obj) {
    return Array.isArray(obj);
  }
  
  const arr10 = [1, 2, 3, 4, 5];
  const obj10 = { a: 1, b: 2 };
  console.log("Is arr10 an array?", isArrayCheck(arr10)); 
  
  
  /*createArrayWithOf  */
console.log("createArrayWithOf");
  function createArrayWithOf() {
    return Array.of(1, 2, 3);
  }
  
  const arr111 = createArrayWithOf();
  console.log("New array created with Array.of():", arr111); 