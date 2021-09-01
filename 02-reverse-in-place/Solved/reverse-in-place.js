// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

var reverseInPlace = function(arr) {
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }

  return arr;
};
