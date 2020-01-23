const Array = require('./array');
const Memory = require('./memory');

const main = () => {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  console.log(arr);
}


module.exports = main