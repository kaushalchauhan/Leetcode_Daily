// Problem - 287. Find the Duplicate Number
const findDuplicate = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return num;
    }
    seen.add(num);
  }
  return null;
};
