
function displaya(unionData:(number|string))
{
    var str:string
    if(typeof(unionData)=='number'){
        str=unionData.toString();
    }
    else
        str=unionData
    const len = str.length;

    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return "Not palingdrome"
        }
    }
    return "Paligdrome";
}

console.log(displaya(123));
console.log(displaya(121));
console.log(displaya('pal'));
console.log(displaya('son'));