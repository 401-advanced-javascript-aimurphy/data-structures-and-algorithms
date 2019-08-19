'use strict';

const BinaryTree = require('../tree.js')

describe('BinaryTree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });
});

describe('BinaryTree.add', () => {
  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    tree.add(1);
    expect(!tree.root).toBe(false);
  });
});

describe('BinaryTree.add', () => {
  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    expect(!tree.root.left).toBe(false);
    expect(!tree.root.right).toBe(false);
  });
});

describe('BinaryTree.preorder', () => {
  it('Can successfully return a collection from a preorder traversal', () => {
    let expected=[1,2,3];
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.preorder();
    expect(tree.preorder()).toBe(expected);
  });
});

describe('BinaryTree.inOrder', () => {
  it('Can successfully return a collection from an inorder traversal', () => {
    let expected=[2,1,3];
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    let order = function(){
      answer = tree.inOrder();
      return answer;
    } 
    expect(order).toBe(expected);
  });
});

describe('BinaryTree.postOrder', () => {
  it('Can successfully return a collection from a postorder traversal', () => {
    let expected=[2,3,1];
    let tree = new BinaryTree();
    tree.add(1);
    tree.add(2);
    tree.add(3);
    let order = tree.postOrder();
    expect(order).toBe(expected);
  });
});
