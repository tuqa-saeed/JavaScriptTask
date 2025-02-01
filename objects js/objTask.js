"use strict";
/*  */
const person = {
    name: "Adam",
    age: 25,
    gender: "male"
  };
  
  console.log(person.name, person.age, person.gender); 

  /*  */
  const person1 = {
    name: "Adam",
    age: 25
  };
  
  person.gender = "male";
  
  console.log(person1); 

  /*  */
  const person2 = {
    name: "Adam",
    age: 25
  };
  
  person2["gender"] = "male";
  
  console.log(person2); 

  /*  */
  const person3 = {
    name: "Adam",
    age: 25
  };
  
  console.log(person3.name); 

  /*  */
  const person4 = {
    name: "Adam",
    age: 25
  };
  
  console.log(person4["name"]); 