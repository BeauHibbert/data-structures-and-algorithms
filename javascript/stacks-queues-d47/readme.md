# Stacks and Queues
Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Challenge

### Node
Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
##Stack
Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
The class should contain the following methods:
### push
Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.
### pop
Arguments: none
Returns: the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack
### peek
Arguments: none
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack
is empty
Arguments: none
Returns: Boolean indicating whether or not the stack is empty.

### Queue
Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
The class should contain the following methods:
### enqueue
Arguments: value
adds a new node with that value to the back of the queue with an O(1) Time performance.
### dequeue
Arguments: none
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue
### peek
Arguments: none
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack
### is empty
Arguments: none
Returns: Boolean indicating whether or not the queue is empty
You have access to the Node class and all the properties on the Linked List class.

### Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write tests to prove the following functionality:

1. Can successfully push onto a stack
2. Can successfully push multiple values onto a stack
3. Can successfully pop off the stack
4. Can successfully empty a stack after multiple pops
5. Can successfully peek the next item on the stack
6. Can successfully instantiate an empty stack
7. Calling pop or peek on empty stack raises exception
8. Can successfully enqueue into a queue
9. Can successfully enqueue multiple values into a queue
10. Can successfully dequeue out of a queue the expected value
11. Can successfully peek into a queue, seeing the expected value
12. Can successfully empty a queue after multiple dequeues
13. Can successfully instantiate an empty queue
14. Calling dequeue or peek on empty queue raises exception

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The big O space/time for these are O(1) because n is always linear and it is always either adding or subtracting nodes.

## API
- Push - Nodes or items that are put into the stack are pushed
- Pop - Nodes or items that are removed from the stack are popped. When you attempt to pop an empty stack an exception will be raised.
- Top - This is the top of the stack.
- Peek - When you peek you will view the value of the top Node in the stack. When you attempt to peek an empty stack an exception will be raised.
- IsEmpty - returns true when stack is empty otherwise returns false.

- Enqueue - Nodes or items that are added to the queue.
- Dequeue - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.
- Front - This is the front/first Node of the queue.
- Rear - This is the rear/last Node of the queue.
- Peek - When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.
- IsEmpty - returns true when queue is empty otherwise returns false.

Contributors:
notes from: https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-10/resources/stacks_and_queues.html



# Stacks and Queue Pseudo

# Challenge Summary
Implement a Queue using two Stacks.

## Whiteboard Process
<img width="1728" alt="Screen Shot 2022-04-04 at 10 25 24 PM" src="https://user-images.githubusercontent.com/91757275/161684978-fa10b598-1239-4bfa-a61b-c212e276643b.png">

## Approach & Efficiency
Enqueue
The big O space/time complexity if the front stack is loaded is O(n) because it needs to cycle through the stack as many times as there are nodes in the stack. If the back stack is loaded, it is O(1) because it will add to the stack regardless of how many times it needs to be performed.
Dequeue
The big O space/time complexity if the front stack is loaded is O(n) because it will need to pop/push the nodes to the front of the stack. It will have to scale with n because it has to cycle through each value. If the back stack is loaded it will be O(1) because it will add to the stack regardless of how many times it needs to be performed.