'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newHead = new Node(value);
    const currentHead = this.head;
    this.head = newHead;
    if(currentHead) {
      newHead.next = currentHead;
    }
  }

  includes(value) {
    let current = this.head;

    while(current !== null) {
      if(current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let stringified = '';
    while(current !== null) {
      stringified = stringified + `${current.value}`;
      current = current.next;
    }
    return stringified;
  }

  append(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else { 
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = new Node(data);
    }
  }

  insertBefore(value, newValue) {
    let current = this.head;
    let after = current.next;
    while (after !== value) {
      if (after === null) throw 'Value not found';
      current = after;
    }
    current.next = new Node(newValue, after);
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    let temp;

    while (current) {
      if (current.value === value) {
        temp = current.next;
        current.next = node;
        node.next = temp;
        return;
      } else {
        current = current.next;
      }
    }
  }
}





module.exports = (LinkedList, Node);