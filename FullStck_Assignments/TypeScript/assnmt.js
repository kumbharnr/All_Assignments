var fibbonacci = [0, 1];
function fibbb(num) {
    for (var i = 1; i <= num; i++) {
        fibbonacci.push(fibbonacci[i] + fibbonacci[i - 1]);
    }
    console.log(fibbonacci);
}
fibbb(10);
