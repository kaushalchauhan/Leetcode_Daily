// Problem - 1544. Make The String Great
const makeGood = function (s) {
  const stack = [];
  for (let char of s) {
    let lastChar = stack[stack.length - 1];
    if (
      lastChar &&
      Math.abs(char.charCodeAt(0) - lastChar.charCodeAt(0)) === 32
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};
console.log(makeGood("leEeetcode"));
