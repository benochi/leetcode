//Given an array, rotate the array to the right by k steps, where k is non-negative.
//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]


//recursive
var rotate = function(nums, k) {
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));

  return nums;   
};

//this for some reason does not return properly, but sorted. 
var rotate = function(nums, k) {
    let output = []
    let chunk = nums.slice(k + 1)
    
    for(let i = 0; i <= k; i++){
        output.push(nums[i])
    }
    
    let temp = [...chunk, ...output];
    
    return temp;    
};
