/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

var reverseWords = function(s) {
  let output =''
    
  let words = s.split(' ');
  for(let i = 0; i < words.length; i++){
    output += words[i].split('').reverse().join('');
    if(i < words.length -1){
      output += " ";
    }
  }
  return output
};


//faster
var reverseWords = function(s) {
  let res ='';
  let word ='';
    
  for(let c of s){
    if(c == ' '){
      res += word + c;
      word ='';
    }else{
      word = c + word;
    }
  }
  return res + word;
};
