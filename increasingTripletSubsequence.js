/* 
  Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
*/
//poorly written on leetcode. 
var increasingTriplet = function(nums) {
  let first = Infinity;
  let second = Infinity;
  for (let curr of nums) {
    if (curr > second && curr > first) {
      return true;
    };
    if (curr > first) {
      second = curr;
    }else{
      first = curr;
    };
  };
  return false;
};
