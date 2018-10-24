
//1

function containsFive(string) {
    return "/.*[5]{1}.*/".test(string);
}

console.log(containsFive('abc56ghj123'));

//2

function replaceJS(string) {
    var index = 0;
    var array = string.split('');
    console.log(string.indexOf(index, 'JS'));
    while (string.indexOf(index, 'JS') != -1) {
        array.splice(index, 1, '*');
        array.splice(index + 1, 1, '*');
        index = string.indexOf(index, 'JS');
    }
    return array.join('');
}

console.log(replaceJS('Programming in JS is super interesting! Some more JS.'));

//3

function insertCharacter(string, position, char) {
    var array = string.split('');
    array.splice(position - 1, 0, char);
    return array.join('');
}

console.log(insertCharacter("Goo morning", 4, "d"));

//4