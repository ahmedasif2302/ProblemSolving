function Node(value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addToHead(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  addToTail(value) {
    try {
      let newNode = new Node(value);
      let curr = this.head;

      if (this.head !== null) {
        while (curr?.next !== null) {
          curr = curr?.next;
        }
        curr.next = newNode;
      } else {
        this.head = newNode;
      }

      this.size++;
    } catch (error) {
      console.log(error);
    }
  }

  addToIndex(value, index) {
    let newNode = new Node(value);

    if (index === 0) {
      this.addToHead(value);
      return;
    }

    if (index >= this.size || index < 0) {
      return -1;
    }

    let curr = this.head;
    let i = 0;
    while (curr.next !== null) {
      if (i === index - 1) {
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
      }
      curr = curr.next;
      i++;
    }
  }

  deleteNodeByIndex(index) {
    let curr = this.head;
    if (this.head === null) {
      return -1;
    }

    let i = 0;
    if (index === 0) {
      this.head = curr.next;
      this.size--;
      return;
    }

    while (curr?.next !== null) {
      if (i === index - 1) {
        curr.next = curr.next.next;
        this.size--;
        break;
      }
      curr = curr.next;
      i++;
    }
  }

  getElementByIndex(index) {
    let curr = this.head;
    let i = 0;
    if (index < 0 || index >= this.size) {
      return -1;
    }
    while (curr) {
      if (index === i) {
        return curr.value;
      }
      curr = curr.next;
      i++;
    }
  }

  print() {
    let curr = this.head;
    let res = "";

    if (this.head === null) {
      return null;
    }
    while (curr) {
      res += `${curr.value},`;
      curr = curr.next;
    }
    return res;
  }

  removeElement(val) {
    if (this.head === null) {
      return null;
    }

    let newNode = new Node(0);
    newNode.next = this.head;
    let prev = newNode;
    while (prev && prev.next) {
      if (prev.next.value === val) {
        prev.next = prev.next.next;
      } else {
        prev = prev.next;
      }
    }

    this.head = newNode.next;
  }

  removeNthNode(n) {
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

  removeDuplicates() {
    if (this.head === null) {
      return null;
    }
    let seenNodes = new Set();
    let sentinel = new Node(0);
    sentinel.next = this.head;
    let prev = sentinel;

    while (prev.next) {
      if (seenNodes.has(prev.next.value)) {
        // Duplicate → skip node
        prev.next = prev.next.next;
      } else {
        // Not duplicate → add value and move forward
        seenNodes.add(prev.next.value);
        prev = prev.next;
      }
    }

    this.head = sentinel.next;
  }

  removeDuplicates2() {
    if (this.head === null) {
      return null;
    }
    let curr = this.head;
    while (curr && curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
  }

  oddOrEvenNodes() {
    if (this.head === null) {
      return null;
    }
    let odd = this.head;
    let even = this.head.next;
    let evenStart = even;
    while (odd.next && even.next) {
      odd.next = odd.next.next;
      even.next = even.next.next;
      odd = odd.next;
      even = even.next;
    }

    odd.next = evenStart;
  }

  rototeList(k) {
    if (!this.head) {
      return this.head;
    }

    let curr = this.head;

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

    this.head = curr;
  }
}

const ll = new LinkedList();

ll.addToHead(1);
// ll.addToTail(2);
// ll.addToTail(3);
// ll.addToTail(4);
// ll.addToTail(5);

ll.rototeList(1);

console.log(ll.print());

// const l1 = new LinkedList();
// const l2 = new LinkedList();

// l1.addToHead(1);
// l1.addToTail(2);
// l1.addToTail(4);

// l2.addToTail(1);
// l2.addToTail(3);
// l2.addToTail(4);

// addTwoNumbers(l1.head, l2.head);

function addTwoNumbers(l1, l2) {
  let curr1 = l1;
  let curr2 = l2;

  const res = new LinkedList();
  let carry = 0;
  while (curr1 || curr2 || carry) {
    let a = curr1?.value ?? 0;
    let b = curr2?.value ?? 0;
    let sum = a + b + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    if (res.head === null) {
      res.addToHead(digit);
    } else {
      res.addToTail(digit);
    }
    curr1 = curr1 && curr1?.next;
    curr2 = curr2 && curr2?.next;
  }

  console.log(res.print());
}

// mergeTwoSortedList(l1.head, l2.head);

function mergeTwoSortedList(l1, l2) {
  let start = new Node();
  let curr = start;
  while (l1 && l2) {
    if (l1.value < l2.value) {
      curr.next = l1;
      l1 = l1 && l1.next;
    } else {
      curr.next = l2;
      l2 = l2 && l2.next;
    }
    curr = curr.next;
  }

  if (!l1) {
    curr.next = l2;
  }

  if (!l2) {
    curr.next = l1;
  }

  let res = start.next;
  let print = "";
  while (res) {
    print = print + `${res.value},`;
    res = res.next;
  }

  console.log(print);
}
