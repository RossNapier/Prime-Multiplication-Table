import assert from 'assert';
import {checkPrime} from '../main/prime.js';

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
});