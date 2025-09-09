/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) {
    return null;
  }
  let seenNodes = new Set();
  let sentinel = new ListNode(0);
  sentinel.next = head;
  let prev = sentinel;

  while (prev.next) {
    if (seenNodes.has(prev.next.val)) {
      // Duplicate → skip node
      prev.next = prev.next.next;
    } else {
      // Not duplicate → add val and move forward
      seenNodes.add(prev.next.val);
      prev = prev.next;
    }
  }

  return sentinel.next;
};
