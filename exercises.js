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

// console.log(returnedArr);

//7
function maxSum(arr) {
  let total = 0;
  let max = 0;
  arr.forEach(num => {
    total += num;
    console.log(num, total);
    if (total > max) {
      max = total;
    }
  });
  return max;
}
// console.log(maxSum([4, 6, -3, 5, -2, 1]));

//8
function mergeArr(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}
// console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//9

function character(str, toRemove) {
  console.log(str);

  let newStr = '';

  for (let i in str) {
    if (!toRemove.includes(str[i])) {
      newStr += str[i];
    }
  }
  console.log(newStr);
  return newStr;
}

character('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

//10
