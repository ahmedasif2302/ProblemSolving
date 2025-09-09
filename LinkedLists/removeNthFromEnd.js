/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEndTwoPassSolution = function (head, n) {
  if (head === null) {
    return null;
  }

  let sentinel = new ListNode(0);
  sentinel.next = head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }

  prev.next = prev.next.next;

  return sentinel.next;
};

function removeNthNodeOnePassSolution(n) {
  if (this.head === null) {
    return null;
  }

  let sentinel = new Node(0);
  sentinel.next = this.head;
  let curr = sentinel;
  let s = sentinel;
  let f = null;
  let i = 0;
  while (curr) {
    if (i === n) {
      f = curr;
      break;
    }
    curr = curr.next;
    i++;
  }

  while (f && f.next) {
    s = s.next;
    f = f.next;
  }

  s.next = s.next.next;

  this.head = sentinel.next;
}
