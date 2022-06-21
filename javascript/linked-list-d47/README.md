# Linked List

- Can successfully instantiate an empty linked list
- Can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- Can properly insert multiple nodes into the linked list
- Will return true when finding a value within the linked list that exists
- Will return false when searching for a value in the linked list that does not exist
- Can properly return a collection of all the values that exist in the linked list

## Approach & Efficiency

The efficiency for inserting an item into the list is O(1) because the 1 item is added at the beginning. For the includes and the toString, the efficency is O(n) because the worst case would be iterating through the whole linked list each time and it grows proportionally to n.

<img width="1728" alt="Screen Shot 2022-04-05 at 4 24 18 PM" src="https://user-images.githubusercontent.com/91757275/161868082-c7a119b9-8402-484d-a2e4-1a42552763c4.png">



# Linked List Insertions

Extend a Linked List to allow various insertion methods.

Feature Tasks:
Write the following methods for the Linked List class:

- append
  - arguments: new value
  - adds a new node with the given value to the end of the list
- insert before
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified
- insert after
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified

## Efficiency/Big O

The big O space and time efficiency is O(n) because the worst case scenario is that it iterates through the whole linked list and n has to scale with it.

<img width="1728" alt="linked list insertions" src="https://user-images.githubusercontent.com/91757275/163729023-72ad9598-a272-41ea-a2e8-5b6dc5358527.png">
