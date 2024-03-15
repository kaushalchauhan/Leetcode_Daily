// Problem

// Solution 1 - TLE
const productExceptSelf1 = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      product = product * nums[j];
    }
    res.push(product);
  }
  return res;
};

// Solution 2
const productExceptSelf = function (nums) {
  const n = nums.length;

  // Initialize arrays to store left and right products
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);

  // Calculate left products
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // Calculate right products
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  // Multiply left and right products to get the final answer
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }

  return answer;

  //
  let res = [1, nums[0]];
  for (let i = 1; i < nums.length - 1; i++) {
    res.push(res[i] * nums[i]);
  }

  let postFix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postFix;
    postFix *= nums[i];
  }

  return res;
};
