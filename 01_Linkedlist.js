//Creating a Node

class Node {
  constructor(elementData) {
    this.element = elementData;
    this.next = null;
  }
}
let firstNode = new Node(10);
console.log("First Node :- ", firstNode);

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
      let newNode = new Node(element);

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
  }
}
