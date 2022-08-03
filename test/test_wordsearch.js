const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

const wordArray = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch(wordArray, 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch(wordArray, 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true is the reversed word is present", function() {
    const result = wordSearch(wordArray, 'LAUQF');

    assert.isTrue(result);
  });
});
