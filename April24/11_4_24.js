// Problem - 402. Remove K Digits
const removeKdigits = function (num, k) {
  const stack = [];
  for (const digit of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  // If k is not zero, remove remaining digits from the end
  while (k > 0) {
    stack.pop();
    k--;
  }

  // Remove leading zeros
  while (stack.length > 1 && stack[0] === "0") {
    stack.shift();
  }

  return stack.length === 0 ? "0" : stack.join("");
};
