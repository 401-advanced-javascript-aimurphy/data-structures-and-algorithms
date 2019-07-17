# Merge Lists
Merging unique lists in to one new list containing all nodes.

# Challenge
Write a function called `mergeLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). 

#Approach and Efficiency
Initally we were looking to loop over lists inserting copies of nodes from one into the other. Now we are looking to simply point between nodes with out truly creatign or destroying, but temporarliy renaming nodes to store them during reassignment.

#UML
![alt text](code-challenges/401/Data-Structures/linkedList/llMerge/zipmerge.jpg "whiteboarding")