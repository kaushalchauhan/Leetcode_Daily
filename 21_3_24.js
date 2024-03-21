// Problem - 206. Reverse Linked List
const reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Save the next node

    // Reverse the pointer of current node
    current.next = prev;

    // Move pointers forward
    prev = current;
    current = next;
  }

  // After the loop, prev will point to the last node (new head of reversed list)
  return prev;
};
