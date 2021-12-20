// prime number
// function isPrime(num) {
//   if (num % 2 === 0) {
//     console.log("is not prime number");
//   }
//   else
//     console.log("is prime number");
// }
//   isPrime(9)
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function display(n) {
    var arr = [2];
    for (var i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}
display(100);
