'use strict'

const queue = require('../stacksAndQueues/stacks-and-queues.js');

class animalShelter{
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  fifiNQ(animal, species){
    if(animal!=='cat'||animal!=='dog')return null;
    if(typeof animal !== 'String') return null;

    let cat = {}

    let 


  }

  fifoDQ(pref){
    if(pref==='cat'){
      if(this.cats.length===0)return null;
      let adoptee = cats.dequeue();
      return `Congrats on your new ${adoptee.species}, ${adoptee.name}`
    }
    if(pref==='dog'){
      if(this.cats.length===0)return null;
      let adoptee = dogs.dequeue();
      return `Congrats on your new ${adoptee}`
    }
  }

}

fifiNQ({name:'catrick stewart', species: 'cat'});