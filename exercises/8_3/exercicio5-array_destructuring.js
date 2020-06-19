const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo
const swap = (array) => {
    let [a1, a2, a3] = array; 
    return [a3, a2, a1]; }
    //array.sort((a, b) => b-a);
const swappedList = swap(myList);
console.log(swappedList)
assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
    