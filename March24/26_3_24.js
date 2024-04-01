// Problem - 41. First Missing Positive
const firstMissingPositive = function (nums) {
  const numSet = new Set(nums.filter((i) => i > 0));
  let count = 1;
  while (numSet.has(count)) {
    count++;
  }
  return count;
};
