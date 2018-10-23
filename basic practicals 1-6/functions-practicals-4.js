// Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

function checkElements(e, a) {
  var i;
  var result = "no";
  for (i = 0; i < a.length; i++) {
    if (a[i] == e) {
      result = "yes";
    }
  }
  return result;
}

var test = checkElements(3, [5, -4.2, 6, 7]);
console.log(test);

// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multipliesPositiveElements(a) {
  var newArray = [];
  var i;

  for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      newArray[i] = a[i] * 2;
    } else {
      newArray[i] = a[i];
    }
  }
  return newArray;
}

var test = multipliesPositiveElements([-3, 11, 5, 3.4, -8]);
console.log(test);

// Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function arrayMinimum(a) {
  var i;
  var minimum = a[0];
  var index = 0;
  for (i = 0; i < a.length; i++) {
    if (minimum > a[i]) {
      minimum = a[i];
      index = i;
    }
  }
  return console.log(minimum, index);
}

var test = arrayMinimum([4, 2, 2, -1, 6]);

// Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function arrayMin2(a) {
  var i;
  var min = a[0];
  var min2 = a[0];
  for (i = 0; i < a.length; i++) {
    if (min > a[i]) {
      min2 = min;
      min = a[i];
    }
  }
  return min2;
}

var test = arrayMin2([4, 2, 2, -1, 6]);
console.log(test);

// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function positiveElements(a) {
  sum = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
      sum = sum + a[i];
    }
  }
  return sum;
}

var test = positiveElements([3, 11, -5, -3, 2]);
console.log(test);

// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

function isSymmetric(a) {
  var i;
  var j;
  var result = "The array is symmetric.";
  for (i = 0, j = a.length - 1; i < j; i++, j--) {
    if (a[i] != a[j]) {
      result = "The array isn’t symmetric.";
    }
  }
  return result;
}

var test = isSymmetric([4, 4, -2, 7, -2, 4, 2]);
console.log(test);

// Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwines(a, b) {
  var result = "netacno";
  var arr1;
  for (i = 0; i < a.length && i < b.length; i++) {
    if (a[i] == b[i]) {
      result = "tacno je";
    }
  }
  return result;
}
var test = intertwines([4, 5, 6, 2], [4, 8, 11, 9]);
console.log(test);

// Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenates(a, b) {
  var i = 0;
  var j = 0;

  var res = [];

  for (i = 0; i < a.length; i++) {
    res[res.length] = a[i];
  }
  for (j = 0; j < b.length; j++) {
    res[res.length] = b[j];
  }
  return res;
}
var test = concatenates([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(test);
// Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function deleteElements(e, a) {
  var res = [];
  var i;
  for (i = 0; i < a.length; i++) {
    if (e != a[i]) {
      res[res.length] = a[i];
    }
  }
  return res;
}

var test = deleteElements(2, [4, 6, 2, 8, 2, 2]);
console.log(test);

// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertElement(e, p, a) {
  var b = [];
  for (var i = 0; i < a.length; i++) {
    if (p > a.length - 1) {
      b = "Error! Value of the position is greater than the array length.";
    } else {
      if (i == p) {
        b[i] = e;
        b[i + 1] = a[i];
      } else if (i > p) {
        b[i + 1] = a[i];
      } else {
        b[i] = a[i];
      }
    }
  }
  return b;
}

var test = insertElement(78, 3, [2, -2, 33, 12, 5, 8]);
console.log(test);
