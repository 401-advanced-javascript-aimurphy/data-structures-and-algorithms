## what is it?
It is a method for sorting by splitting up your data in halves, and halves and halves to their smallest components, comparing pairs and weaving them back together by pairs in order until you return to the full sorted data set. Because of this splitting strategy, it is considered a **divide and conquer** algorithm.
## how do you do it?
Oh gosh, like that☝️. So you take the data and recursively divide it in half. Compare and sort and recombine until it returns the sorted array.

## pseudo code form our teacher
```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
     sort the left side
      Mergesort(left)
     sort the right side
      Mergesort(right)
     merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```
## helpful vids:

[live code demo](https:ww.youtube.com/watch?v=RAXx57VarJI) - not QUITE our algorithm but nice! and jazzy latin music!

[folk dance!](https:ww.youtube.com/watch?v=XaqR3G_NVoo) - not as fun as the hungarians but still a nice visual

[sorting with robots!](https:ww.youtube.com/watch?v=es2T6KY45cA) - little robot cartoon that the kiddos liked, merge vs quick.

### and helpful links
[simple explanation of merge sort](https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2) good content, diagrams and video. this gal really nailed this assignment.