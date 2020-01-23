//5
function makeUrl(str) {
  console.log(str.split(' ').join('%20'));
}
// makeUrl('hello there what time is it');

//6
Array.prototype.mfilter = function (fun) {
  var filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

var returnedArr = [1, 2, 3, 4, 5, 6].mfilter(function (element, index, arr) {
  return element > 5;
});

console.log(returnedArr);