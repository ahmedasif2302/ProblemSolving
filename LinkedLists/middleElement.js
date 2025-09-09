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

  getMiddleElement() {
    let index = Math.ceil(this.size / 2);
    let i = 0;
    let res = "";
    let curr = this.head;
    while (curr?.next !== null) {
      i++;
      curr = curr?.next;
      if (i == index - 1) {
        // res = res + curr.value;
        return curr.value;
      }
    }

    return res;
  }

  getMiddleElementByPointers() {
    let s = this.head;
    let f = this.head;

    while (f && f.next) {
      s = s.next;
      f = f.next.next;
    }

    return s.value;
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

ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(5);

console.log(ll.print());

// console.log(ll.getMiddleElement(), "middle element traditional");
console.log(ll.getMiddleElementByPointers(), "middle elemnt pointers");
