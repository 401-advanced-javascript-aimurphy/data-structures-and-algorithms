'use strict';

// REFACTORED
function guessWeight(tree,num){

  let result = false;
  let wsf = 0;//try to use wsf as param
  
  function _walk(current){
  console.log(current.value);

  wsf+=current.value;
  console.log('wsf Before', wsf);

  if(current.left)_walk(current.left);
  if(current.right) _walk(current.right);

  // this next part may seem brute force. I wanted to be sure I am getting the leaf I am looking for and not accidentally logging or skipping anybody
  if(current.left===null&&current.right===null&&wsf===num)result=true;

  wsf-=current.value;
  console.log('wsf After', wsf);
  };

  _walk(tree.root);
  return result;
}

guessWeight(tree,9);
// true 8 10 9 11
// guessWeight(tree, 15);


// FROM EARLIER TODAY
// function guessWeight(tree,num){
//   let current = tree.root;

//   let recursion = 0;

//   let result = false;

//   console.log('root is',tree.root.left);

//   function _walk(current){
//     if(result === true) return true;

//     console.log('current is',current);

//     recursion += current.value;

//     if(current.left){
//       current=current.left;
//       _walk(current);
//     }
    
//     if(current.right){
//       current = current.right;
//       _walk(current);
//     }

//     if (recursion===num){
//       result=true;
//       recursion -= current.value;
//     }

//   }
//   _walk(current);
//   console.log(recursion);
//   return result;
// }
