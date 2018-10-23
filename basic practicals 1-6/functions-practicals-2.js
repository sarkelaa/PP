// Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function isString(a) {
  if (typeof a === "string") {
    return true;
  } else {
    return false;
  }
}
var test = isString("marla");
console.log(test);

// Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isEmptyString(a) {
  if (a === " ") {
    return true;
  } else {
    return false;
  }
}
var test = isEmptyString(" ");
console.log(test);

// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenates(s, a) {
  var i = 0;
  var newString = "";

  do {
    i++;
    newString += s;
  } while (i < a);

  return newString;
}
var test = concatenates("Ha", 4);
console.log(test);

// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function numberOfEmpty(a) {
  var counter = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] === " ") {
      counter++;
    }
  }
  return counter;
}
var test = numberOfEmpty("My random string");
console.log(test);

// Write a function to find the position of the first occurrence of a character in a string.The result should be in human numeration form.If there are no occurrences of the character, the function should return -1.

function firstPositionOfA(e) {
  var firstPosition = -1;
  for (var i = 0; i < e.length; i++) {
    if (e[i] == "a") {
      firstPosition = i + 1;
      break;
    }
  }
  return firstPosition;
}

var test = firstPositionOfA("Marla");
console.log(test);

// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function lastPositionOfA(e) {
  var lastPosition = -1;
  for (var i = 0; i < e.length; i++) {
    if (e[i] == "a") {
      lastPosition = i + 1;
    }
  }
  return lastPosition;
}

var test = lastPositionOfA("Marla");
console.log(test);

// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function convertToArray(e) {
  var i;
  var arrayOfString = [];
  for (i = 0; i < e.length; i++) {
    if (e[i] == " ") {
      arrayOfString[i] = null;
    } else {
      arrayOfString[i] = e[i];
    }
  }
  return arrayOfString;
}

var test = convertToArray("Marla je mala");
console.log(test);

// Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isTheNumberPrime(e) {
  var i;
  var rez;

  if (!(e % 2) || e == 2 || e == 1) {
    rez = e + " is not a prime number!";
  } else {
    rez = e + " is a prime number!";
  }
  return rez;
}

var test = isTheNumberPrime(18);

console.log(test);

//  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

function replaceSpaces(a, s) {
  var i;
  var separator = s;
  var newString = "";

  if (s == undefined) {
    separator = "-";
  }

  for (i = 0; i < a.length; i++) {
    if (a[i] == " ") {
      newString += separator;
    } else {
      newString += a[i];
    }
  }
  return newString;
}

var test = replaceSpaces("My random string", "+");
console.log(test);

//  Write a function to get the first n characters and add “...” at the end of newly created string.

function getCharacters(n, e) {
  var i;
  var newString = "";

  for (i = 0; i < n; i++) {
    newString += e[i];
  }

  newString += "...";
  return newString;
}

var test = getCharacters(11, "My random string");
console.log(test);

//  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function covertToNumber(a) {
  var i;
  var numArr = [];

  for (i = 0; i < a.length; i++) {
    if (a[i] / a[i] === 1) {
      numArr[numArr.length] = a[i] * 1;
    }
  }
  return numArr;
}

var test = covertToNumber(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(test);

//  Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function retirement(sex, e) {
  var rez;

  if (sex == "male") {
    if (e <= 65) {
      rez = 65 - e + " years to the retirement";
    } else {
      rez = "The man is in pension already!";
    }
  } else {
    if (e <= 60) {
      rez = 60 - e + " years to the retirement";
    } else {
      rez = "The woman is in pension already!";
    }
  }
  return rez;
}

var test = retirement("female", 20);

console.log(test);
