# Binary Search of Sorted Array
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process
<img width="1704" alt="Screen Shot 2022-06-15 at 5 26 40 PM" src="https://user-images.githubusercontent.com/91757275/173964314-01108147-40e1-4d1c-ada1-cab98f90ba24.png">

## Approach & Efficiency
I used a binary search to solve the problem. I used three pointers, one at index 0, one at the end of the array and one in the middle. If the second pointer is higher than the search key then the first pointer becomes the middle pointer + 1 and we loop through again. If the second pointer is lower than the search key than the first pointer becomes the middle pointer - 1 and we search through again. If the search key is not found, -1 is returned.


