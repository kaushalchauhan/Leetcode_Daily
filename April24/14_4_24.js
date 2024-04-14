// Problem - 404. Sum of Left Leaves
const sumOfLeftLeaves = function (root) {
  const que = [root];
  let sum = 0;
  while (que.length > 0) {
    const node = que.shift();
    if (node.left) {
      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      } else {
        que.push(node.left);
      }
    }
    if (node.right) {
      que.push(node.right);
    }
  }
  return sum;
};
