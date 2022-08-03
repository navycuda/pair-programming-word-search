const reverse = function(data) {
  return data.split('').reverse().join('');
};
const checkIncludesWord = function(text, search) {
  return !text.includes(search) ? reverse(text).includes(search) : true;
};

const transpose = function(matrix) {
  const results = [];
  const rows = matrix[0].length;
  const cols = matrix.length;

  for (let r = 0; r < rows; r++) {
    const result = [];
    for (let c = 0; c < cols; c++) {
      result.push(matrix[c][r]);
    }
    results.push(result);
  }
  return results;
};

const wordSearch = (letters, word) => {

  // Check the horizontal strings for the search word
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (checkIncludesWord(l,word)) {
      return true;
    }
  }
  // Check the vertical strings for the search word
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (checkIncludesWord(l,word)) {
      return true;
    }
  }

  // const diagonalJoin = letters.map(ls => ls.join(''));
  // for (const l of diagonalJoin) {
  //     for (const ch of l) {
  //         if ()
  //     }
  // }

  let disassembling = false;
  while (disassembling) {
    let col = 0;
    let row = 0;
    const cols = letters[0].length;
    const rows = letters.length;



  }

  return false;
};
// let disassembling = true;
// while (disassembling) {
//  let col = 0;
//  let row = 0;

// // do stuff, row ++ or col ++
// }
//            row col
//            [0] [0]                                [0][7]
// wordSearch([['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//             ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//             ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//             ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//             ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//             ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//             ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//             ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//             ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']],
//            [8][0]                                [8][7]
//       'SEINFELD');

// for loop twice througgh to get each character in each array
// character = j
// if j-1 or j+1 is in the next array, push that character to a result
// result.join('')
module.exports = wordSearch;

// describe("#wordSearch()", function() {
//   it("should return false if the word is not present", function() {
//     const result = wordSearch([
//       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       `awcfqual`
//       ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//       `seinfeld`
//       ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       `yfcfqual
//       ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//       `hmjtevrg`
//       ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//     ], 'FRANK')

//     assert.isFalse(result);
//   });

//   it("should return true if the word is present", function() {
//     const result = wordSearch([
//       ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//       ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//       ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//       ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//       ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//       ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//       ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//       ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//     ], 'SEINFELD')

//     assert.isTrue(result);
//   });
// });