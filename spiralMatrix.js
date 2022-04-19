/*
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
3 columns 3 rows that spiral - [1,2,3]
                               [8,9,4]
                               [7,6,5]
*/

//slow
var generateMatrix = function(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(''));
    
    let counter = 1;
    let startCol =0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while(startCol <= endCol && startRow <= endRow){
        for(let i= startCol; i<= endCol; i++){
            result[startRow][i] = counter;
            counter++
        }
        startRow++;
        for(let j = startRow; j <= endRow; j++){
            result[j][endCol] = counter;
            counter++
        }
        
        endCol--;
        for(let i = endCol; i >= startCol; i--){
            result[endRow][i] = counter;
            counter++;
        }
        
        endRow--;
        for(let i = endRow; i >= startRow; i--){
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return result;
};

//faster
var generateMatrix = function(n) {
  let m = n, i;
  let k = 0, l = 0, value = 1;

  let result = [];
  for (i = 0; i < n; i++) {
    result[i] = new Array(n);
  }

  while(k < m && l < n) {
    for(i = l; i < n; i++) {
      result[k][i] = value++;
    }
    k++;

    for(i = k; i < m; i++) {
      result[i][n - 1] = value++;
    }
    n--;

    for(i = n - 1; i >= l; i--) {
      result[m - 1][i] = value++;
    }
    m--;

    for(i = m - 1; i >= k; i--) {
      result[i][l] = value++;
    }
    l++;
  }
  return result;
}
