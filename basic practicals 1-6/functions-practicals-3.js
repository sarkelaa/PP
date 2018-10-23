// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertStringAtPosition(s, e, n) {
  var i;
  newString = "";

  for (i = 0; i < s.length; i++) {
    if (n == i) {
      newString += e;
    }
    newString += s[i];
  }
  return newString;
}
var test = insertStringAtPosition("My random string", "JS ", 10);
console.log(test);

// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinIntoString(arr) {
  var i;
  newString = "";

  for (i = 0; i < arr.length; i++) { }
}

// Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

// Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

// Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]




// Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function createArray(number, value) {
  var newArray = [];
  var i;

  for (i = 0; i < number; i++) {
    if (value != undefined) {
      newArray[newArray.length] = value;
    } else {
      newArray[newArray.length] = null;
    }
  }
  return newArray;
}

var test = createArray(2);
console.log(test);


// Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function isNumberPerfect(n) { }

// Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function foundString(string, word) {
  var i;
  var j;
  var s = "";
  var arr = [];
  var counter = 0;

  for (i = 0; i < string.length; i++) {
    if (string[i] == "," || string[i] == " " || string[i] == ".") {
      arr[arr.length] = s;
      s = "";
    } else {
      s += string[i];
    }
  }

  for (j = 0; j < arr.length; j++) {
    if (arr[j] == word) {
      counter++;
    }
  }

  return counter;
}

var test = foundString("aa, bb, aa, cc, dd, aa ", "aa");
console.log(test);

// Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "myemail...@bgit.rs"

function hideEmail(email) {
  var i;
  var newEmail = "";
  var s = false;

  for (i = 0; i < email.length; i++) {
    if (newEmail.length < 5) {
      newEmail += email[i];
    }
    if (email[i] == "@") {
      newEmail += "...";
      s = true;
    }
    if (s) {
      newEmail += email[i];
    }
  }
  return newEmail;
}

var test = hideEmail("myemailaddress@bgit.rs");
console.log(test);

// Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFrequent(arr) {
  'use strict'
  var i;
  var j;
  var most = arr[0];
  var counter1 = 0;
  var counter = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        counter1++;
      } else {
        counter1 = 0;
      }
      if (counter1 > counter) {
        counter = counter1;
        most = arr[i];
      }
    }
  }
  return most;
}
var test = mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
console.log(test);
