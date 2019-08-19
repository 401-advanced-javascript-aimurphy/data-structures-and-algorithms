'use strict';

import { stringLiteral } from "@babel/types";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

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



function multiBracketValidation(input){
  if(typeof input!== String)return false;
  let validator = new Stack();
  for(let i=0;i<input.length;i++){
    if(i==='('||i==='['||i==='{')validator.push(i);
    if(i===')'){
      if(validator.peek()==='(')stack.pop();
      else return false;
    }
  }
};

