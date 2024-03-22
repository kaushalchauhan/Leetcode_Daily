// Problem - 234. Palindrome Linked List
const isPalindrome = function (head) {
  // Step 1: Traverse the linked list and store values in an array
  let values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  // Step 2: Check if the array of values is a palindrome
  let left = 0;
  let right = values.length - 1;
  while (left < right) {
    if (values[left] !== values[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }
  return true; // Palindrome
};
