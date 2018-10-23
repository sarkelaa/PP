
// Write a function that prints all numbers between two provided numbers. 

function printsNumber(num1, num2){

    for(var i = num1+1; i<num2; i++){

         console.log(i);
    }
}

console.log(printsNumber(5,10));


// Write a function that checks if the number is positive or negative.

function isPositiveOrNegativeNum(num){

var message;
    if (num >= 0){
        message = "Number " + num + " is positive!";
    }else {
        message = "Number " + num + " is negative!";
    }
    return message;
}

console.log(isPositiveOrNegativeNum(-9));
console.log(isPositiveOrNegativeNum(9));




// Write a function that outputs array of every second character from the provided string. In case that string is not provided outputs array empty array. 

function outputsArrayOfEverySecondCharacter(string){

var newString = '';
newStringCounter = 0;

if (string !== undefined ){
    for (var i = 0; i < string.length; i+=2) {
        var element = string[i];
        newString += element
        newStringCounter++;
    }
}else {
    newString = [];
}
return newString;
}

console.log(outputsArrayOfEverySecondCharacter("EverySecondCharacter"));
console.log(outputsArrayOfEverySecondCharacter());


// Write a function that checks if the first and the last element in the array or string are the same.



// Write a function that checks if the two arrays are equal. Assume that arrays are equal if they have all the same elements. Also assume that two compared arrays have the same number of elements.

// Write a function that reverses a word or sentence. Cover cases if sentence is not provided.

// Write a function that prints out number of input arguments of the function.

// Write a function that sets some global variable to the new value.

// Write a function that replaces all white spaces from string with dash (-). 

// Write object representing a book, an animal and a person. Create constructor functions for same entities. 
