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

console.log(checkPrime(7), checkPrime(9));