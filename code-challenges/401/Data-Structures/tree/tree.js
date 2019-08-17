'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
    this.queue = [];
  }
  enqueue(value){
    this.queue.push(value);
    this.back = value;
    // console.log(this.back);
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

class BinaryTree{
  constructor(root=null){
    this.root=root;
  }

  insert(value){
     if(!this.root){
       this.root=new Node(value);
       }else{

    let inTree = new Queue;
    let outTree = new Queue;

    inTree.enqueue(tree.root);
    let current;

   while(inTree.peek()){
     current = inTree.dequeue();

     if(current.left===null){
       current.left=new Node(value);
       break;
       }else{
         inTree.enqueue(current.left);
      };
      if(current.right===null){
        current.right=new Node(value);
        break;
      }else{
        inTree.enqueue(current.right);
     };

      outTree.enqueue(current);
    }
       }

  }

  preorder(){
    let results = [];
    
    let _walk =(node)=> {
    results.push(node.value);

    if(node.left)_walk(node.left);
    if(node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  inOrder(){
    let results = [];

    let _walk=(node)=>{
      if(node.left)_walk(node.left);
      results.push(node.value);

      if(node.right)_walk(node.right);
      results.push(node.value);
    }

    _walk(this.root);
    return results;
  }

  postOrder(){
    let results = [];
    
    let _walk =(node)=> {
      if(node.left)_walk(node.left);
      if(node.right)_walk(node.right);
      results.push(node.value);
    };
  
    _walk(this.root);
  
    return results;
  };

  levelOrder(){

    let results = [];
    let nodeQueue=[];

    nodeQueue.push(this.root);

    while(nodeQueue.lenth){
      let current=nodeQueue.shift();
      results.push(current.value);
      if(current.left)nodeQueue.push(current.left);
      if(current.right)nodeQueue.push(current.right);
    }
    return results;
  }


  
  breadthFirst(){
    // code things

    if(!this.root)return null;

    let inTree = new Queue;
    let outTree = new Queue;

    inTree.enqueue(tree.root);
    let current;

    while(inTree.peek()){
      current = inTree.dequeue();

      if (current.left)inTree.enqueue(current.left);
      if(current.right)inTree.enqueue(current.right);

      console.log(current.value);
      outTree.enqueue(current);
    }
  }

  findMaximumValue(){

    if(!this.root)return null;

    let max = 0;

    let _walk =(node)=> {
      if (node.value>max)max=node.value;
      if(node.left)_walk(node.left);
      if(node.right) _walk(node.right);
    };

    _walk(this.root);
    
    return max;
  }
}

let tree = new BinaryTree();


tree.insert(7);
tree.insert(8);
tree.insert(9);
tree.insert(10);
tree.insert(4);
tree.insert(5);
tree.insert(6);

// console.log('tree is',tree);

tree.breadthFirst();
tree.findMaximumValue();
