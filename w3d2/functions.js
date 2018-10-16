'use strict';

function push(array, number) {
    var newArray = [];
    var i;
    for (i = 0; i < array.length; i++) {
        newArray[i] = array[i];

    }
    newArray[i] = number;
    return newArray;
}

var array
array = push([1, 5, 6, 8], 10);
console.log(array);


function shift(array, number) {
    var newArray = [];
    var i;
    newArray[0] = number;
    for (i = 0; i <= array.length - 1; i++) {
        newArray[i + 1] = array[i];
    }
    return newArray
}

var array;
array = shift([1, 2, 3, 4, 8], 10);
console.log(array);


function shiftInPlace(array, number) {
    var i;

    for (i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i];

    }
    array[0] = number;
    return array
}
var array = [1, 2, 3, 4, 8];
array = shiftInPlace(array, 10);
console.log(array);

var n = 10;
function testFunction(a, b) {
    var c = 5;
    console.log(a, b)
}
console.log(6, 11);





var c = 10;



function f(x) {

    x++;
    y = 15;
}
f(10);
console.log(y);



