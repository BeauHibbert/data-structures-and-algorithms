# Insert to Middle of an Array
Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your
language, return an array with the new value added at the middle index.

## Whiteboard Process
<img width="1720" alt="Screen Shot 2022-06-14 at 6 28 15 PM" src="https://user-images.githubusercontent.com/91757275/173718820-179516bb-0145-449f-b2b9-786f3d5a5095.png">

## Approach & Efficiency
In my algorithm, I split the array in half with math.ceil to account for an odd case of elements, and then inserted the first half of the array into a 
new array and the second half of the array into the new array at their index + 1. the new element could then be put in the middle.