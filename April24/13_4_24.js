// Problem - 85. Maximal Rectangle
const maximalRectangle = function (matrix) {
  let n = matrix.length;
  let m = (matrix[0] || []).length;
  let max = 0;
  let heights = Array(m);
  let stack = [];
  let h = 0;
  let w = 0;

  for (let i = 0; i < n; i++) {
    stack = [];

    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === "1") {
        heights[j] = i === 0 ? 1 : heights[j] + 1;
      } else {
        heights[j] = 0;
      }

      while (stack.length && heights[j] <= heights[stack[stack.length - 1]]) {
        h = heights[stack.pop()];
        w = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
        max = Math.max(max, h * w);
      }

      stack.push(j);
    }

    while (stack.length) {
      h = heights[stack.pop()];
      w = stack.length === 0 ? m : m - stack[stack.length - 1] - 1;
      max = Math.max(max, h * w);
    }
  }

  return max;
};
