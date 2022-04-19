

var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0]-b[0])
  let count_remove = 0;
  let j = 0;
    
  //intervals = [[1,2],[2,3],[3,4],[1,3]] 1
  for(let i=1; i < intervals.length; i++){
    let next_start = intervals[i][0];
    let next_end = intervals[i][1];
    let current_end = intervals[j][1];
        
    if(current_end > next_start){
      count_remove++;
      if(next_end < current_end){
        j = i;
      }
    } else {
      j = i
    }
  }
  return count_remove
};
