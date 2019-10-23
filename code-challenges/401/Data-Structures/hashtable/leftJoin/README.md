# Hashmap LEFT JOIN
<!-- Short summary or background information -->

## Challenge
Implement a simplified LEFT JOIN for 2 hashmaps. In other words: Write a function that LEFT JOINs two hashmaps into a single data structure.

PARAMS:
* a hashmap that has word strings as keys, and a synonym of the key as values.
* a hashmap that has word strings as keys, and antonyms of the key as values.

Combine the key and corresponding values (if they exist) into a new data structure according to _LEFT JOIN logic_.

LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. 

If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

Example:
#### IN--
param 1 synonyms hashmap (fond: enamored)
param 2 antonyms hashmap (fond: averse)

#### OUT-- 
[fond,enamored, averse]

NO library methods available to your language.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## Solution
<!-- Embedded whiteboard image -->