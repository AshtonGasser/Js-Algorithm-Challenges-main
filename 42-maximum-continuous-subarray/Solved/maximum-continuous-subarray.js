const maxSumArray = function(numbers) {
  // If array contains only one integer, return the value as the sum
  if (numbers.length === 1) {
    return numbers[0];
    // If the array contains two integers or only positive integers return the sum
  }
  if (numbers.length === 2 || numbers.every((x) => x >= 0)) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  // Set the current max and max sum to the value of the first integer in array
  let currentMax = numbers[0];
  let maxSum = numbers[0];
  // Loop through array to test for maximum sum
  for (let x =1; x < numbers.length; x++) {
    let numToTest = numbers[x];
    // Set currentMax to equal either the number to test or sum of number to test and currentMax
    currentMax = Math.max(numToTest, numToTest + currentMax)
    // Set maxSum to be the max of the currentMax or the current maxSum value
    maxSum = Math.max(maxSum, currentMax);
  }
  return maxSum;
};
