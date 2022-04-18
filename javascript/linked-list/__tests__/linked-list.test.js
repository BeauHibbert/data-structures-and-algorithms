'use strict';

const LinkedList = require('../linked-list');


describe('Testing Linked List and all methods', () => {
  it('should create a new linked list', () => {
    let list = new LinkedList;
    expect(list.head).toEqual(null);
  });
  it('should properly insert a node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":null}}');
  });
  it('should point the head to first node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(list.head.value).toEqual('a');
  });
});
it('should properly insert multiple nodes', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}}}');
});
it('should return true when finding a value that exists in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('b')).toBeTruthy();
});
it('should return false when a value does not exist in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('d')).toBeFalsy();
});

it('should return a collection of all the values that exist in the linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
});

// tests for code challenge 6

it('Can successfully add a node to the end of the linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  list.append('d');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
});

it('Can successfully add multiple nodes to the end of a linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  list.append('d');
  list.append('e');
  list.append('f');

  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> { e } -> { f } -> NULL');
});

it('Can successfully insert a node before a node located in the middle of a linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertBefore('b', 'z');


  expect(list.toString()).toEqual('{ a } -> { z } -> { b } -> NULL');
});

it('Can successfully insert a node before the first node of a linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertBefore('a', 'z');


  expect(list.toString()).toEqual('{ z } -> { a } -> { b } -> NULL');
});

it('Can successfully insert after a node in the middle of the linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertAfter('a', 'z');


  expect(list.toString()).toEqual('{ a } -> { z } -> { b } -> NULL');
});

it('Can successfully insert a node after the last node of the linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.insertAfter('b', 'z');


  expect(list.toString()).toEqual('{ a } -> { b } -> { z } -> NULL');
});

// tests for code challenge 7

it('Where k is greater than the length of the linked list', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');

  expect(list.kFromEnd(3)).toEqual('Exception');
});

it('Where k and the length of the list are the same', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');

  expect(list.kFromEnd(2)).toEqual('Exception');
});

it('Where k is not a positive integer', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');

  expect(list.kFromEnd(-1)).toEqual('Exception');
});

it('Where k is not a positive integer', () => {
  let list = new LinkedList;
  list.append('a');

  expect(list.kFromEnd(0)).toEqual('a');
});

it('Where k is not a positive integer', () => {
  let list = new LinkedList;
  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.append('e');

  expect(list.kFromEnd(2)).toEqual('c');
});

// code challenge 8 tests

function llSetUp(arr, ll) {
  arr.forEach(value => ll.append(value));
}

describe('Testing Linked List Zip function', () => {
  it('should create a new ll equal to null if both ll are empty', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.head).toEqual(null);
  });

  it('should create a new ll equal to ll1 if ll2 is empty', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b', 'c'], ll1);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });

  it('should create a new ll equal to ll2 if ll1 is empty', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['x', 'y', 'z'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ x } -> { y } -> { z } -> NULL');
  });

  it('should create a new ll with two ll of equal lengths', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b', 'c'], ll1);
    llSetUp(['x', 'y', 'z'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ a } -> { x } -> { b } -> { y } -> { c } -> { z } -> NULL');

  });

  it('should create a new ll with ll1 shorter than ll2', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b'], ll1);
    llSetUp(['x', 'y', 'z'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ a } -> { x } -> { b } -> { y } -> { z } -> NULL');
  });

  it('should create a new ll with ll2 shorter than ll1', () => {
    const ll1 = new LinkedList;
    const ll2 = new LinkedList;
    llSetUp(['a', 'b', 'c'], ll1);
    llSetUp(['x', 'y'], ll2);
    let list = LinkedList.zipLists(ll1, ll2);
    expect(list.toString()).toEqual('{ a } -> { x } -> { b } -> { y } -> { c } -> NULL');
  });
});
