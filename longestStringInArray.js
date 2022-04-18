//find longest string in array of strings. 

function longestString(arr){
	let max = arr[0].length;
  arr.map(v => max = Math.max(max, v.length));
  result = arr.filter(v => v.length == max);
  return result;
}

console.log(longestString(['one', 'two', 'three', 'four']))
