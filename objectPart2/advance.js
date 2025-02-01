
/*  assign*/
const obj11 = { name: "Adam", age: 25 };
const obj22 = { gender: "male" };

const mergedObj = Object.assign({}, obj11, obj22);
console.log(mergedObj); 


/*frozenObj  */
const frozenObj = { name: "Adam", age: 25 };
Object.freeze(frozenObj);

frozenObj.age = 30; 
delete frozenObj.name; 
console.log(frozenObj); 




/* sealedObj */
const sealedObjj1 = { name: "Adam", age: 25 };
Object.seal(sealedObjj1);

sealedObjj1.age = 25; 
sealedObjj1.gender = "male"; 
delete sealedObjj1.name; 
console.log(sealedObjj1); 

