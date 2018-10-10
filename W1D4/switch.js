// 1.Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

// var city = "Beograd";

// switch(city) {
//     case "Beograd":
//     case "Nis":
//     case "Novi Sad":
//         console.log("Srbija");
//         break;
//     case "Madrid":
//     case "Barselona":
//         console.log("Spanija");
//         break;
//     case "Pariz":
//         console.log("Francuska");
//         break;
//     case "Berlin":
//         console.log("Nemacka");
//         break;
//     case "Prag":
//         console.log("Ceska");
//         break;
//     case "Lisabon":
//         console.log("Portugal");
//         break;
//     case "London":
//     case "Liverpul":
//     case "Mancester":
//         console.log("Engleska");
//         break;
//     case "Atina":
//         console.log("Grcka");
//         break;
//     case "Rim":
//         console.log("Italija");
//         break;
//     case "Amsterdam":
//         console.log("Holandija");
//         break;
//     default:
//         console.log("Unesite neki drugi grad");
// }

// 2.Write a program that takes as input two numbers and a string denoting the operation (“+”, “-”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var a = 6;
var b = 2;
var operation = "/";

switch(operation){
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        if(b == 0){
        console.log("Division by zero isn't possible");
        } else {
            console.log(a / b);
        }
        break;
}
