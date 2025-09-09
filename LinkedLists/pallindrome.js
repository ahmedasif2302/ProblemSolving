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
      newNode.next = this?.head;
      this.head = newNode;
    }
    this.size++;
  }

  addToTail(value) {
    let newNode = new Node(value);

    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
    this.size++;
  }

  addToIndex(value, index) {
    if (this.head === null) {
      return null;
    }
    let curr = this.head;
    let counter = 0;
    let newNode = new Node(value);
    if (index + 1 > this.size || index < 0) {
      console.log("index out of bound");
      return null;
    }

    if (index === 0) {
      this.addToHead(value);
      return;
    }

    if (index === this.size) {
      this.addToTail(value);
      return;
    }
    while (curr.next !== null) {
      if (counter === index - 1) {
        newNode.next = curr.next;
        curr.next = newNode;
        break;
      }
      curr = curr.next;
      counter++;
    }

    this.size++;
  }

  deleteNodeAtIndex(index) {
    if (this.head === null) {
      return null;
    }
    let curr = this.head;
    let i = 0;
    if (index + 1 > this.size || index < 0) {
      console.log("index out of bound");
      return null;
    }
    while (curr.next !== null) {
      if (index - 1 === i) {
        curr.next = curr.next.next;
        break;
      }
      curr = curr.next;
      i++;
    }

    this.size--;
  }

  print() {
    if (this.head === null) {
      return null;
    }

    let res = "";

    let curr = this.head;
    while (curr) {
      res = res + `${curr.value},`;
      curr = curr.next;
    }

    return res;
  }

  middleOfLinkedList() {
    if (this.head === null) {
      return -1;
    }
    let s = this.head;
    let f = this.head;
    while (f !== null && f?.next !== null) {
      s = s.next;
      f = f.next?.next;
    }
    return s.value;
  }

  reverseLL() {
    if (this.head === null) {
      return null;
    }

    let prev = null;
    let curr = this.head;

    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }

  isPallindrome() {
    if (this.head === null) {
      return false;
    }
    let s = this.head;
    let f = this.head;
    while (f && f.next) {
      s = s.next;
      f = f.next.next;
    }

    let prev = null;
    let curr = s;

    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    let secondList = prev;
    let firstList = this.head;

    while (secondList) {
      if (secondList.value !== firstList.value) {
        return false;
      }
      secondList = secondList.next;
      firstList = firstList.next;
    }

    return true;
  }
}

let ll = new LinkedList();

ll.addToHead(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(3);
ll.addToTail(2);
ll.addToTail(1);

// console.log(ll.reverseLL());
console.log(ll.isPallindrome());
