const isOdd = function (num) {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is even: " + isOdd(8));