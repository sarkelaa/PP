function intertwine(a, b) {
    var i;
    var counter = 0;
    var result = [];
    for (i = 0; i < a.length; i++) {
        result[counter] = a[i];
        counter++;
    }
    for (i = 0; i < b.length; i++) {
        result[counter] = b[i];
        counter++;
    }
    return result;
}
var finalresult = console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]));
// console.log(finalresult);

// Example 3
//1.
function vowels(a) {
    var i;
    var counter = 0;
    for (i = 0; i < a.length; i++)
        if (a[i] == "a" || a[i] == "e" || a[i] == "o" || a[i] == "i" || a[i] == "u" || a[i] == "A" || a[i] == "E" || a[i] == "O" || a[i] == "I" || a[i] == "U") {

            counter++;
        }

    return counter;

}
console.log(vowels("Mirjana ZNA BOLJE OD iVANA"));
//2.

function combination(a, b) {
    var i;
    var result = [];
    var counter = 0;
    var j;
    for (i = 0, j = 0; i < a.length && j < b.length; i++ , j++) {
        result[counter] = a[i];
        counter++;
        result[counter] = b[j];
        counter++;
    }
    return result;
}
console.log(combination(["a", "b", "c"], [1, 2, 3]));

//3.
function rotate(a, k) {
    var i;
    var result = [];
    var counter = 0;
    for (i = k; i < a.length; i++) {
        result[counter] = a[i];
        counter++;
    }
    for (i = 0; i < k; i++) {
        result[counter] = a[i];
        counter++;
    }
    return result;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 2));

//4.
function returnsarray(a) {
    var emptystr = "";
    var i;
    var result = [];
    var finalresult = [];
    emptystr = emptystr + a;
    for (i = 0; i < emptystr.length; i++) {
        result[i] = emptystr[i];
        finalresult[i] = parseFloat(result[i]);
    }

    return (finalresult);
}

console.log(returnsarray(340725872089457));

//5.
function multiplication(a) {
    var i;
    var j;
    var result = "";
    for (i = 1; i <= a.length; i++) {
        for (j = 1; j <= a.length; j++) {
            result = result + (i * j) + " ";
        }
        result += "\n";
    }
    return result;
}
console.log(multiplication([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
//6.

function convertToFahrenheit(celsius) {
    var fahrenheit = 0;
    fahrenheit = celsius * 1.8 + 32;
    return ("Temperature of " + celsius + " celsius is " + fahrenheit + " Fahrenheit ");
}
console.log(convertToFahrenheit(30));