// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.

function vowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;

      default:
        break;
    }
  }
  return count;
}
console.log(vowels("ana voli milovana"));

// Modify

var vowels = function(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;

      default:
        break;
    }
  }
  return count;
};
console.log(vowels("ana voli milovana"));

// Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var combinesTwoArray = function(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length && i < arr2.length; i++) {
    newArr[newArr.length] = arr1[i];
    newArr[newArr.length] = arr2[i];
  }
  return newArr;
};

console.log(combinesTwoArray(["a", "b", "c"], [1, 2, 3]));

// Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var rotatesList = function(array, num) {
  var newArr = [];
  var counter = 0;
  for (var i = num; i < array.length; i++) {
    newArr[counter] = array[i];
    counter++;
  }
  for (var j = 0; j < num; j++) {
    newArr[counter] = array[j];
    counter++;
  }
  return newArr;
};
console.log(rotatesList([1, 2, 3, 4, 5, 6], 3));

// Write a function that takes a number and returns array of its digits.

var returnsArray = function(number) {
  var numberString = number + "";
  var arrayNew = [];
  var counter = 0;
  for (var i = 0; i < numberString.length; i++) {
    arrayNew[counter] = numberString[i];
    counter++;
  }
  return arrayNew;
};
console.log(returnsArray(1254));

// Write a program that prints a multiplication table for numbers up to 12.

var multiplicationTable = function(num) {
  var table = "";

  for (var i = 1; i <= num; i++) {
    table += "\n";
    for (var j = 1; j <= num; j++) {
      table += i * j + "\t";
    }
  }
  return table;
};

console.log(multiplicationTable(10));

// Write a function to input temperature in Centigrade and convert to Fahrenheit.

var convertToF = function(celsius) {
  return (celsius * 9) / 5 + 32;
};

console.log(convertToF(20));

// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

var findMaxNum = function(arr) {
  var newArr = [];

  var i;
  for (i = 0; i < arr.length; i++) {
    if (isFinite(arr[i])) {
      newArr[newArr.length] = parseFloat(arr[i]);
    }
  }
  var max = newArr[0];
  for (var j = 0; j < newArr.length; j++) {
    if (max < newArr[j]) {
      max = newArr[j];
    }
  }

  return max;
};

console.log(findMaxNum(["1", "21", undefined, "42", "1e+3", Infinity]));

// Write a function to find the maximum and minimum elements. Function returns an array.

var findMaxMin = function(array) {
  var newArr = [];
  var max = array[0];
  var min = array[0];

  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }
  newArr[0] = min;
  newArr[1] = max;
  return newArr;
};
console.log(findMaxMin([1, 2, 4, 50, 10, 29]));

// Write a function to find the median element of array.

var findMedian = function(array) {
  
  var median;
  var i;
  var j;

  for (i = 0, j = array.length -1;  i <= j; i++, j--) {
    
    if(i == j){
      median = array[i];
    }
  }
  return median;
};

console.log(findMedian([1, 2, 4, 88, 50, 10, 29]));



// Write a function to find the element that occurs most frequently.

function findMostFrequentlyElement(array){
  var element;
  var elementCounter = 0;
  var frequentlyElementCounter = 0;
  var frequentlyElement = array[0]
  for(var i = 0; i < array.length; i++){
    element = array[i];
    for(var j = 0; j<array.length; j++){
      if (element == array[j]){
        elementCounter++;
      }
      if (elementCounter > frequentlyElementCounter){
        frequentlyElementCounter = elementCounter;
        frequentlyElement = element;
      }
    }
    elementCounter = 0;
  }
  return frequentlyElement
}

console.log(findMostFrequentlyElement([1,1,2,2,3,3,2,2,2,5,5]))

// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

function firstMiddleAndLastElement (array){
  var newArray = [];

  if(array.length == 0){
    newArray = [];
  }
  else if(array.length % 2 == 0){
    newArray[0] = array[0];
    newArray[1] = array[array.length - 1];
  }else {
    newArray[0] = array[0];
    newArray[1] = array[(array.length - 1)/2];
    newArray[2] = array[array.length - 1];
  }
  return newArray;
}

console.log(firstMiddleAndLastElement([1,2,3,4,5,6,7]));

// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function findAverageElement(array){
var sumOfArray = 0;
var element;

  for(var i = 0; i<array.length; i ++){
    element = array[i];
    sumOfArray += element
  }

  return (sumOfArray/array.length)
}

console.log(findAverageElement([2,2,4,4,8,10,12,5,20,14]))

// Write a function to find all the numbers greater than the average.

function greaterThanAverageElement(array){
  var numGreaterThanAverage = [];
  var counter = 0;
  var element;
  var averageElement = findAverageElement(array);
  

  for(var i = 0; i<array.length; i++){
    element = array[i];
    if (element > averageElement){
      numGreaterThanAverage[counter] = element;
      counter ++;
    }
  }
  return numGreaterThanAverage;
}

console.log(greaterThanAverageElement([2,2,4,4,8,10,12,5,20,14]));



// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40

var bodyMassIndex = function(weight, height) {
  var bmi = weight / (height * height);

  var result = "";

  if (bmi < 15) {
    result = "Starvation";
  } else if (bmi >= 15 && bmi < 17.5) {
    result = "Anorexic";
  } else if (bmi >= 17.5 && bmi < 18.5) {
    result = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result = "Ideal";
  } else if (bmi >= 25 && bmi < 30) {
    result = "Overweight";
  } else if (bmi >= 30 && bmi < 40) {
    result = "Obese";
  } else if (bmi >= 40) {
    result = "Morbidly obese";
  }

  return result;
};

console.log(bodyMassIndex(47, 1.6));

// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

var createRectangularFrame = function (arrayOfString){

  var rectangularFrame = " ********* \n";
  var element;

  for(var i = 0; i < arrayOfString.length; i++){
    element = arrayOfString[i];
    rectangularFrame += " * "
    
    for (var j = 0; j<6; j++){
      if (element[j] != undefined){
      rectangularFrame += element[j];
      }
      else {
        rectangularFrame += " ";
      }
    }
    rectangularFrame += "* \n"
  }
  rectangularFrame += " ********* \n"
  return rectangularFrame
};
console.log(createRectangularFrame(["Hello", "World", "in", "a", "frame"]));

// MODIFY

var createRectangularFrame = function (arrayOfString){

  var rectangularFrame = "";
  var rcf = "";
  var element;
  var maxCharacterInElement = arrayOfString[0].length;

  var line = " **"


  for (var b = 0; b<arrayOfString; b++){
    if (arrayOfString[b].length > maxCharacterInElement){
      maxCharacterInElement = arrayOfString[b].length;
    }
  }
  for (var c = 0; c<maxCharacterInElement; c++){
    line += "*"
  }
  line += "**"

  for(var i = 0; i < arrayOfString.length; i++){
    element = arrayOfString[i];
    rectangularFrame += " * "
    for (var j = 0; j<maxCharacterInElement; j++){
      
      if (element[j] != undefined){
      rectangularFrame += element[j];
      
      }
      else {
        rectangularFrame += " ";
      }
    }
    rectangularFrame += " * \n"
  }
  rectangularFrame += line;
  rcf = line + "\n" + rectangularFrame;
  return rcf
};
console.log(createRectangularFrame(["Helloooooooo", "World", "in", "a", "frame"]));