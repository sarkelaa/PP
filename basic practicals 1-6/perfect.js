function perfect(n) {
  var sum = 0;
  var i;

  for (i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      sum = sum + i;
    }
  }
  if (sum == n) {
    return true;
  } else {
    return false;
  }
  //   return sum == n;
}

var n;

for (n = 1; n < 1000; n++) {
  ind = perfect(n);
  if (ind == true) {
    console.log(n);
  }
}
