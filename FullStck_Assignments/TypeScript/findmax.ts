function max(num1:number,num2:number):number
{
    var imax:number=0;

    if(num1>num2)
        imax=num1;
    else
        imax=num2
return imax;
}

var iresult:number=max(255,1000);
console.log(`maximum number is ${iresult}`)