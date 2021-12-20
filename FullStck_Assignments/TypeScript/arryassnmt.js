var arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
var min1 = 999999999;
for (var i1 in arr) {
    if (min1 > arr[i1])
        min1 = arr[i1];
}
console.log("Minimum number in array " + min1);
var numericArray = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var sortedArray = numericArray.sort(function (n1, n2) { return n1 - n2; });
console.log(sortedArray);
