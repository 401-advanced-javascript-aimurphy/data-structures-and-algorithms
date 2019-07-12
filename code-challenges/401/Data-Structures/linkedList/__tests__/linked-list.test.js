'use strict';

const LinkedList = require('../linked-list.js');

describe('insert', ()=>{
  it('inserts a value at the beginning of the list', ()=>{
    let expected = 'herro'
    let list = new LinkedList();
    list.append('frog');
    list.append('here');
    list.insert('herro');
    list.insertBefore('the🐸', 'frog');
    list.insertAfter('kermit', 'herro');
    list.includes('kermit');
    list.includes('pie');
    list.toString();
    console.log('list',list);
    console.log('test 1',list.head.value);
    expect(list.head.value).toBe(expected);
  });
});


describe('includes', ()=>{
  it('checks if a value is present in the code', ()=>{
    let list = new LinkedList();
    list.append('frog');
    list.append('here');
    list.insert('herro');
    list.insertBefore('the🐸', 'frog');
    list.insertAfter('kermit', 'herro');
    list.includes('kermit');
    list.includes('pie');
    list.toString();
    expect(list.includes('pie')).toBe(false);
  });
});

describe('includes', ()=>{
  it('checks if a value is present in the code', ()=>{
    let list = new LinkedList();
    list.append('frog');
    list.append('here');
    list.insert('herro');
    list.insertBefore('the🐸', 'frog');
    list.insertAfter('kermit', 'herro');
    list.includes('kermit');
    list.includes('pie');
    list.toString();
    list.kthFromEnd(2);
    list.kthFromEnd(0);
    list.kthFromEnd(4);
    list.kthFromEnd(8);
    expect(list.kthFromEnd(0).value).toBe('here');
  });
});