# Singly Linked List
We created a list class and extended it by giving it several methods for users to add new entries and search through it. You can add before or after a particular node or at the beginning or end of the entire list.

## Challenge
Create a Node class with a `head`property, stores values, and a property that points to the next node.
Define the following methods:
*`insert` - inserts a value at the beginning of the list
*`includes` - checks if a value is present in the code
*`toString` - takes in no value, returns the contents of the list as a string
*`append` - adds entry to the end, becomes the new tail
*`insertBefore` - inserts entry before target node
*`insertAfter` - inserts entry after target node

## Approach & Efficiency
In order to create our methods we decided to iterate over the lists with a while loop. For insert and append we really only need to identify head or tail but for anything on the interior, because of the relational nature between nodes in linked lists, we have to traverse to touch any/all values.
I *think* the Big O for before and after a target is going to be O(n) as you could traverse the entire list to find the value, while append would be and insert are O(1) because we can simple target the head or tail to insert the value which is independant of the length of the entire list. 

## UML
![alt text](code-challenges/401/Data-Structures/linkedList/appendbeforeafter.jpg "whiteboarding")