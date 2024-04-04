// Problem - 1614. Maximum Nesting Depth of the Parentheses
const maxDepth = function (s) {
  let currentDepth = 0;
  let maxDepth = 0;
  for (char of s) {
    if (char === "(") {
      currentDepth++;
      maxDepth = Math.max(currentDepth, maxDepth);
    } else if (char === ")") {
      currentDepth--;
    }
  }
  return maxDepth;
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
