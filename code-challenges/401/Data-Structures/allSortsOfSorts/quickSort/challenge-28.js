'use strict';

// const arr = [5, 4, 9, 1, 2];

function swap(arr, i, j){
   [arr[i],arr[j]] = [arr[j],arr[i]];
}

// partition calls on swap
function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
 
// qsort calls on partition which calls on swap
function qsort(arr,left,right){
   var len = arr.length, 
   pivot,
   partitionIndex;

  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   qsort(arr, left, partitionIndex - 1);
   qsort(arr, partitionIndex + 1, right);
  }
  return arr;
}

// qsort(arr,0,arr.length-1);