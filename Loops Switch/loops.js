//1.Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// for(var i = 0; i <= 15; i++){
//     if(i % 2 == 0){
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd")
//     }
// }

// 2.Write a program to sum the multiples of 3 and 5 under 1000.
// var sum = 0;
// for(i = 15; i < 1000; i+=15){
//     sum += i;
// }
// console.log(sum);


// 3.Write a program to compute the sum and product of an array of integers.

// var nums = [1, 5, 9, 6, 3, 7, 4, 8, 10, 24, 35];
// var sum = 0;
// var pro = 1;
// var i;

// for(i = 0; i < nums.length; i++){
//     sum += nums[i];
//     pro *= nums[i];
// }

// console.log("Sum of nums array is: " + sum + "\nProduct of nums array is: " + pro);

// 4.Write a program which prints the elements of the following array as a single string.

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var i;
// var string = "";

// for(i = 0; i < x.length; i++){
//    string += x[i];
// }

// console.log(string);

// 5.Write a program that prints the elements of the following array.

// var a = [
// [1, 2, 1, 24], 
// [8, 11, 9, 4], 
// [7, 0, 7, 27]
// ];
// var i;
// var j;

// consol.log every element of every array
// for(i = 0; i < a.length; i++){
//     for(j = 0; j < a[i].length; j++){
//         console.log(a[i][j]);
//     }
// }

//consol.log every array in array in new line
// for(i = 0; i < a.length; i++){
//     console.log(a[i] + "\n");
// }


// 6.Write a program that outputs the sum of squares of the first 20 numbers. 
// var sum = 0;
// var i;

// for(i = 1; i <= 20; i++){
//     sum += i * i;
// }

// console.log("Sum of squares of fisrt 20 numbers is: " + sum);

// 7.Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade. 

// var grades = [80, 77, 88, 95, 68];
// var students = ["David", "Marko", "Dany", "John", "Thomas"];
// var i;
// var avr;
// var sum = 0;
// var totalPoints;

// for(i = 0; i < grades.length; i++){
//     sum += grades[i];
// }

// avr = sum / grades.length;
// totalPoints = avr;

// for(i = 0; i < grades.length; i++){
//     if(grades[i] > totalPoints * 0.9){
//         console.log(students[i] + " A");
//     } else if(grades[i] > totalPoints * 0.8){
//         console.log(students[i] + " B");
//     } else if(grades[i] > totalPoints * 0.7){
//         console.log(students[i] + " C");
//     } else if(grades[i] > totalPoints * 0.6){
//         console.log(students[i] + " D");
//     } else {
//         console.log(students[i] + " F");
//     }
// }

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// var nums = [];
// var i;

// for(i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         nums[i-1] = "FizzBuzz";
//     } else if(i % 3 == 0){
//         nums[i-1] = "Fizz";
//     } else if(i % 5 == 0){
//         nums[i-1] = "Buzz";
//     } else {
//         nums[i-1] = i;
//     }
// }

// console.log(nums);