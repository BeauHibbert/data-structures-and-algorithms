'use strict';

const { LinkedList } = require('../linked-list');


describe('Testing Linked List and all methods', () => {
  it('Create a new linked list', () => {
    let list = new LinkedList;
    expect(list.head).toEqual(null);
  });
  it('Properly insert a node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":null}}');
  });
  it('Point the head to first node', () => {
    let list = new LinkedList;
    list.insert('a');
    expect(list.head.value).toEqual('a');
  });
});
it('Properly insert multiple nodes', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(JSON.stringify(list)).toEqual('{"head":{"value":"a","next":{"value":"b","next":{"value":"c","next":null}}}}');
});
it('Return true when finding a value that exists in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('b')).toBeTruthy();
});
it('Return false when a value does not exist in the list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.includes('d')).toBeFalsy();
});

it('Return a collection of all the values that exist in the linked list', () => {
  let list = new LinkedList;
  list.insert('c');
  list.insert('b');
  list.insert('a');
  expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
});
