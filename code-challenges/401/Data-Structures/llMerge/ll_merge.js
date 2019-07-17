'use-strict';

// function mergeLists(list1,list2){
  
// }

// import { ModuleMap } from "jest-haste-map";

// Features
// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

class Node {
  constructor(value) {
    this.value = value;
    // this.place = place;
    this.next = null;
  }
};

class LinkedList {
  // Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.--GOOD
  insert(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    let newHead = new Node(value);
    newHead.next = current;
    // newHead.place = current.place-1;
    this.head = newHead;

  }
  // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  includes(target) {

    let current = this.head;
    let tru = [];
    let fal = [];

    if (current.value === target) { tru.push(true); }

    while (current.next) {
      current = current.next;
      let tern = (current ? current.value === target : null);
      if (tern === true) {
        tru.push(tern);
      } else {
        fal.push(tern);
      }
    }
    console.log(tru, fal);
    console.log(tru.length);
    if (tru.length > 0) {
      return true;
    } else {
      return false;
    }

  }

  // Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List.
  toString() {
    let list = [];
    let current = this.head;
    while (current.next) {
      list.push(current.value);
      current = current.next;
    }
    // console.log('arr',list);
    let string = list.toString();
    return string;
  }

  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    // if(!this.tail){
    //   this.tail = new Node(value);
    //   return;
    // }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = new Node(value);
    // current.next.place = current.place+1;
    this.tail = current.next;

  }

  insertBefore(value, target) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;

    while (current.next.value !== target) {
      current = current.next;
    }

    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;
  }

  insertAfter(value, target) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;

    while (current.value !== target) {
      current = current.next;
    }

    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;
  }

  kthFromEnd(k) {
    if (k < 0) {
      console.log('k<0');
      return 'Error: entry must be within list length';
    }

    if(k===0){
      console.log('k=0', this.tail);
      return this.tail;
    }

    let current = this.head;
    let counter = -1;
    while (current !== null) {
      counter++;
      current = current.next;
    }
    console.log(counter);
    if (k===counter){
      console.log('k=counter',counter, this.head);
      return this.head;
    }
    if (k > counter) {
      console.log('Error: number exceeds list length');
      return 'Error: number exceeds list length';
    }
    current = this.head;
    while (counter > k) {
      counter--;
      current = current.next;
    }
    console.log(current.value)
  }

  merge(list1){

  }

}

let list = new LinkedList();
list.append('frog');
list.append('here');
list.insert('herro');
list.insertBefore('the🐸', 'frog');
list.insertAfter('kermit', 'herro');
list.includes('kermit');
list.includes('pie');
list.toString();
// list.kthFromEnd(2);
list.kthFromEnd(0);
// list.kthFromEnd(4);
list.kthFromEnd(8);



let listToo = new LinkedList();
listToo.append('a');
listToo.append('a');
listToo.append('a');
listToo.append('a');
listToo.append('a');
listToo.append('a');
listToo.append('a');


// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.


module.exports = LinkedList;

function mergeLists(list1,list2){
  let current1 = list1.head;
  let current2 = list2.head;

  while(current1.next||current2.next){

    let v1n = current1.next.next;
    let v2n = current2.next.next;

    let v1 = current1.next;
    let v2 = current2.next;

    current2.next = v1;

    current1.next = current2;
    current

    current1=current1.next;
    current2=current2.next;
  }
  
}

mergeLists(list,listToo);