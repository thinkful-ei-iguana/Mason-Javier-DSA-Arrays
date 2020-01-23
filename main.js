const Array = require('./array');


function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  // arr.push(3);//length: 1, capac: 3, ptr: 0
  // arr.push(5);
  // arr.push(15); //here capacity maxes out then adds one and multiplies by 4 (3*4=12) (calls resize())
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);//length: 6, capac: 12, ptr: 3  cap is set from above
  // console.log(arr);
  // arr.pop();
  // arr.pop();
  // arr.pop();//length: 3, capac: 12, ptr: 3 //only length changes not capacity or ptr
  // 
  // console.log(arr.get(0));
  // arr.push('mason'); //memory only accepts numbers
  console.log(arr.get(0));
}

main();