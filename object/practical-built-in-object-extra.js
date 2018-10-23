
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

var duplicatesElement = (function (array) {

  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    newArray.push(element, element);
    // newArray.push(element)
  }

  return newArray

})([2, 4, 7, 11, -2, 1]);

console.log(duplicatesElement)



// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 



function removesDuplicatesElement(array) {

  array.sort(function (a, b) { return a - b });
  var newArray = [];

  for (var i = 0, j = 1; i < array.length; i++ , j++) {

    if (array[i] !== array[j]) {

      newArray.push(array[i])

    }

  }

  return newArray;

}

console.log(removesDuplicatesElement([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));










// 3. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function chekOddElements(array) {

  if (array.length % 2 == 1) {
    return true;
  }
  return false;

}
console.log(chekOddElements([1, 2, 9, 2, 1, 9]));



// 4. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function middleElementCompare(array) {
  var middleValue;
  var counter = 0;
  if (array.length % 2 == 1) {
    middleValue = array[(array.length - 1) / 2];

    for (var i = 0; i < array.length; i++) {
      if (array[i] < middleValue) {
        counter++;
      }
    }

    return counter;

  }
  else {
    return "Error: array has even number of elements"
  }
}

console.log(middleElementCompare([-1, 8.1, 3, 6, 2.3, 44, 2.11]));







// 5. Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function findSmallestElement(array) {
  var min = array[0];
  var minIndex;
  var index;
  for (var i = 0; i < array.length; i++) {
    // if (min >= array[i]) {
    if (min > array[i]) {
      min = array[i];
      index = i;
    }
  }

  minIndex = array.lastIndexOf(min);
  // minIndex = index;

  var object = {
    minValue: min,
    minLastIndex: minIndex
  }
  return object;
}
console.log(findSmallestElement([1, 4, -2, 11, 8, 1, -2, 3]));



// 6. Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

function compareArrayWithNumber(array, number) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (number > array[i]) {
      newArray.push(array[i])

    }
  }
  return newArray;
}
console.log(compareArrayWithNumber([2, 3, 8, -2, 11, 4], 6));






//7.  Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

function findProSubstring(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i].toLowerCase();

    if (element.indexOf('pro') == 0) {
      newArray.push(array[i]);
    }

  }
  return newArray;

}

console.log(findProSubstring(["JavaScript", "Programming", "fun", "product"]));


// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 

function compareArrayWithNumber(array, number) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (number > array[i]) {
      newArray.push(array[i])

    }
  }
  return newArray;
}

function filterElement(array, callback) {

  return callback(array, 2);


}

console.log(filterElement([2, 3, 8, -2, 11, 4], compareArrayWithNumber));


// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]
// Write a function that calculates the total price of your shopping list. 

var list = [
  { name: 'apples', price: 100 },
  { name: 'milk', price: 80 },
  { name: 'bananas', price: 150 }
];

function calculatesTotalPrice(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    sum += element.price;
  }
  return sum;
}

console.log(calculatesTotalPrice(list));



// Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
// Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 


// Write a function that checks if a given string is written in all capitals.
// Write a function that checks if a given string contains any digits.
// Write a function that checks if a given string is a valid hexadecimal color.
// Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
// Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

// Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds


// Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.


// Write a function that calculates the distance between two points in the space. 



// Write a function that generates a random integer value between 5 and 20.
// Write a function that generates a random integer value between 50 and 100. 
// Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    



//  Write a function that shuffles the elements of a given array. 
// 		Input: [3, 6, 11, 2, 9, 1]
// 		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)

