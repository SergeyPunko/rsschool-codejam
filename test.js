const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./tasks/sumOfOther.js');

describe('sumOfOtherTests:', () => {
  it('1', () => {
    const test = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(test, [8, 7, 6, 9]);
  });

  it('2', () => {
    const test = sumOfOther([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(test, [20, 19, 18, 17, 16, 15]);
  });

  it('3', () => {
    const test = sumOfOther([-1, 4, 0, -10]);
    assert.deepEqual(test, [-6, -11, -7, 3]);
  });
});
