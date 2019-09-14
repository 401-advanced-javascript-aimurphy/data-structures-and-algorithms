'use strict';
// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
           
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0

//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
            
//         k <-- k + 1

//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left

let mergeSort = (arr) =>{
  let n = arr.length;

  if(n>1){
  let mid = Math.floor(n/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid,n);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  }
  return arr
}

let merge=(left, right, arr)=>{
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length){
    if (left[i] <= right[j]){
      arr[k]=left[i];
        i++;
    }  
    else{
      arr[k]=right[j];
      j++;
    }    
    k++;
}
if (i === left.length){
  for(jj=j;jj<right.length;jj++){
    arr[k]=right[jj];
    k++;
  }
}else{
  for(ii=i;ii<left.length;ii++){
    arr[k]=left[ii];
    k++;
  }
}
 return arr;
} 

mergeSort(arr);

// ***************

// const mergeSort = (arr) =>{
//   let n = arr.length;
//   if (n<=1) return arr;

//   let mid = Math.floor(n/2);

//   let left = mergeSort(arr.slice(0,mid));
//   let right = mergeSort(arr.slice(mid));

//   let sorted=[];

//   let indexL=0;
//   let indexR=0;

//   while(indexL<left.length && indexR<right.length){
//     const lefty = left[indexL];
//     const righty = right[indexR];

//     if (lefty<=righty){
//       sorted.push(lefty);
//       indexL+=1;
//     }else{
//       sorted.push(righty);
//       indexR+=1;
//     }
//   }
//   while(indexL<left.length){
//     sorted.push(left[indexL]);
//     indexL+=1;
//   }
//   while(indexR<right.length){
//     sorted.push(right[indexR]);
//     indexR+=1;
//   }
//   return sorted;
// }
