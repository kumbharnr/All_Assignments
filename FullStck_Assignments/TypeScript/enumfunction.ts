enum DAYS{
    SUNDAY=1,
    MONDAY,
    TUESDAY,
    WENDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY 

}

var today:number;

function assignedday(day:DAYS):void{
    today=day;

}

assignedday(DAYS.THURSDAY);

console.log("assigned for today a function is :"+today);


