# Challenge 26 - Insertion Sort

## what is it?
It is a method for sorting by comparing by moving down the dataset. So the values are compared in place nad rearraged as needed.
## how do you do it?
beginning from one side you examine each position down the line and comare it to its neighbor. If it is larger it need to be oriented to the right, and smaller goes to the left.as you continue to move through positions the sorting gets finer and finer tuned. You should be completely sorted by the time you reach the final position, no need to reiterate.

### some PSEUDO from our teacher
```
 InsertionSort(int[] arr)
  
     FOR i = 1 to arr.length
    
       int j <-- i - 1
       int temp <-- arr[i]      
       WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
         j <-- j - 1
        
       arr[j + 1] <-- temp
```
## helpful vids!
[folk dance](https://www.youtube.com/watch?v=ROalU379l3U) - romanian insert sort

[js insert sort demo](https://www.youtube.com/watch?v=0KQyyZatDgM) - this guy takes the geeks for geeks tutorial and breaks it down for you js style. 

### and helpful links
[computational fairy tale](https://computationaltales.blogspot.com/2011/04/why-tailors-use-insertion-sort.html) - this one was curtesy of a link from our TA Billy. This was a fun and real worldy read, nice for those of us not fully fluent in programming.

[intro to insert sort](https://medium.com/karuna-sehgal/an-introduction-to-insertion-sort-16b97619697) - this gal is writing a series on DSA stuff broken down to the fundamentals. Good for beginners!

## best uses?
smaller data sets or partially sorted sets greatly increase the efficiency of this method