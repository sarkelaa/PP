// // Nested loops


//Iscrtati kvadrat od '*' dimenzija n x n

// var n = 5;
// var v;
// var k;

// for (v = 0; v < n; v++) {
//     if (v == 0 || v == n - 1) {
//         //odstampati n zvezdica
//         var str = "";
//         for (k = 0; k < n; k++) {
//             str += "*";
//         }
//     } else {
//         //odstampati *, n - 2 blanko karaktera, *
//         str = "*";
//         for (k = 1; k <= n - 2; k++) {
//             str += " ";
//         }
//         str += "*";
//     }
//     console.log(str);
//     console.log("\n");
// }


//Iscrtati '*' duz obe dijagonale matrice dimenzija n x n

// var n = 5;
// var i;
// var j;
// var s;

// if (n % 2 == 0) {
//     console.log("Pogresna vrednost! Unos mora biti neparan broj");
// } else {
//     for (i = 0; i < n; i++) {
//         s = "";
//         for (j = 0; j < n; j++) {
//             if (i == j || i + j == n - 1) {
//                 s = s + "*";
//             } else {
//                 s = s + " ";
//             }
//         }
//         console.log(s);
//     }
// }


//Iscrtati '*' duz srednje kolone i srednje vrste matrice dimenzija n x n

// var n = 7;
// var i;
// var j;
// var s;

// if(n % 2 == 0){
//     console.log("Pogresna vrednost! Unos mora biti neparan broj!");
// } else {
//     for (i = 0; i < n; i++) {
//         s = "";
//         for (j = 0; j < n; j++) {
//             if (i !== (n - 1) / 2 && j !== (n - 1) / 2) {
//                     s += " ";
//                 }  else {
//                 s += "*";
//             }
//         }
//         console.log(s);
//     }
// }


// Ispisati arr[i] zvezdica a.length puta u novom redu

// var array = [5, 3, 7];

// function drawer(arr) {
//     for (var j = 0; j < arr.length; j++){
//         var s = "";
//         for (var i = 0; i < arr[j]; i++) {
//             s += "*";
//         }
//         console.log(s);
//     }
// }

// drawer(array);






