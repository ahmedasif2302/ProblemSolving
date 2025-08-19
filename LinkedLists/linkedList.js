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
}

const ll = new LinkedList();
ll.addToHead(11);
ll.addToHead(1);
ll.addToHead(10);
ll.addToTail(5);
ll.addToTail(15);
ll.addToIndex(2, 0);
ll.addToIndex(2, 2);

console.log(ll.print());

ll.deleteNodeByIndex(6);
ll.deleteNodeByIndex(0);

console.log(ll.print());
console.log(ll.getElementByIndex(1));
