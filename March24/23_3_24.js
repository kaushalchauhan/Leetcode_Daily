// Problem - 143. Reorder List
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const reorderList = function (head) {
  if (!head || !head.next) return head;

  // Step 1: Split the linked list into two halves
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let firstHalf = head;
  let secondHalf = slow.next;
  slow.next = null;

  // Step 2: Reverse the second half of the linked list
  let prev = null;
  let current = secondHalf;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  secondHalf = prev;

  // Step 3: Merge the two halves alternately
  let dummy = new ListNode(0);
  let pointer = dummy;
  while (firstHalf || secondHalf) {
    if (firstHalf) {
      pointer.next = firstHalf;
      pointer = pointer.next;
      firstHalf = firstHalf.next;
    }
    if (secondHalf) {
      pointer.next = secondHalf;
      pointer = pointer.next;
      secondHalf = secondHalf.next;
    }
  }

  return dummy.next;
};

// Example usage:
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);

console.log("Before reordering:");
let current = list1;
while (current) {
  console.log(current.val);
  current = current.next;
}

const reorderedList = reorderList(list1);

console.log("After reordering:");
current = reorderedList;
while (current) {
  console.log(current.val);
  current = current.next;
}
