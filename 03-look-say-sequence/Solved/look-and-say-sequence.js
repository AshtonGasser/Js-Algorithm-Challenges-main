// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
  var numString = n.toString();
  var result = "";

  var currentCount = 1;
  var currentDigit = numString[0];
  for (var i = 1; i <= numString.length; i++) {
    var digit = numString[i];

    if (digit === currentDigit) {
      currentCount++;
    } else {
      result += currentCount;
      result += currentDigit;
      currentCount = 1;
      currentDigit = digit;
    }
  }

  return parseInt(result);
};
