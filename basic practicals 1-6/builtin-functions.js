// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function convertToNumbers(arr) {
  var newArr = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      newArr[newArr.length] = parseFloat(arr[i]);
    }
  }
  return newArr;
}

var test = convertToNumbers(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(test);

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

function joinToString(arr) {
  var newString = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (isFinite(arr[i]) && arr[i] != null) {
      newString += arr[i];
    }
  }
  return newString;
}

var test = joinToString([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(test);

// Write a program to filter out falsy values from the array.
// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

function filterFalsyValue(arr) {
  var newArr = [];
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] && !isNaN(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }

  return newArr;
}

var test = filterFalsyValue([NaN, 0, 15, false, -22, "", undefined, 47, null]);
console.log(test);

// Write a program that calculates a number of integer values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function numberOfInteger(arr) {
  var int;
  var i;
  var counter = 0;
  for (i = 0; i < arr.length; i++) {
    int = parseInt(arr[i]);
    if (int == arr[i]) {
      counter++;
    }
  }
  return counter;
}

var test = numberOfInteger([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]);
console.log(test);

// Write a program that calculates a number of float values in the array.
// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function numberOfFloat(arr) {
  var float;
  var i;
  var j;
  var counter = 0;
  for (i = 0; i < arr.length; i++) {
    float = parseFloat(arr[i]);
    float += "";
    for (j = 0; j < float.length; j++) {
      if (float[j] == "." && float == arr[i]) {
        counter++;
      }
    }
  }
  return counter;
}

var test = numberOfFloat([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]);
console.log(test);
