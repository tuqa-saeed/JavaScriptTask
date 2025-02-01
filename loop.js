"use strict";

// طباعة الأرقام من 1 إلى 100 مع استبدال المضاعفات بـ Fizz وBuzz
for (let number = 1; number <= 100; number++) {
    let result = "";
    if (number % 3 === 0) result += "Fizz";
    if (number % 5 === 0) result += "Buzz";
    console.log(result || number);
}

// دالة للتحقق مما إذا كان العدد من مضاعفات 3 أو 5 وإرجاع النص المناسب
function getFizzBuzzLabel(number) {
    let result = "";
    if (number % 3 === 0) result += "Fizz";
    if (number % 5 === 0) result += "Buzz";
    return result || number;
}

console.log(getFizzBuzzLabel(1)); 
console.log(getFizzBuzzLabel(15));

// دالة لاستدعاء FizzBuzz بشكل متكرر حتى 100 باستخدام الاستدعاء الذاتي
function fizzBuzzRecursive(currentNumber) {
    if (currentNumber > 100) return;
    console.log(getFizzBuzzLabel(currentNumber));
    fizzBuzzRecursive(currentNumber + 1);
}

fizzBuzzRecursive(1);

// دالة لتحويل مبلغ معين إلى أوراق نقدية باستخدام فئات محددة
function convertAmountToBanknotes(amount, denominations) {
    const banknotesUsed = [];
    for (let note of denominations) {
        while (amount >= note) {
            banknotesUsed.push(note);
            amount -= note;
        }
    }
    return banknotesUsed;
}

console.log(convertAmountToBanknotes(57, [25, 10, 5, 1]));

// دالة لحساب عدد مرات تكرار حرف معين في سلسلة نصية
function countCharacterOccurrences(text, character) {
    const lowercaseText = text.toLowerCase();
    const lowercaseChar = character.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowercaseText.length; i++) {
        if (lowercaseText[i] === lowercaseChar) {
            count++;
        }
    }
    return count;
}

console.log(countCharacterOccurrences("Coding Academy by Orange", "o"));

// طباعة الأرقام من 0 إلى 20
for (let num = 0; num <= 20; num++) console.log(num);

// طباعة الأعداد الفردية من 3 إلى 29
for (let num = 3; num <= 29; num += 2) console.log(num);

// طباعة الأعداد الزوجية من 12 إلى -14
for (let num = 12; num >= -14; num -= 2) console.log(num);

// طباعة مضاعفات الرقم 3 من 50 إلى 20
for (let num = 50; num >= 20; num--) {
    if (num % 3 === 0) console.log(num);
}

const text = 'CodingAcademy';
const valuesArray = [7, 500, 'KH404', 'black', 36];

// طباعة عناصر المصفوفة
for (let value of valuesArray) console.log(value);

// طباعة حروف النص بالعكس
for (let i = text.length - 1; i >= 0; i--) console.log(text[i]);

const numbersArray = [7, 23, 18, 9, 13, 38, -10, 12, 0, 124];
const evenNumbers = [];
const oddNumbers = [];

// تصنيف الأعداد إلى زوجية وفردية
for (let number of numbersArray) {
    if (number % 2 === 0) evenNumbers.push(number);
    else oddNumbers.push(number);
}

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// دالة لإنشاء وجبات طعام عشوائية بعدد معين
function generateMeals(mealCount) {
    const proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
    const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
    const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
    const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
    const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

    const meals = [];
    const uniqueMealSet = new Set(); // تتبع التركيبات الفريدة

    for (let i = 0; i < mealCount; i++) {
        let meal;
        do {
            const protein = proteins[Math.floor(Math.random() * proteins.length)];
            const grain = grains[Math.floor(Math.random() * grains.length)];
            const vegetable = vegetables[Math.floor(Math.random() * vegetables.length)];
            const beverage = beverages[Math.floor(Math.random() * beverages.length)];
            const dessert = desserts[Math.floor(Math.random() * desserts.length)];

            meal = { protein, grain, vegetable, beverage, dessert };
        } while (uniqueMealSet.has(JSON.stringify(meal))); // التأكد من عدم تكرار الوجبات

        meals.push(meal);
        uniqueMealSet.add(JSON.stringify(meal)); // إضافة الوجبة إلى المجموعة الفريدة
    }

    return meals;
}

const myGeneratedMeals = generateMeals(3); // إنشاء 3 وجبات
console.log(myGeneratedMeals);
