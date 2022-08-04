// Function to reverse strings
const reverse = function(data) {
  return data.split('').reverse().join('');
};
// Helper function to reduce clutter in results
const checkIncludesWord = function(text, search) {
  return !text.includes(search) ? reverse(text).includes(search) : true;
};
// Function to get diagonal results from an array.
const shiftArray = function(array) {
  let workingArray = array;
  const rows = array.length;
  const cols = array[0].length;
  const colsMax = (cols * 2) - 2;
  const result = [];

  // Passes
  // Fist pass processes one diagonal direction
  // Second pass processes the other
  for (let p = 0; p < 2; p++) {
    // Loop through the rows
    for (let r = 0; r < rows; r++) {
      const loopResult = [];
      // Loop through the total columns needed
      // - 2 to deal with the overlap
      for (let c = 0; c < colsMax; c++) {
        // the column offset is set by the row
        // this way, it's always 1 more.
        
        if (c >= r && c < r + cols) {
          // uses the row to correct the working arrays index position diagonally
          loopResult.push(workingArray[r][c - r]);
        } else {
          loopResult.push(` `);
        }
      }
      result.push(loopResult);
    }
    workingArray = array.reverse();
  }

  return result;
};

// Transposition function from the previous exercise
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

// Word Search Function
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
  // Check the strings diagonally
  const diagonalJoin = transpose(shiftArray(letters)).map(ls => ls.join(''));
  for (const l of diagonalJoin) {
    if (checkIncludesWord(l,word)) {
      return true;
    }
  }

 
  //  ---------------------------ANOTHER FUNCTION TO DO DIAGONAL------------------------
  // const diagonal = function(array, bottomToTop) {
  //   const yLength = array.length;
  //   const xLength = array[0].length;
  //   const maxLength = Math.max(xLength, yLength);
  //   let finalArray = [];

  //   for (let i = 0; i <= 2 * (maxLength - 1); i++) {
  //     const temp = [];
  //     for (let j = yLength - 1; j >= 0; j--) {
  //       let x = i - (bottomToTop ? yLength - j : j);
  //       if (x >= 0 && x < xLength) {
  //         temp.push(array[j][x]);
  //       }
  //     }
  //     if (temp.length > 0) {
  //       finalArray.push(temp.join(''));
  //     }
  //   }
  //   return finalArray;
  // };

  // const diagonalTop = diagonal(horizontalJoin, false);
  // const diagonalBottom = diagonal(horizontalJoin, true);

  // ---------------PROOF OF CONCEPT FOR ABOVE FUNCTION-------------------
  
  // ["ABCD","EFGH","IJKL"];

  // ABCD
  //  EFGH
  //   IJKL
  // ------
  // IJKL
  //  EFGH
  //   ABCD

  //   ABCD
  //  EFGH
  // IJKL
  // A
  // EB
  // IFC
  // JGD
  // KH
  // L

  // I
  // JE
  // KFA
  // LGB
  // HC
  // D
  // ------------------------ATTEMPT AT DIAGONAL-----------------------------

  // let disassembling = true;
  // let colStep = 0;
  // let rowStep = 0;
  // const cols = letters[0].length;
  // const rows = letters.length;
  // const diagonalResult = [];
  // while (disassembling) {
  //   let col = colStep >= cols ? 0 : colStep;
  //   let row = rowStep;
    
  //   let slicing = true;
  //   const slice = [];
  //   while (slicing) {
  //     console.log(`row`, row, `col`, col);
  //     const char = letters[row++][col++];
  //     slice.push(char);
  //     if (row >= rows || col >= cols)
  //       slicing = false;
  //   }
  //   diagonalResult.push(slice);
  //   if (colStep >= cols) {
  //     colStep++;
  //   } else {
  //     rowStep++;
  //     if (rowStep === rows) {
  //       disassembling === false;
  //     }
  //   }
  // }
  // console.log(diagonalResult);
  // for (const dia of diagonalResult) {
  //   if (checkIncludesWord(dia, word)) {
  //     return true;
  //   }
  // }

  return false;
};




module.exports = wordSearch;



