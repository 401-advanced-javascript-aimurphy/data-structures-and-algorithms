'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class PseudoQueue{

  constructor() {
    this.top = null;
    this.bottom = null;
    this.stack = [];
    this.stack2 = []; 
  }

  enqueue(value){
    this.stack.push(value);
    this.bottom = value;
    console.log(this.bottom);
  }

  dequeue(){
    let current = stack[stack.length-1];
    while(current.next){
      this.stack2.push(current);
      this.stack.pop(current);
    }
    console.log(current);
    let value = this.stack.pop();
    this.top = this.stack[0];
    return value;
  }

  peek(){
    return this.stack[0];
  }

}