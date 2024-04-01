// Problem - 2444. Count Subarrays With Fixed Bounds
const countSubarrays = function (nums, minK, maxK) {
  let result = 0;
  let minIndex = -1;
  let maxIndex = -1;
  let invalidIndex = -1;

  nums.forEach((number, index) => {
    if (number === minK) {
      minIndex = index;
    }
    if (number === maxK) {
      maxIndex = index;
    }
    if (number < minK || number > maxK) {
      invalidIndex = index;
    }

    result += Math.max(Math.min(minIndex, maxIndex) - invalidIndex, 0);
  });

  return result;
};
