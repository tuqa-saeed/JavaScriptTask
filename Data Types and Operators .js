 "use strict"

/* ● Cash flow ratio 
Sample Input: cash: 1000, current liabilities: 500  
Sample Output: 2  */

let Cash_flow_from_core_operation=1000;
let Current_liabilities=500;
let OCF_Ratio =Cash_flow_from_core_operation / Current_liabilities;
console.log( "OCF_Ratio : " +" "+ OCF_Ratio );


/* Net income 
Sample Input: revenues: 1000, expenses: 500  
Sample Output: 500 */
 
let Revenues = 1000;
let Expenses = 500;
let net_Income = Revenues - Expenses;
console.log("net_Income:"+" "+ net_Income); 

/*  Total assets 
Sample Input: liabilities: 1000, equity: 500  
Sample Output: 1500 */

let liabilities=1000;
let equity= 500;
let Total_assets =liabilities+equity;
console.log("Total_assets:"+" "+Total_assets); 

/* Net income (using profit margin and sales) 
Sample Input: profit: 1000, sales: 500  
Sample Output: 500000  */

let profit_margin = 1000;
let sales = 500;
let netIncome_ProfitMargin = profit_margin * sales;
console.log("netIncome_ProfitMargin: "+" "+netIncome_ProfitMargin); 


/* ●Average  
Sample Input: numbers: 7, 9, 2 
Sample Output: 6  */

const numbers = [7, 9, 2];
const sum = numbers[0] + numbers[1] + numbers[2]; 
const average = sum / numbers.length; 
console.log(average); 


/* ● Discount 
Sample Input: price: 150, discount: 30% 
Sample Output: 105 */ 
const price = 150;
const discount = 30;
const discountedPrice = price - (price * (discount / 100));
console.log(discountedPrice); 


/* ● Age limit (older than 18 and less than 30) 
Sample Input: 20 
Sample Output: true  */
const age = 20;
const isAgeValid = age > 18 && age < 30;
console.log(isAgeValid); 


/* ● Exponential 
Sample Input: number 1: 2, number 2: 3 
Sample Output: 8  */

const base = 2;
const exponent = 3;
const result = Math.pow(base, exponent);
console.log("Exponential :" + result); 
/* ● Remainder 
Sample Input: number 1: 10, number 2: 4 
Sample Output: 2 */

const dividend = 10;
const divisor = 4;
const remainder = dividend % divisor;
console.log(remainder); 
