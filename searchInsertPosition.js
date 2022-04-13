//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity. 

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    
    while(left <= right){
        let pivot = Math.floor(((left + right) / 2));
        
        if(nums[pivot] === target) return pivot;
        
        if(nums[pivot] < target) {
            left = pivot + 1;
        } else if (nums[pivot] > target){
            right = pivot - 1;
        }         
    }
    return right + 1;
};
