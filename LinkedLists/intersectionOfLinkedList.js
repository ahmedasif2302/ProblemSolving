/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let seenNodes = new Set();

  let currA = headA;

  let currB = headB;

  while (currB) {
    seenNodes.add(currB);
    currB = currB.next;
  }

  while (currA) {
    if (seenNodes.has(currA)) {
      return currA;
    }
    currA = currA.next;
  }

  return null;
};
