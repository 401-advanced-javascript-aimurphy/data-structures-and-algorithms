'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};


class Queue{
  constructor(){
    // this.front = null;
    this.back = null;
    this.queue = [];
  }
  enqueue(value){
    this.queue.push(value);
    this.back = value;
    console.log(this.back);
  }
  dequeue(){
    let value = this.queue.shift();
    this.front = this.queue[0];
    return value;
  }
  peek(){
    return this.queue[0];
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.bottom = null;
    this.stack = [];  
    }

  push(value) {
    this.stack.push(value);
    this.top = value;
  }

  pop(){
    let value = this.stack.pop();
    this.top = this.stack[this.stack.length-1];
    return value;
  }

  peek(){
    return this.top;
  }
}
