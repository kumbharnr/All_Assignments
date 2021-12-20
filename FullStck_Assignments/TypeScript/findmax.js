function max(num1, num2) {
    var imax = 0;
    if (num1 > num2)
        imax = num1;
    else
        imax = num2;
    return imax;
}
var iresult = max(255, 1000);
console.log("maximum number is " + iresult);
