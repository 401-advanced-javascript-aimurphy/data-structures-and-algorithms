class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
};


class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Node;
  }

  hash(key) {
    return key.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0)
    }, 0) * 599 % this.size;
  }

  add(key, val) {
    let hashVal = this.hash(key);
    console.log(hashVal);
    if (!this.map[hashVal]) {

      if (!this.head) {
        this.head = new Node(val);
        return;
      }

      let current = this.head;
      let newHead = new Node(val);
      newHead.next = current;
      // newHead.place = current.place-1;
      this.head = newHead;

    }
    // this.map[hashVal].push({[key]:val});
    // 453pm 21 sept
  }

  contains(key) {
    // 455pm
    let hashKey = this.hash(key);

  }

  get(key) {
    // 
  }

}
