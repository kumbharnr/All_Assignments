// largest and smallest number
function largest(num1, num2) {
    var imax = 0;
    if (num1 > num2)
        imax = num1;
    else
        imax = num2;
    return imax;
}
function smallest(num0, num1) {
    var imax = 0;
    if (num0 > num1)
        imax = num1;
    else
        imax = num0;
    return imax;
}
var iresult = smallest(255, 1000);
console.log("smallest number is " + iresult);
var iresult = largest(255, 1000);
console.log("largest number is " + iresult);
