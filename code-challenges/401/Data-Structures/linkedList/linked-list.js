// Features
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    if(!this.head){
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next=new Node(value);
    this.tail=current.next+'';
  }

  insert(value){
    if(!this.head){
      this.head = new Node(value);
      return;
    }
    if(this.head){
      let current = this.head;
      let newHead = new Node(value);
      newHead.next = current;
      this.head = newHead;
    }
  }

  includes(item){
    let current = this.head;
    while(current.next){
      current = current.next;
      console.log('currently',current.value);
      if(current.value=item){
        return true+'🐸';
      }else{return false;}
    }
    
  }
}

let list = new LinkedList();
list.append('herro');
// list.insert('oh');
list.append('kermit');
// list.append('the');
// list.append('frog');
list.append('here');
list.includes('here');
console.log(list);
// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
// Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
// Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
// Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List.
// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
// Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).