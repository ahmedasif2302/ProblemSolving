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

  addCycle(index) {
    let curr = this.head;
    let indexedNode = null;
    let i = 0;
    while (curr.next) {
      if (i === index) {
        indexedNode = curr;
      }
      curr = curr.next;
      i++;
    }

    curr.next = indexedNode;
  }

  checkCycle() {
    let curr = this.head;

    let set = new Set();
    while (curr) {
      if (set.has(curr)) {
        return true;
      }
      set.add(curr);
      curr = curr.next;
    }
    return false;
  }
}

const ll = new LinkedList();

ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(5);

console.log(ll.checkCycle());
