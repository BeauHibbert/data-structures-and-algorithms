# Trees

### How can we read all values in a Tree?

#### Depth First: Read all the sub children on one side of the tree, before reading children of the other side.

#### Pre Order: Current Node -> Left Subtree -> Right Subtree.
#### In Order: Left Subtree -> Current Node -> Right Subtree
#### Post Order: Left Subtree -> Right Subtree -> Current Node
#### Breadth First: Read all nodes on the current level, before traversing to subtrees.

#### The efficiency for preOrder, inOrder, and postOrder are all O(n) because it cycles through the tree once so it scales with n.

<img width="1728" alt="Screen Shot 2022-04-10 at 10 19 44 PM" src="https://user-images.githubusercontent.com/91757275/162675551-917f02ee-351d-4442-9190-7938114e5389.png">



# Tree-max

#### Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

#### Space and time efficiency
##### It has O(n) time efficiency because it has to scale through the whole tree so it will scale with n as it grows.
##### It has O(1) space efficiency because it only has to track the max value so it will be linear.

<img width="1728" alt="Screen Shot 2022-04-11 at 10 08 39 PM" src="https://user-images.githubusercontent.com/91757275/162885292-21378529-fab9-4719-858c-4828355d8836.png">
