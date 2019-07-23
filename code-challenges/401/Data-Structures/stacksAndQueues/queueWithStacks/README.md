# Stacks and Queues
Instantiate a stack the utilizes queue methods.

## Challenge
We needed to first create a node constructor, and then the pseudoqueue class.
 

## Approach & Efficiency
By assigning values and pointers upon instatiation, we are able to readily target any nodes necessary to execute the functions.
All of theses methods have a big O of O(1) as they are readily accesible regardless of the length or depth of the queue or stack. 

## API
### PseudoQueue Methods
* `enqueue` - can enter item(s) into a queue
* `dequeue` - can remove item(s) from the queue until empty
* `peek` - can peek into queue seeing expected value