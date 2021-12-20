var DAYS;
(function (DAYS) {
    DAYS[DAYS["SUNDAY"] = 1] = "SUNDAY";
    DAYS[DAYS["MONDAY"] = 2] = "MONDAY";
    DAYS[DAYS["TUESDAY"] = 3] = "TUESDAY";
    DAYS[DAYS["WENDNESDAY"] = 4] = "WENDNESDAY";
    DAYS[DAYS["THURSDAY"] = 5] = "THURSDAY";
    DAYS[DAYS["FRIDAY"] = 6] = "FRIDAY";
    DAYS[DAYS["SATURDAY"] = 7] = "SATURDAY";
})(DAYS || (DAYS = {}));
var today;
function assignedday(day) {
    today = day;
}
assignedday(DAYS.THURSDAY);
console.log("assigned for today a function is :" + today);
