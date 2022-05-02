/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.\

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/


//faster
var searchRange = function(nums, target) {
        return [findFirstOccurrence(nums, target), findLastOccurrence(nums, target)];
};

const findFirstOccurrence = (nums, target) => {
    // Left and right pointers
    let left = 0;
    let right = nums.length - 1;
    // Index of first occurrence
    let firstOccurrence = -1;
    // Loop until the two pointers meet
    while (left <= right) {
        // Middle index
        let middle = left + parseInt((right - left) / 2);
        // Check if we have found the value
        if (nums[middle] === target) {
            firstOccurrence = middle;
            right = middle - 1;
        }
        // If the target is less than the element
        // at the middle index
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        // If the target is greater than the element
        // at the middle index
        else {
            left = middle + 1;
        }
    }
    return firstOccurrence;
};

const findLastOccurrence = (nums, target) => {
    // Left and right pointers
    let left = 0;
    let right = nums.length - 1;
    // Index of first occurrence
    let lastOccurrence = -1;
    // Loop until the two pointers meet
    while (left <= right) {
        // Middle index
        let middle = left + parseInt((right - left) / 2);
        // Check if we have found the value
        if (nums[middle] === target) {
            lastOccurrence = middle;
            left = middle + 1;
        }
        // If the target is less than the element
        // at the middle index
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        // If the target is greater than the element
        // at the middle index
        else {
            left = middle + 1;
        }
    }
    return lastOccurrence;
};


//fancier
var searchRange = function(nums, target) {
  const find = (target, arr, left=0, right=arr.length) => {
    while (left <= right) {
      let mid = left + right >> 1;
      if(arr[mid] < target) left = mid + 1
      else right = mid - 1
    }
    return left
  }
  let Tleft = find(target, nums)
  if(nums[Tleft] !== target) return [-1, -1]
  return[Tleft, find(target+1, nums, Tleft) -1]
};
