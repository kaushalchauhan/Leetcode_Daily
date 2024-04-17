// Problem - 988. Smallest String Starting From Leaf
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Entry point to find the lexicographically smallest string from leaf to root.
function smallestFromLeaf(root) {
  // Initialize the variable to store the lexicographically smallest string found so far.
  let smallestLeafString = "";

  // Start the DFS traversal.
  dfs(root, "");

  // Return the lexicographically smallest string after traversing the whole tree.
  return smallestLeafString;

  // Depth First Search (DFS) to traverse the tree.
  function dfs(node, path) {
    // Base case: if the current node is null, end the recursion.
    if (!node) return;

    // Construct the current path by appending the character represented by the node's value.
    path = String.fromCharCode("a".charCodeAt(0) + node.val) + path;

    // Check if it's a leaf node.
    if (!node.left && !node.right) {
      // If the current path is lexicographically smaller than the smallestLeafString found so far, update smallestLeafString.
      if (!smallestLeafString || path < smallestLeafString) {
        smallestLeafString = path;
      }
    }

    // Continue the DFS traversal for both children.
    dfs(node.left, path);
    dfs(node.right, path);
  }
}
