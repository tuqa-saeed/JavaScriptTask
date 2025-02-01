"use strict"
const yearOfBirth = prompt("Enter your birth year :");
const currentYear = new Date().getFullYear();

if (isNaN(parseInt(yearOfBirth))) {
    console.log("Invalid input. Please enter a number.");
} else { 
    let age = currentYear - parseInt(yearOfBirth);

    if (age < 0) {
        console.log("Invalid input. Birth year cannot be in the future.");
    } else if (age > 60) {
        console.log("You may join the seniors' program.");
    } else if (age > 30) {
        console.log("You are not eligible.");
    } else if (age >= 18) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
}
/* function switchCase */
    function switchCase(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    }
    let inputString = "Coding Academy by Orange";
    let camelCaseString = switchCase(inputString);
    console.log(camelCaseString); 
    
     /* Remove spesific elemnt */
    function Remove_spesific_elemnt(arr, element) {
        return arr.filter(item => item !== element);
    }
    
    let inputArray = ["Coding", "Academy", "By", "Orange"];
    let elementToRemove = "By";
    let updatedArray = Remove_spesific_elemnt(inputArray, elementToRemove);
    console.log(updatedArray); 
    
    


/* odd*/
function isOddOrEven(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isOddOrEven(3)); 

/* isNumber  */
function isNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

console.log(isNumber("5353")); 


/*max   */
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}


console.log(max(3, 5)); 


/*  tringle*/
function triangleType(a, b, c) {
    if (a === b && b === c) {
        return 'Equilateral';
    } else if (a === b || b === c || a === c) {
        return 'Isosceles';
    } else {
        return 'Scalene';
    }
}

console.log(triangleType(3, 3, 3)); 

/* Range function */
function isInRange(number, min, max) {
    return number >= min && number <= max;
}
console.log(isInRange(5, 1, 10)); 


/* year*/
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2025)); 

