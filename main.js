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


  // underscorevariablename => _resize used is used as a private function
  //for that class. in this it can only be used by the array class
  // a new address/ptr when an array is allocated. pop does need to re allocate
  // it just frees up that box.
  //app.size ration is 3 so once it exceeds that. lets say to 4. it will triple
  // its size. capacity will then be 12.
}
// main();

