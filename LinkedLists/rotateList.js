/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRightLegacy = function (head, k) {
  if (!head) {
    return head;
  }

  let curr = head;

  for (let i = 0; i < k; i++) {
    let s = curr;
    let f = curr.next;
    while (f && f.next) {
      s = s.next;
      f = f.next;
    }

    if (!f) {
      return curr;
    }

    f.next = curr;
    s.next = null;
    curr = f;
  }

  return curr;
};

var rotateRightOptimised = function (head, k) {
  if (!this.head) {
    return this.head;
  }
  let curr = this.head;

  let len = 0;
  while (curr) {
    curr = curr.next;
    len++;
  }

  curr = this.head;

  k = k % len;

  let s = this.head;
  let f = null;
  console.log(k);
  for (let i = 0; i < k; i++) {
    curr = curr.next;
    f = curr;
  }

  while (f.next) {
    f = f.next;
    s = s.next;
  }
  let newHead = s.next;
  s.next = null;
  f.next = this.head;

  this.head = newHead;
};
