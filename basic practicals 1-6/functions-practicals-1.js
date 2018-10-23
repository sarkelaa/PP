
// practical live


function sum(a, b) {

    var result;
    result = a + b;

    return result;
}

var test = sum(11, 84)

console.log(test);


function sumOfAllArguments() {
    var result = 0;
    var i;

    for (i = 0; i < arguments.length; i++) {
        result = result + arguments[i];
    }
    return result;
}
var test = sumOfAllArguments(3, 6, 7, 4, 5);
console.log(test);

// ***************************************************************************************
// ***************************************************************************************



// Write a program that calculates the maximum of two given numbers. 

function maxNumber(a, b) {
    var result;
    if (a > b) {
        result = a;
    } else {
        result = b;
    }
    return result;
}

var test = maxNumber(11, 10);
console.log(test);



// Write a program that checks if a given number is odd.


function isOdd(a) {
    var result;
    if (a % 2 !== 0) {
        result = a + " is odd";
    } else {
        result = a + " isn't odd";
    }
    return result;
}

var test = isOdd(12);

console.log(test);


// Write a program that checks if a given number is a three digit long number.

function isThreeDigitNumber(a) {
    var result;
    if (a > 99 && a < 1000) {
        result = a + " is a three digit number.";
    } else {
        result = a + " isn't a three digit number.";
    }
    return result;
}
var test = isThreeDigitNumber(2);
console.log(test);



// Write a program that calculates an arithmetic mean of four numbers.

function arithmeticOf(a, b, c, d) {
    var sum;
    sum = a + b + c + d
    return sum / 4
}

var test = arithmeticOf(4, 5, 4, 4);
console.log(test);

// modify

function arithmeticOf([a]) {
    var sum = 0;
    var i;
    var art = a.length;

    for (i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum / art;
}

var test = arithmeticOf([[1,2,3]]);
console.log(test);


// Write a program that calculates a number of digits of a given number. 

function numOfDigits(a) {
    var string = "";
    string = string + a;
    var counter = string.length;
    return counter;

}

var test = numOfDigits(5100);
console.log(test);




// Write a program that calculates a number of appearances of a given number in a given array.
// var a = [2, 4, 7, 8, 7, 7, 1];
// var e = 7;
// result: 3

function appearances(e) {
    var i;
    var a = [2, 4, 7, 4, 7, 7, 1];
    var counter = 0;


    for (i = 0; i < a.length; i++) {
        if (a[i] == e) {
            counter++;
        }
    }
    return counter;
}
var test = appearances(7);
console.log(test);


//  modify

function appearances(e) {
    var i;
    var counter = 0;

    for (i = 1; i < arguments.length; i++) {
        if (arguments[i] == e) {
            counter++;
        }
    }
    return counter;
}
var test = appearances(4, 2, 4, 4);
console.log(test);





// Write a program that calculates the sum of odd elements of a given array. 

function sumOfOdd() {
    var i;
    var sum = 0;

    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] % 2 !== 0) {
            sum = sum + arguments[i];
        }
    }
    return sum;
}
var test = sumOfOdd(4, 5, 6, 7, 8);
console.log(test);




// Write a program that calculates the number of appearances of a letter a in a given string. 

function countElementAIn(a) {
    var i;
    var counter = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == "a") {
            counter++;
        }
    }
    return counter;
}

var test = countElementAIn("marla");
console.log(test);


//Modify the program so it calculates the number of both letters a and A.


function replaceAToUppercase(a) {
    var i;
    var newString = "";

    for (i = 0; i < a.length; i++) {
        if (a[i] == "a") {
            newString += "A";
        }
        else {
            newString += a[i];
        }
    }
    return newString;
}

var test = replaceAToUppercase("marla");
console.log(test);




// Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 


function concatenates(a, s) {
    var i;
    var newString = "";

    for (i = 0; i < a; i++) {
        newString = newString + s;
    }
    return newString;
}
var test = concatenates(4, "marla");
console.log(test);