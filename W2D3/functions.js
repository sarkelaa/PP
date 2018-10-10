// var s = "anavolimilovana";
// var i;
// var ind = true;

// for (i = 0; i < s.length && ind; i++) {
//     if (s[i] != s[(s.length - 1) - i] || i == s.length / 2) {
//         ind = false;
//         console.log("The string isn't palindrom!");
//     }
// }

// if (ind == true) {
//     console.log("The string is palindrom!");
// }

// var p = "anavolimilovana";
// var i;
// var q = "";

// for (i = p.length - 1; i >= 0; i--) {
//     q += p[i];
// }

// if (p == q) {
//     console.log("The string is palindrom!");
// } else {
//     console.log("The string isn't palindrom!");
// }


// function sum(a, b) {
//     var result;
//     result = a + b;
//     console.log(arguments);
//     return result;
// }

// var final_result;
// final_result = sum(11, 90);

// console.log(final_result);

// function sum_of_all_arguments() {
//     var result = 0;
//     var i;
//     for (i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }

//     return result;

// }

// var s;
// s = sum_of_all_arguments(3, 6, 7, 4, 5);
// console.log(s);

// var a = 44;
// var b = 7;
// function max(a, b) {
//     var maxnum;
//     if (a > b) {
//         maxnum = a
//     }
//     else {
//         maxnum = b
//     }
//     return maxnum;
// }
// var maxnum = max(a, b);
// console.log(maxnum)




// var a = 45;

// function oddchek(a) {
//     if (a % 2 == 1) {
//         console.log("The number is odd");
//     }
//     else {
//         console.log("The number is even");
//     }

// }
// oddchek(a);



// var num = 552245;

// function digit(a) {
//     var str = ""
//     str = str + a
//     if (str.length == 3) {
//         console.log("number is three digit")
//     }
//     else {
//         console.log("number is not three digit")
//     }
// }

// digit(num);

// function arithmeticMean() {
//     var result = 0;
//     var i;

//     for (i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }

//     return result / arguments.length;


// }

// console.log(arithmeticMean(3, 4, 3, 4));

// var a = 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111;

// function numdig(h) {
//     var str = "";
//     str = str + h;
//     console.log(str);
//     console.log(str.length);
// }
// numdig(a);

// var a = 1445;

// function dignum(a) {
//     var conter = 0;
//     for (var i = a; i > 1; i = i / 10) {
//         conter = conter + 1;
//     }
//     return conter;
// }
// console.log(dignum(a));


// var a = "saas";

// function isString(a) {
//     if (typeof a == "string") {
//         console.log("true")
//     } else {
//         console.log("false")
//     }

// }

// isString(a);


// var a = "Hello";
// function prazna(a) {
//     if (a == "hello") {
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }

// }
// prazna(a);

function concatinator(string, n) {
    var result = "";
    if (typeof string == "string" && typeof n == "number") {
        for (var i = 0; i < n; i++) {
            result += string;
        }
    } else {
        console.log("False entery! ex('string', number)");
    }
    return result;
}

console.log(concatinator("hahahahahah", 5));