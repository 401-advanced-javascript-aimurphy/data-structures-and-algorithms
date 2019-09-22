# Hashtables
<!-- Short summary or background information -->

## Challenge
<!-- Description of the challenge -->

## Approach & Efficiency
starts as O(1) but overtime is O(n) due to linked lists as a result of collisions

## API
`add` takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
`get`: takes in the key and returns the value from the table.
`contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.
`hash`: takes in an arbitrary key and returns an index in the collection.