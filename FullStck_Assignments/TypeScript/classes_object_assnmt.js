var Restorant = /** @class */ (function () {
    function Restorant() {
    }
    Restorant.prototype.displayd = function () {
        var strtodisplay = " food_Id:" + this.food_id + " \nfood Name :" + this.food_name + " \n description :" + this.description + " \n cost :" + this.cost;
        console.log(strtodisplay);
    };
    return Restorant;
}());
var restobj = new Restorant();
restobj.food_id = 100;
restobj.food_name = "Paneer";
restobj.description = "Paneer cheese is a fresh, creamy, normally unsalted cheese. ... Instead of rennet, paneer is made by curdling hot milk using lime/lemon juice";
restobj.cost = "520 ";
restobj.displayd();
