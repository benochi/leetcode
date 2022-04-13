/*Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
 */
var findDuplicate = function(nums) {
    let map = {};
    //build map object and if value is in map, increment.
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]) map[nums[i]] +=1;
        else map[nums[i]] = 1;
    }
    //search hashmap for values greater than 1 and return key of value. 
    for(let [key, value] of Object.entries(map)){
        if(value > 1) return key;
    }
    return -1
};

//testcases [1,1,2,3,4,5,6] -1 , [2,2,2,2,2,2,2] - 2
