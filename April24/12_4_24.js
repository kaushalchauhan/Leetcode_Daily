// Problem - 42. Trapping Rain Water
const trap = function (height) {
  const n = height.length;
  if (n <= 2) return 0;
  const left = [0];
  const right = new Array(n).fill(0);
  let leftMax = height[0];
  let rightMax = height[n - 1];

  for (let i = 0; i < n; i++) {
    left[i] = leftMax;
    leftMax = Math.max(leftMax, height[i]);
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = rightMax;
    rightMax = Math.max(rightMax, height[i]);
  }

  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    let minHeight = Math.min(left[i], right[i]);
    if (minHeight > height[i]) {
      ans += minHeight - height[i];
    }
  }
  return ans;
};
