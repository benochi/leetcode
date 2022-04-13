//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//You must implement a solution with a linear runtime complexity and use only constant extra space.

//hashMap O(n) time and O(n) space

var singleNumber = function(nums) {
    let map = {};
    //build map object and if value is in map, set to false.
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]) map[nums[i]] = false;
        else map[nums[i]] = true;
    }
    //search hashmap for true value and return key of true value. 
    for(let [key, value] of Object.entries(map)){
        if(value) return key;
    }
    return -1
};


//fastest solution XOR - doesn't work on leetcode. - O(n) time and O(1) space.
var singleNum = function(nums){
    let res = 0;
    for(let i=0;i<nums.length-1;i++){
        res  = res ^ nums[i];
     }
     return res;
}
