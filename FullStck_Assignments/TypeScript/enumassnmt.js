var DAYS;
(function (DAYS) {
    DAYS[DAYS["JANUARY"] = 1] = "JANUARY";
    DAYS[DAYS["FEBRUARY"] = 2] = "FEBRUARY";
    DAYS[DAYS["MARCH"] = 3] = "MARCH";
    DAYS[DAYS["APRIL"] = 4] = "APRIL";
    DAYS[DAYS["MAY"] = 5] = "MAY";
    DAYS[DAYS["JUNE"] = 6] = "JUNE";
    DAYS[DAYS["JULY"] = 7] = "JULY";
    DAYS[DAYS["AUGUST"] = 8] = "AUGUST";
    DAYS[DAYS["SEPTEMBER"] = 9] = "SEPTEMBER";
    DAYS[DAYS["OCTOBER"] = 10] = "OCTOBER";
    DAYS[DAYS["NOVEMBER"] = 11] = "NOVEMBER";
    DAYS[DAYS["DECEMBER"] = 12] = "DECEMBER";
})(DAYS || (DAYS = {}));
var today = DAYS.OCTOBER;
console.log("assigned for today is :" + today);
