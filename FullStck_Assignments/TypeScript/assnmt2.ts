// largest and smallest number

function largest(num1:number,num2:number):number
{
    var imax:number=0;

    if(num1>num2)
        imax=num1;
    else
        imax=num2
return imax;
}
function smallest(num0:number,num1:number):number
{
    var imax:number=0;

    if(num0>num1)
        imax=num1;
    else
        imax=num0
return imax;
}

var iresult:number=smallest(255,1000);
console.log(`smallest number is ${iresult}`)

var iresult:number=largest(255,1000);
console.log(`largest number is ${iresult}`)