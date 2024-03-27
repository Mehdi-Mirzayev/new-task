//////////////////////////////////////////////////////////////////1. daxil edilen eded sade yoxsa murekkebdi!

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
    
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
    
//     return true;
// }

// function checkNumberType() {
//     let number = +prompt("Bir eded daxil edin:");
    
    
    
//     if (isPrime(number)) {
//         console.log(number + ",Daxil etdiyiniz eded Sade ededdir.");
//     } else {
//         console.log(number + ",Daxil etdiyiniz eded Murekkeb ededdir.");
//     }
// }

// checkNumberType();


//////////////////////////////////////////////////////////////////////////////////2.Daxil olunan ededin mukemmel olub olmagini tapin.


// let number = parseInt(prompt("bir eded daxil edin"));


// function isPerfectNumber(number) {
//     let sum = 0;

    
//     for (let i = 1; i < number; i++) {
//         if ( number % i === 0) {
//             sum += i;
//         }
//     }

    
//     return sum === number;
// }


// if (isPerfectNumber(number)) {
//     console.log(number + " mukemmel bir ededdir.");
// } else {
//     console.log(number + " mukemmel bir eded deyildir.");
// }

////////////////////////////////////////////////////////////////////////////////3. Daxil olunan 2 ədəd arasındakı mükəmməl ədədləri göstərin.


// let startNumber = +prompt("Birinci ededi girin:");
// let endNumber = +prompt("Ikinci ededi girin:");


// function isPerfectNumber(number) {
//     let sum = 0;

    
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

    
//     return sum === number;
// }


// function findPerfectNumbers(start, end) {
//     let perfectNumbers = [];

   
//     for (let i = start; i <= end; i++) {
//         if (isPerfectNumber(i)) {
//             perfectNumbers.push(i);
//         }
//     }

//     return perfectNumbers;
// }


// let result = findPerfectNumbers(startNumber, endNumber);
// if (result.length === 0) {
//     console.log("verdiyiniz araliqda mukemmel eded tapilmadi.");
// } else {
//     console.log("verdiyiniz araliqda mukemmel eded var.: " + result.join(", "));
// }

//////////////////////////////////////////////////////////////////////////////////4.Daxil olunan 2 ədəd arasındakı sadə ədədləri göstərin.


// let startNumber = +prompt("Birinci ededi daxil edin:");
// let endNumber = +prompt("Ikinci ededi daxil edin:");


// function isPrimeNumber(number) {
   
//     if (number <= 1) {
//         return false;
//     }

    
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }


// function findPrimeNumbers(start, end) {
//     let primeNumbers = [];

    
//     for (let i = start; i <= end; i++) {
//         if (isPrimeNumber(i)) {
//             primeNumbers.push(i);
//         }
//     }

//     return primeNumbers;
// }


// let result = findPrimeNumbers(startNumber, endNumber);
// if (result.length === 0) {
//     console.log("verdiyiniz araliqda sade eded tapilmadi.");
// } else {
//     console.log("verdiyiniz araliqda sade ededler: " + result.join(", "));
// }

//////////////////////////////////////////////////////////////////////////////////5.Daxil olunan 2 ədəd arasındakı sonu 7 ilə bitən ədədləri göstərin.


// let startNumber = +prompt("Birinci ededi daxil edin:");
// let endNumber = +prompt("Ikinci ededi daxil edin:");


// function endsWithSeven(number) {
//     return number % 10 === 7; 
// }


// function findNumbersEndingWithSeven(start, end) {
//     let numbers = [];

    
//     for (let i = start; i <= end; i++) {
//         if (endsWithSeven(i)) {
//             numbers.push(i);
//         }
//     }

//     return numbers;
// }


// let result = findNumbersEndingWithSeven(startNumber, endNumber);
// if (result.length === 0) {
//     console.log("verdiyiniz araliqda 7 ile biten eded tapilmadi.");
// } else {
//     console.log("verdiyiniz araliqda 7 ile biten ededler " + result.join(", "));
// }
