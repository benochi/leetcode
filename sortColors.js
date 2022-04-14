/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/

//Input: nums = [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]

var sortColors = function(nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    let red = 0;
    let white = 0;
    let blue = nums.length - 1;
    
    while(white <= blue){
        const n = nums[white]
        
        if (n === 0) {
            swap(white, red);
            red++;
            white++;
        } else if (n === 2) {
            swap(white, blue);
            blue--;
          } else {
            white++;
      }
    }
    
};

//for if func is returned instead of modifying in place. 
var sortColors = function(nums) {
    let red = []
    let white = []
    let blue = []
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            red.push(nums[i])
        } else if (nums[i] === 1){
            white.push(nums[i])
        } else if (nums[i] === 2){
            blue.push(nums[i])
        }
    }
    let output = red.concat(white).concat(blue)

    return output;
};
