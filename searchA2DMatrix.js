//find a value in a matrix and return true if found false if not. 
/*
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
*/

var searchMatrix = function(matrix, target) {
  let y = matrix.length
  let row = 0
  let col = matrix[0].length - 1
    
  while (row < y) {
    let cell = matrix[row][col]
    if (cell === target) return true
    else if (cell > target) col--;
    else row++;
  }
  return false
};
