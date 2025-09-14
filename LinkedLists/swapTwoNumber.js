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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let sentinel = new ListNode(0);
  sentinel.next = head;
  let p = sentinel;
  let c = head;
  let n = head.next;
  while (c && n) {
    p.next = n;
    c.next = n.next;
    n.next = c;
    p = c;
    c = p.next;
    n = c && c.next;
  }

  return sentinel.next;
};
