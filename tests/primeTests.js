import assert from 'assert';
import {checkPrime, primeNumbers, primeNumbersArray} from '../main/prime.js';

describe('Prime Numbers', function() {
    
    it('should recognise a prime', function () {
        assert.strictEqual(checkPrime(2), true);
        assert.strictEqual(checkPrime(3), true);
        assert.strictEqual(checkPrime(5), true);
        assert.strictEqual(checkPrime(23), true);
      });

    it('should recognise a large prime', function () {
        assert.strictEqual(checkPrime(997), true);
        assert.strictEqual(checkPrime(757), true);
        assert.strictEqual(checkPrime(617), true);
        assert.strictEqual(checkPrime(7919), true);
      });

    it('should not accept invalid input', function () {
        assert.strictEqual(checkPrime(1), false);
        assert.strictEqual(checkPrime(-3), false);
        assert.strictEqual(checkPrime(-1200), false);
      });
    
    it('should start with empty prime numbers array', function () {
      assert.deepStrictEqual(primeNumbers, []);
    });

    it('should push primes to array', function () {
        primeNumbersArray(10);
        assert.deepStrictEqual(primeNumbers, [2, 3, 5, 7]);
      });

    it('should handle large prime numbers', function () {
        primeNumbersArray(50000);
        assert.strictEqual(primeNumbers.length, 5137);
      });
      
});