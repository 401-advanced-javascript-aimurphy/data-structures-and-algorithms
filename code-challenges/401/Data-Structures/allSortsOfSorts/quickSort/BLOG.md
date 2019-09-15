## what is it?
Like merge sort this is considered a **divide and conquer** algorithm. Data is divided at a pivot point, idealy a value close to the middle value of the set, and once placed it is locked in place--becoming a partition. The newly formed groups of data recursively select pivots, sort them  into place, lock and partition and repeat. 
## how do you do it?
Choose a pivot point, compare the value of that index to the values of the other indices and swap places with them depending if they are higher or lower, if the value being compared is higher it needs to be towards the right, if lower then left. once the pivot has been compared to all the indices, it should result in all values to its right being higher and to the left being lower. the pivot index now becomes a partition, and to the left and right are subsets that will do the exact same thing, breaking into smaller and smaller groups and locking into place, returning the fully sorted array.

## pseudo form our instructor:
```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## helpful vids!
[BEST folkdance!](https://www.youtube.com/watch?v=ywWBy6J5gz8) - hungarian quick sort. They are a fun bunch. THIS IS MY FAVORITE!

[cups with i and j indices!](https://www.youtube.com/watch?v=MZaf_9IZCrc) - like the dance, nice visual but also great because you see how your loops move with i and j markers. 