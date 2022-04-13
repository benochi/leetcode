/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let map = {};
    //build map object and if value is in map, set to false.
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]) map[nums[i]] +=1;
        else map[nums[i]] = 1;
    }
    //search hashmap for false value and return key of false value. 
    for(let [key, value] of Object.entries(map)){
        if(value > 1) return key;
    }
    return -1
};
