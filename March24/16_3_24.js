// Problem - 525. Contiguous Array
const findMaxLength = function (nums) {
  const map = {}; // Create an object to store cumulative sum and its index
  let maxLength = 0;
  let count = 0; // Counter to keep track of the difference between zeros and ones

  // Initialize map with the initial state (cumulative sum of 0 at index -1)
  map[0] = -1;

  for (let i = 0; i < nums.length; i++) {
    // If the current element is 0, decrement the count; otherwise, increment it
    count += nums[i] === 0 ? -1 : 1;

    // If the count is encountered before, calculate the length of the subarray
    if (map.hasOwnProperty(count)) {
      maxLength = Math.max(maxLength, i - map[count]);
    } else {
      map[count] = i;
    }
  }

  return maxLength;
};
