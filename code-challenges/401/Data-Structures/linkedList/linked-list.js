// Features
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value, place){
    this.value = value;
    this.place = place;
    this.next = null;
  }
};

class LinkedList{
  // Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  constructor(){
    this.head = null;
    this.tail = null;
  }

  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  insert(value){

    if(!this.head){
      this.head = new Node(value, 1);
      return;
    }

    let current = this.head;
    let newHead = new Node(value);
    newHead.next = current;
    newHead.place = current.place-1;
    this.head = newHead;

  }

  // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  includes(target){

    let current = this.head;

    while(current.next){
      current = current.next;

      console.log('currently',current.value);

      if(current.value=target){
        return true+'🐸';
      }else{return false;}
    }
    
  }

  // Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List.
  toString(){
    // code here
  }

  append(value){

    if(!this.head){
      this.head = new Node(value, 1);
      return;
    }
    // if(!this.tail){
    //   this.tail = new Node(value);
    //   return;
    // }

    let current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = new Node(value, 0);
    current.next.place = current.place+1;
    this.tail = current.next;

  }

  insertBefore(value, target){
    // if(!this.head){
    //   this.head = new Node(value);
    //   return;
    // }
    // console.log(this.head);
    let current = this.head;
    console.log(current.value, 'head');

    while(current.next.value!==target){
      current = current.next;
      // if(current.next===target){
        console.log(target);
        console.log(current.value, 'while');
      // }
    }
    console.log(current.value, 'out');

    let newNode = new Node(value);
    newNode.place = this.tail.place+1;
    newNode.next = current.next;
    current.next = newNode;

    console.log(newNode, 'new');

    // while(current.next!==null){
    //   current.place++;
    // }

  }

  insertAfter(value, target){
    // code
  }

}

let list = new LinkedList();
// list.append('og');
// list.append('dog');
list.append('frog');
list.append('here');
list.insert('herro');
list.insertBefore('kermit the🐸', 'frog');

console.log('list',list);


// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.