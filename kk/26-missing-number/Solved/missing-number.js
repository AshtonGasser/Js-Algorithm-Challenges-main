// Write a function that takes an unsorted array of positive and unique integers and returns the number missing from the array

var missingNumber = function(nums) {
  var numsPresent = {};

  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];

    numsPresent[num] = true;
  }
  
  for (var i = 0; i < nums.length + 1; i++) {
    if (!numsPresent[i]) {
      return i;
    }
  }
};
