/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


//hashmap fast
const twoSum = (array, goal) => {
  let numberMap = new Map();

  for (let index = 0; index < array.length; index++) {
    element = array[index];

    if (numberMap.has(goal - element)) 
      return [index, numberMap.get(goal - element)];
    else numberMap.set(element, index);
  }

  return [];
}
