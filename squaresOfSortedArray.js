//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

//Brute
var sortedSquares = function(nums) {
    let temp = []
    
    for(let i = 0; i < nums.length; i++){
        let squared = nums[i] ** 2
        
        temp.push(squared);
    }
    let output = temp.sort((a,b) => a - b)
    
    return output
};

//faster double pointer - great for sorted array
var sortedSquares = function(nums) {
    const output = [];
        // define pointers
        let left = 0;
        let right = nums.length - 1;
        // index in output array we will add values
        let i = right;
        while (left <= right) {
            // get squared values
            const leftVal = nums[left] ** 2;
            const rightVal = nums[right] ** 2;
            //compare squared values this matters for negative inputs. 
            if(leftVal > rightVal) {
                // add element to output[i], then subtract 1 
                // from i
                // move pointer closer to the opposite side
                output[i--] = leftVal;
                left++;
            } else {
                output[i--] = rightVal;
                right--;
            } //same as 
              //output[i] = rightVal;
              // i--;
              //right--;
        }
        return output;
};
