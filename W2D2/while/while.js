// Writes every digit of a given number separately

// var n = 3476984578937456;

// // console.log(n % 10);
// // console.log((n - n%10) / 10);

// while (n != 0) {

//     last_digit = n % 10;
//     console.log(last_digit);
//     n = (n - last_digit) / 10;
// }


// 8.Write a program that calculates a number of appearances of a given number in a given array.

// var a = [2, 4, 7, 8, 7, 7, 7, 1];
// var e = 7;
// var i = 0;
// var counter = 0;

// while (i < a.length) {
//     if (e == a[i]) {
//         counter++;
//     }
//     i++;
// }
// console.log(counter);


// 9.Write a program that calculates the sum of odd elements of a given array. 

// var a = [2, 4, 7, 8, 7, 7, 7, 1];
// var i = 0;
// var sum = 0;

// while (i < a.length) {
//     if (a[i] % 2 != 0) {
//         sum += a[i];
//     }
//     i++;
// } 
// console.log(sum);


// 10.Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

// var string = "";

// string += prompt("Enter some text:");

// function counter(str){
//     var n = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str[i] === "a" || str[i] === "A"){
//             n++;         
//         }
//     }
//     return n
// }

// console.log(counter(string));


// 11.Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

// function stringSticker(str, n){
//     var newStr = "";
//     for(var i = 0; i< n; i++){
//        newStr += str;
//     }
// 	return newStr;
// }

// console.log(stringSticker(prompt("Enter a string for concatenation:"), prompt("Enter number of concatenation:")));
