//Creating a Node

class Node {
  constructor(elementData) {
    this.element = elementData;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Operations possible!
  //1. Adding the element in the linked list
  //a. insertAtBeginning(element)
  //b. insertAtTheEnd(element)
  //c. insertAt(element, location)
  //d. removeElement(index)
  //e. removeElement(element)

  //Helper methods we need
  //1. isEmpty();
  //2. sizeOfTheList()
  //3. printList();

  insertAtBeginning(element) {
    let node = new Node(element);

    //Case 1:- head == null;
    if (this.head == null) {
      this.head = node;
    } else {
      //Case 2:- head!= null
      node.next = head;
      head = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    //Base case :- index is out of range!
    if (index < 0 || index > this.size) {
      return console.log("Please enter a valid index!");
    } else {
      let node = new Node(element);

      let cur, prev;
      cur = this.head;

      //Case 1:- If index = 0, or insert at the beggining
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        cur = this.head;
        let iterator = 0;

        while (iterator < index) {
          iterator++;

          prev = cur;
          cur = cur.next;
        }

        node.next = cur;
        prev.next = node;
      }
    }
    this.size++;
  }

  //Insert the element at the end of the list
  add(element) {
    let node = new Node(element);

    let cur;

    if (this.head == null) {
      this.head = node;
    } else {
      cur = this.head;

      while (cur.next) {
        cur = cur.next;
      }

      cur.next = node;
    }

    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Please enter a valid index");
    } else {
      let cur, prev;
      cur = this.head;
      let iterator = 0;

      if (index == 0) {
        //Case1:- Remove element at the beginning.
        this.head = cur.next;
      } else {
        //Helps us to reach at the specific index - 1
        while (iterator < index) {
          iterator++;
          prev = cur;
          cur = cur.next;
        }
        prev.next = cur.next;
      }
    }
    this.size--;
    return curr.element;
  }

  removeElement(element) {
    let curr = this.head;
    let prev = null;

    while (curr != null) {
      console.log("Current elements:- ", curr.element);
      if (curr.element === element) {
        if (prev == null) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        } 
        this.size--;
        return curr.element;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  searchIndexOf(element) {
    let count = 0;
    let cur = this.head;

    while (cur != null) {
      if (cur.element == element) {
        return count;
      }
      count++;
      cur = cur.next;
    }

    return -1;
  }

  printList() {
    let cur = this.head;
    let str = " ";
    while (cur) {
      str += cur.element;
      if (cur.next != null) {
        str += " -> ";
      }
      cur = cur.next;
    }
    console.log("Linked list :- ", str);
  }
}

let linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);

linkedList.printList();

let removedElement = linkedList.removeElement(50);
console.log("Removed element :- ", removedElement);
linkedList.printList();

console.log("Index of 40 is :- ", linkedList.searchIndexOf(40));

linkedList.insertAt(60, 2);
linkedList.printList();