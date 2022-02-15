//import prompt-sync to allow console user input, however,
// prompt-sync only allows us to CREATE a prompting function
// so it is created with a new variable 'prompt'

import PromptSync from "prompt-sync";
const prompt = PromptSync();




// a function is created to determine whether a number is prime or not.
// it creates a loop, starting with the smallest prime number and
// ending with the parameter number. It then increments by 1, checking
// to see if the parameter can be divided by any of the numbers below it.
// If it cannot be divided by any of it's lower numbers, it must be
// divisibale by only itself and 1, hence prime.
// The function returns the number if it is prime and above value of 1.

export const checkPrime = function(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false; 
        };
    };
    return num > 1;
};



// create an empty array, in which to store prime numbers

export const primeNumbers = [];




// a function to find the next prime number after the requested number.
// It reads the last number in the array, adds one and checks each number.
// If it does not find a prime, it increments the number to check by one,
// and runs the check again.
// Once a prime is identified, it returns the number.

export const findNextPrime = function() {
    let num = primeNumbers[primeNumbers.length - 1] + 1;
    for (let i = 2; i; i++) {
        if (checkPrime(num)) {
            return num;
        } else {
            num += 1;
        };
    };
    return num;
};




// Another loop is used to create the array of results.
// First it calls the checkPrime function, passing in num as an
// argument. If checkPrime is 'true' and returns the number, it is
// added to the array.
// Once this loop is complete, it calls the findNextPrime function
// and adds the resulting number to the array.

export const primeNumbersArray = function(num) {
    for (let i = 1; i <= num; i++) {
        if (checkPrime(i)) {
            primeNumbers.push(i);
        };
    };
    primeNumbers.push(findNextPrime());
    primeMultiplication(num);
};





// An empty array is created to store results of another function.
// It is created here so it is accessible by other functions.

export const results = [];




// A prime multiplication function is created.
// It loops through the prime numbers array, and pushes
// the prime number as an array (this is for the purposes of the
// table formatting).
// This next bit is a bit complicated - it maps the primeNumbers
// array, multiplies each number within the array by the current
// prime number, and pushes the result (after spreading as maps
// always return an array) to the new array created on the line
// above it.
// For example, if the number was 2 and primeNumbers = [2, 3, 5],
// results array would = [2, 4, 6, 10] then repeat the loop.
// The 2 at the beginning is for the table formatting.

export const primeMultiplication = function() {
    for (let i = 0; i < primeNumbers.length; i++) {
        results.push([primeNumbers[i]]);
        results[i].push(...primeNumbers.map(x => x * primeNumbers[i]));
    };
};




// Finally, the main functionality.
// If the input is valid:
// Prompt is called to allow the console user to input their number.
// This number is passed in to create the array of prime numbers,
// which also calls the multiplication result method.
// For formatting reasons, tableInputs duplicates primeNumbers but prefixxed
// with an asterix.
// A table is produced, displaying the results within a table.
// Otherwise, it directs the user to enter a valid number.

// Please ignore the indices from the table, only the main body cells are relevant.

const prime = prompt("Please input number ");

if (prime > 1) {
    primeNumbersArray(prime);
    const tableInputs = ["*", ...primeNumbers];
    console.table([tableInputs, ...results]);
} else {
    console.log("A prime must be greater than 1");
};