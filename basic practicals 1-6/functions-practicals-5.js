// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function switchMinAndMax(a) {
  var i;
  var max = a[0];
  var min = a[0];
  var counterMax;
  var counterMin;
  var temp;

  for (i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
      counterMax = i;
    }
    if (a[i] < min) {
      min = a[i];
      counterMin = i;
    }
  }
  temp = a[counterMax];
  a[counterMax] = a[counterMin];
  a[counterMin] = temp;

  return a;
}

var test = switchMinAndMax([3, 500, 612, 149, 53, -414, 1, 19]);

console.log(test);

// Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function newArray(a) {
  var i;
  var array = [];

  for (i = 0; i < a.length; i++) {
    array[i] = a[i] / 2 + 5;
    if (array[i] == 0) {
      array[i] = 20;
    }
  }
  return array;
}

var test = newArray([3, 500, -10, 149, 53, 414, 1, 19]);
console.log(test);

// Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function gradeStudents(name, grade) {
  var i;
  var rez = "";

  for (i = 0; i < name.length; i++) {
    rez += name[i] + " acquired " + grade[i] + " points ";

    if (grade[i] > 50 && grade[i] <= 60) {
      rez += "and earned 6. \n";
    } else if (grade[i] > 60 && grade[i] <= 70) {
      rez += "and earned 7. \n";
    } else if (grade[i] > 70 && grade[i] <= 80) {
      rez += "and earned 8. \n";
    } else if (grade[i] > 80 && grade[i] <= 90) {
      rez += "and earned 9. \n";
    } else if (grade[i] > 90 && grade[i] <= 100) {
      rez += "and earned 9. \n";
    } else if (grade[i] <= 50) {
      rez += " and failed to complete the exam.\n";
    }
  }
  return rez;
}

var test = gradeStudents(
  ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
  [50, 39, 63, 72, 99, 51, 83, 59]
);

console.log(test);
function gradeStudents(name, grade) {
  var i;
  var rez = "";

  for (i = 0; i < name.length; i++) {
    rez += name[i] + " acquired " + grade[i] + " points ";

    if (grade[i] > 50 && grade[i] <= 60) {
      rez += "and earned 6. \n";
    } else if (grade[i] > 60 && grade[i] <= 70) {
      rez += "and earned 7. \n";
    } else if (grade[i] > 70 && grade[i] <= 80) {
      rez += "and earned 8. \n";
    } else if (grade[i] > 80 && grade[i] <= 90) {
      rez += "and earned 9. \n";
    } else if (grade[i] > 90 && grade[i] <= 100) {
      rez += "and earned 9. \n";
    } else if (grade[i] <= 50) {
      rez += " and failed to complete the exam.\n";
    }
  }
  return rez;
}

var test = gradeStudents(
  ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
  [50, 39, 63, 72, 99, 51, 83, 59]
);

console.log(test);

// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000
function calculate() {
  var i;
  var j;
  var sum = 0;

  for (i = 0; i <= 1000; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  for (j = 0; j <= 500; j++) {
    if (j % 2 != 0) {
      sum -= j;
    }
  }
  sum *= 12.5;
  return sum;
}

test = calculate();
console.log(test);

// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

function takeFirstTwoLetters(a) {
  var i;
  var rez = "";
  for (i = 0; i < a.length; i++) {
    if (typeof a[i] == "string" && a[i].length > 1) {
      rez += a[i][0] + a[i][1];
    }
  }
  return rez;
}

var test = takeFirstTwoLetters([
  "M",
  "Anne",
  12,
  "Steve",
  "Joe",
  "John",
  "David",
  "Mark",
  true,
  "A"
]);

console.log(test);

// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversed(a) {
  var i;
  var rez = "";
  for (i = a.length - 1; i >= 0; --i) {
    rez += a[i];
  }
  return rez;
}

var test = reversed("Belgrade Institute of Technology");

console.log(test);

// Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1,2),(2,1) is allowed, but not (1,1), (2,2)...).

function combinationsOfTwoNumbers() {
  var i;
  var j = 1;
  var arr = [];

  for (i = 1; i < 8; i++) {
    for (j = 1; j < 8; j++) {
      if (i != j) {
        arr[arr.length] = "(" + i + "," + j + ")";
      }
    }
  }
  return arr;
}

var test = combinationsOfTwoNumbers();
console.log(test);

// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

// Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

function greatestCommonDivisor(first, second) {
  var i;
  var result;

  for (i = 0; i <= first && i <= second; i++) {
    if (first % i === 0 && second % i === 0) {
      result = i;
    }
  }
  return result;
}

var test = greatestCommonDivisor(192, 42);
console.log(test);

