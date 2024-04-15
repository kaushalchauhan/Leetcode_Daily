// Problem - 129. Sum Root to Leaf Numbers
const sumNumbers = function (root) {
  function depthFirstSearch(node, currentSum) {
    // Base case: if the current node is null, return 0 as there's no number to add.
    if (node === null) {
      return 0;
    }

    // Update the current sum by adding the current node's value to it.
    // This effectively shifts the previous sum by one decimal place to the left and adds the current node's value.
    currentSum = currentSum * 10 + node.val;

    // Check if the current node is a leaf node (i.e., no left or right children).
    if (node.left === null && node.right === null) {
      // If it's a leaf node, return the current sum which represents a complete number from the root to this leaf.
      return currentSum;
    }

    // Recursively call the function for the left and right children and return the sum of both calls.
    // This effectively adds up the sums of all paths from root to the leaves.
    return (
      depthFirstSearch(node.left, currentSum) +
      depthFirstSearch(node.right, currentSum)
    );
  }

  // Initialize the depth-first search with the root node and an initial sum of 0.
  return depthFirstSearch(root, 0);
};
