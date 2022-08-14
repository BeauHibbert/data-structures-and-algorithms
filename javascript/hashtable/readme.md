# Hashtables
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

The basic idea of a hashtable is the ability to store the key into this data structure, and quickly retrieve the value. This is done through what we call a hash. A hash is the ability to encode the key that will eventually map to a specific location in the data structure that we can look at directly to retrieve the value.

Since we are able to hash our key and determine the exact location where our value is stored, we can do a lookup in an O(1) time complexity. This is ideal when quick lookups are required.

## Challenge
Features
Implement a Hashtable Class with the following methods:

set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
get
Arguments: key
Returns: Value associated with that key in the table
contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
keys
Returns: Collection of keys
hash
Arguments: key
Returns: Index in the collection for that key

<img width="1502" alt="Screen Shot 2022-07-24 at 8 52 18 PM" src="https://user-images.githubusercontent.com/91757275/180697165-a9c39a6b-4ebc-442c-a145-5a4c8a814727.png">

## Resources
https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html

## Tree intersection

### Challenge Summary
- Find common values in 2 binary trees.
- Write a function called tree_intersection that takes two binary trees as parameters.
- Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

### Whiteboard Process
<img width="1541" alt="Screen Shot 2022-08-13 at 8 55 59 PM" src="https://user-images.githubusercontent.com/91757275/184521767-8bdf97d8-281c-40d1-ba06-0b59a0b12f87.png">

### Approach & Efficiency

The approach that I used was using a hash map to store values from the first tree and then while traversing the second tree pushing any value into an array that matches from the first tree.
The big O of time would be O(n) because it will have to scale with n as it loops through. The big O of space will be O(2n) because we are using both a hashmap and output array.
