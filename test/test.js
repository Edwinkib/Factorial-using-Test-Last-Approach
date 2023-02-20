// Kiberu Edwin Ronald

const { assert } = require('chai');
const factorial = require('../factorial');

describe('returns factorial of a number', () => {
  it('factorial(0) = 1', () => {
    assert.equal(factorial(0), 1);
  });

  it('factorial(1) = 1', () => {
    assert.equal(factorial(1), 1);
  });

  it('factorial(3) = 6', () => {
    assert.equal(factorial(3), 6);
  });

  it('factorial(4) = 24', () => {
    assert.equal(factorial(4), 24);
  });
});
