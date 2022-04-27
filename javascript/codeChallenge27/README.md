# Challenge Summary
Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.
Once you are done with your article, code a working, tested implementation of Merge Sort based on the pseudocode provided.
<img width="588" alt="Screen Shot 2022-04-26 at 9 21 41 PM" src="https://user-images.githubusercontent.com/91757275/165440128-d6bf8ecc-1d09-47b6-b2aa-a1a9e366a688.png">
<img width="587" alt="Screen Shot 2022-04-26 at 9 21 57 PM" src="https://user-images.githubusercontent.com/91757275/165440144-650ac2b9-68da-4253-b2c7-8f16f0c42f11.png">


## Whiteboard Process
<img width="1728" alt="code challenge 27" src="https://user-images.githubusercontent.com/91757275/165439880-1029f70c-71e1-4d4c-a8df-51d643aa11c3.png">

## Approach & Efficiency

breadthFirst() Efficiency:

Time = O(n*logn) as entire input must be iterated through, and this must occur O(log(n)) times (the input can only be halved O(log(n)) times). n items iterated log(n) times gives O(n log(n)). source
Space = O(n) since the space used scales directly with n due to the recursion.


After some googling I think the time efficiency will be O(n*logn) because the entire input must be interated through O(log(n)) times.
The space efficiency will be O(n) because it will have to scale directly with n.
