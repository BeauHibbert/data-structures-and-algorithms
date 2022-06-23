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


# Linked list k-th

k-th value from the end of a linked list.

Write the following method for the Linked List class:

- kth from end
- argument: a number, k, as a parameter.
- Return the node’s value that is k places from the tail of the linked list.
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Efficiency/Big O

The space and time efficiency would be O(n) because at worse it would have to iterate through the linked list once and grab the index value of the solution. It would have to scale with n.



# Linked List Zip

Zip two linked lists.

Feature Tasks

- Write a function called zip lists
- Arguments: 2 linked lists
- Return: New Linked List, zipped as noted below
- Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
- Try and keep additional space down to O(1)
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Efficiency/Big O

The space/time efficiency would be O(n^2) because the worst case is that it has to iterate through both lists and n would scale directly.

<img width="1728" alt="linked list zip" src="https://user-images.githubusercontent.com/91757275/163728890-c4d9949a-1085-4170-b6c6-5e9cf6e529f3.png">