/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
*/

//slow
var rotate = function(matrix) {
  for(let row =0; row < matrix.length; row++){
    for(let column = 0; column < row; column++){
      let temp = matrix[row][column];
      matrix[row][column] = matrix[column][row];
      matrix[column][row] = temp;
      }
  }
  for(let i = 0; i < matrix.length; i++){
    matrix[i].reverse();
  }
  return matrix
};

//faster 
var rotate = function(matrix) {
  for(let row =0; row < matrix.length; row++){
    for(let column = 0; column < row; column++){
      let temp = matrix[row][column];
      matrix[row][column] = matrix[column][row];
      matrix[column][row] = temp;
      }
  }
    
  return matrix.map(row => row.reverse())
};
