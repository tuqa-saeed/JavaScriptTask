"use strict"

/* getObjectProperties */
function getObjectProperties(obj) {
    return Object.keys(obj);
  }
  
  const myObject = { a: 1, b: 2, c: 3 };
  console.log(getObjectProperties(myObject)); 

  /* getNumberOfProperties */
  function getNumberOfProperties(obj) {
    return Object.keys(obj).length;
  }
  
  const Object1 = { a: 1, b: 2, c: 3 };
  console.log(getNumberOfProperties(Object1)); 

  /*combineObjects  */

  function combineObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  const obj1 = { a: 1, b: 2 };
  const obj2 = { c: 3, d: 4 };
  console.log(combineObjects(obj1, obj2)); 

  /* convertPropertiesToUppercase */

  function convertPropertiesToUppercase(obj) {
    const newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj[key].toString().toUpperCase(); 
      }
    }
    return newObj;
  }
  
  const Objectcon = { name: "John", age: 30, city: "New York" };
  console.log(convertPropertiesToUppercase(Objectcon)); 
 

  /* getNonNullProperties */

  function getNonNullProperties(obj) {
    const newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== null) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
  
  const Objectnull = { a: 1, b: null, c: 3 };
  console.log(getNonNullProperties(Objectnull)); 

  /*sortPropertyNames  */
  function sortPropertyNames(obj) {
    return Object.keys(obj).sort();
  }
  
  const Objectsort = { c: 3, a: 1, b: 2 };
  console.log(sortPropertyNames(Objectsort)); 