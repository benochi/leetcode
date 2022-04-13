//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//hashmap
var majorityElement = function(nums) {
    const majority = Math.round(nums.length / 2)
    const map = {}
    for(let i = 0; i<nums.length; i++){
        // Increment the count of each number in the hashmap
        map[nums[i]] = (map[nums[i]] || 0) + 1
        // Return the first number whose count is equal to the majority
        if(map[nums[i]]===majority) return nums[i];
    }
    
};
