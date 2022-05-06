/*
Given an m x n matrix, return all elements of the matrix in spiral order.


*/




var spiralOrder = function(matrix) {
  let n = matrix.length;
  let m = (matrix[0] || []).length;
  let res = [];
  let x1 = 0;
  let x2 = m - 1;
  let y1 = 0;
  let y2 = n - 1;
  while (x1 <= x2 && y1 <= y2) {
    for (let x = x1; x <= x2; x++) res.push(matrix[y1][x]);
    for (let y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
    if (x1 < x2 && y1 < y2) {
      for (let x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
      for (let y = y2; y > y1; y--) res.push(matrix[y][x1]);
    }
    x1++;
    x2--;
    y1++;
    y2--;
  }
  return res;
};

/* Fastest and best? */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length == 0) return [];
  let res = [];
  let row1 = 0, col1 = 0, row2 = matrix.length-1, col2 = matrix[0].length-1;
    
  while (row1 <= row2 && col1 <= col2) {
    // upper perimeter
    for (let col = col1; col <= col2; col++) {
      res.push(matrix[row1][col]);    
    }
    // right perimeter
    for (let row = row1+1; row <= row2; row++) {
      res.push(matrix[row][col2]);
    }
    if (row1 < row2 && col1 < col2) {
       // bottom perimeter
      for (let col = col2-1; col >= col1; col--) {
        res.push(matrix[row2][col]);
      }
      // left perimeter
      for (let row = row2-1; row > row1; row--) {
        res.push(matrix[row][col1]);
      }    
    }
     row1++, col1++, row2--, col2--;
  }
    
  return res;
};
