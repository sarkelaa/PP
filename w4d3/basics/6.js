
function reverse(str) {
    if (!str) {
        return str
    }
    var newstr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newstr += str[i];
    }
    return newstr;
}

console.log(reverse('Neki test string!'));