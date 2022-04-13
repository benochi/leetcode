var search = function(nums, target) {
    let left = 0
    let right = nums.length -1;
    
    
    while( left <= right) {
        let pivot = Math.floor( ((left + right) / 2) );
        if(nums[pivot] === target){
            return pivot;
        } 
        if(target < nums[pivot]){
            right = pivot - 1
        } else {
            left = pivot + 1;
        }
    }
    return -1;
};
