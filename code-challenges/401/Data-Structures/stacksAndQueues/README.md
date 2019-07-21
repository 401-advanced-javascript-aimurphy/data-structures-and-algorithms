# Stacks and Queues
We implemented a stack and a queue data structure.

## Challenge
We needed to first create a node constructor, and then the stack and the queue classes. 

Stack would need three methods: push, adding a node to the top of the stack; pop, removing a node off the top of the stack; and peek, which checks and returns the value of the node at the top.

For queues, we created a new class that contained three similar methods to the ones in stack. Enqueue adds a node to the rear of he queue; dequeue, removes a node from the front; and peek, which checks and returns the front node.

## Approach & Efficiency
By assigning values and pointers upon instatiation, we are able to readily target any nodes necessary to execute the functions.
All of theses methods have a big O of O(1) as they are readily accesible regardless of the length or depth of the queue or stack. 

## API
### Stack Methods
* `push` - can push value(s) onto a stack
* `pop` - can pop value(s) and even empty a stack
* `peek` - can peek at the item at the top of the stack

### Queue Methods
* `enqueue` - can enter item(s) into a queue
* `dequeue` - can remove item(s) from the queue until empty
* `peek` - can peek into queue seeing expected value