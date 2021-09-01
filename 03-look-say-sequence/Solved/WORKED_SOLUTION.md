# Look and Say Sequence

In this problem, we need to implement a [look-and-say-sequence](https://en.wikipedia.org/wiki/Look-and-say_sequence).

If you haven't heard of look-and-say-sequence, you should spend a few minutes reading up on it and some examples.

We can generate a look-and-say-sequence from a number by reading off the number of digits in each group of consecutive digits, followed by the digit the group belongs to.

For example, if we were given the number `225332221`, we could break this number into the following groups:

1. 2 number 2s
2. 1 number 5
3. 2 number 3s
4. 3 number 2s
5. 1 number 1


We'd combine these to get the look-and-say-sequence: `2215233211`.

Once you understand what a look-and-say-sequence is, converting a number to one is easy enough without code. How do we do this?

1. We go through each digit of the number from left to right.

2. We could the number of consecutive same digits.

3. When we get to a new digit, we say the number of consecutive digits followed by the digit.

4. Restart the process for the new digit.

So we know we definitely need to loop through the number. But we can't loop through a number, we need to turn it into a string first.

```js
var lookAndSay = function(n) {
  var numString = n.toString();

  for (var i = 0; i < numString.length; i++) {
    var digit = numString[i];
  }
};
```

We also need a few variables to keep track of:

1. A string we'll use to build up our solution.

2. A variable to keep track of the current digit.

3. A variable to keep track of the current digit count.

```js
var lookAndSay = function(n) {
  var numString = n.toString();
  var result = "";

  var currentCount = 1;
  var currentDigit = numString[0];
  for (var i = 1; i < numString.length; i++) {
    var digit = numString[i];
  }
};
```

We'll start the `currentDigit` off at the first number in `numString`, and we'll start off the `currentCount` at `1`. This means we'll have to start the loop at `1` instead of `0`. This is similar to the previous `longestWord` problem.

So now we need to increment `currentCount` *if* the next digit is the same as `currentDigit`, *else* we'll append the `currentCount` and `currentDigit` to the `result` before resetting both values.

```js
var lookAndSay = function(n) {
  var numString = n.toString();
  var result = "";

  var currentCount = 1;
  var currentDigit = numString[0];
  for (var i = 1; i < numString.length; i++) {
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
};
```

At this point we should be able to return the `result`, but we need to turn it back into a number first since we've been working with a string version so far.

```js
var lookAndSay = function(n) {
  var numString = n.toString();
  var result = "";

  var currentCount = 1;
  var currentDigit = numString[0];
  for (var i = 1; i < numString.length; i++) {
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
```

If we ran this, we'd find it mostly words, but there's a flaw: We never append the last count and digit because we reach the end of the string. One option we have is to append the `currentCount` and `currentDigit` one more time after the loop. We could also have the loop run one more time by setting the loop's condition to run while `i` is less than _or equal_ to `numString.length`.

```js
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
```

This is probably the most complex problem we've worked with so far. As always, it's important to:

1. Thoroughly understand the problem before attempting to solve it.

2. Break the problem out into smaller pieces.

3. Think about how this problem is similar to others you've solved before.

4. Pseudocode out your logic.
