class Restorantupdate{
    //public private protected
        food_id:number;
        food_name:string;
        description:string;
        cost:string;
    
    constructor(foodcode:number,foodname:string,descriptions:string,cost:string){
        console.log("In the constructor.......");
            this.food_id=foodcode;
            this.food_name=foodname;
            this.description=descriptions;
            this.cost=cost;
    }
    
        displayd()
        {
            var strtodisplay=` Id:${this.food_id} \n Name :${this.food_name} \n description :${this.description} \n cost :${this.cost}`
            console.log(strtodisplay);
        }
    
    }
    console.log("before the object creation....");
    var resttobj=new Restorantupdate(31,"Paneer","Paneer cheese is a fresh, creamy, normally unsalted cheese. ... Instead of rennet, paneer is made by curdling hot milk using lime/lemon juice",'250');//new allocated memory
    console.log("after the object creation");
    
    resttobj.displayd();