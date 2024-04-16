// Problem - 623. Add One Row to Tree
const addOneRow = function (root, val, depth) {
  if (depth === 1) return new TreeNode(val, root);

  const dfs = function (root, depth) {
    if (depth === 0 || root === null) return;

    if (depth === 1) {
      root.left = new TreeNode(val, root.left);
      root.right = new TreeNode(val, null, root.right);
    }
    dfs(root.left, depth - 1);
    dfs(root.right, depth - 1);
    return root;
  };
  return dfs(root, depth - 1);
};
