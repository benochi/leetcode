//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
 let nonZeroIndex = 0;

    for(let i=0; i < nums.length; i++){
        if(nums[i] != 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex ++;
        }
    }
    
    //put zeroes at end that where overwritten in nums. 
    for(let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
