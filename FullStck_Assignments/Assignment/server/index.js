var express = require("express");
var Sequelize = require("sequelize");
var dbConfig = require("./db.config");
var cors = require("cors");
const nodemailer = require("nodemailer");




const app = express();
app.use(cors());
app.use(express.json());



var sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle

    }
});
let UsersTable = sequelize.define('AllProducts',{
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    title:Sequelize.STRING,
    price:Sequelize.INTEGER,
    description:Sequelize.STRING,
    image:Sequelize.STRING,
    category:Sequelize.STRING,
    rating:Sequelize.INTEGER


},{
    timestamps:false,
    freezeTableName:true
 });

 let crediantial = sequelize.define('Registration',{

    fullname:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING,
    mobile:Sequelize.INTEGER


},{
    timestamps:false,
    freezeTableName:true
 });

 let orderDetails = sequelize.define('Orders',{

    fullname:Sequelize.STRING,
    email:Sequelize.STRING,
    orders:Sequelize.STRING,
    mobile:Sequelize.INTEGER,
    orderid:Sequelize.INTEGER


},{
    timestamps:false,
    freezeTableName:true
 });

 let addressTable = sequelize.define('address',{

    firstname:Sequelize.STRING,
    lastname:Sequelize.STRING,
    company:Sequelize.STRING,
    phone:Sequelize.INTEGER,
    email:Sequelize.INTEGER,
    address:Sequelize.STRING


},{
    timestamps:false,
    freezeTableName:true
 });

//get the data of users
app.get('/orderDetails',(req,res)=>{
    orderDetails.findAll({raw:true}).then(data=>{
        console.log(data);
        res.status(200).send(data);

    }).catch(err=>{
        console.error("error is :"+err);
        res.status(400).send(err);
    })
})

app.use(express.json());


//register the users
app.post("/register",(req,res)=>{
    var fullname = req.body.fullname;
    var email = req.body.email;
    var password = req.body.password;
    var mobile = req.body.mobile;
    // var orderid = req.body.orderid

    var empObj = crediantial.build({fullname:fullname,email:email,password:password,mobile:mobile});
    empObj.save().then(data=>{
        var strMsg = 'record is inserted ';
        res.status(201).send(strMsg);
    }).catch(err=>{
        console.error("error is :"+err);
        res.status(400).send(err);
    })
})

app.use(express.json());
// 
// insert order details
app.post("/insertData",(req,res)=>{
    var fullname = req.body.fullname;
    var email = req.body.email;
    var orders = req.body.orders;
    var mobile = req.body.mobile;
    var orderid = req.body.orderid

    var empObj = orderDetails.build({fullname:fullname,email:email,orders:orders,mobile:mobile,orderid:orderid});
    empObj.save().then(data=>{
        var strMsg = 'record is inserted ';
        res.status(201).send(strMsg);
    }).catch(err=>{
        console.error("error is :"+err);
        res.status(400).send(err);
    })
})


//insert address into the database
app.post("/insertaddress",(req,res)=>{
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var company = req.body.company;
    var phone = req.body.phone;
    var email = req.body.email;
    var address = req.body.address;

    var empObj = orderDetails.build({firstname:firstname,lastname:lastname,company:company,phone:phone,email:email,address:address});
    empObj.save().then(data=>{
        var strMsg = 'record is inserted ';
        res.status(201).send(strMsg);
    }).catch(err=>{
        console.error("error is :"+err);
        res.status(400).send(err);
    })
})
//login
app.get("/login",(req,res)=>{
    crediantial.findAll({raw:true}).then((data)=>{
        var bflag = false;
        for(var i=0;i<data;i++){
            if(data[i].username == req.body.email && data[i].password==req.body.password){

            bflag = true;
            break;
        }
        }
        if(bflag==true){
            console.log("valid user");
            res.status(200).send("valid user")
        }
        else{
            console.log("invalid user");
            res.status(200).send("invalid user")
        }
    }).catch((error)=>{
        console.log(error);
        res.status(400).send("error"+error)
    })
})
    
app.get('/getall',(req,res)=>{
    UsersTable.findAll({raw:true}).then(data=>{
        console.log(data);
        res.status(200).send(data);

    }).catch(err=>{
        console.error("error is :"+err);
        res.status(400).send(err);
    })
})


    
// var transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'kumbharnr1998@gmail.com',
//         pass:'kumbharnr'
//     }
// });
    
// var mailOption = {
//     from:'kumbharnr1998@gmail.com',
//     to:'navnath.kumbhar@mtxb2b.com',
//     subject:'Registration Successful',
//     text:'welcome to shopping our registration is completed please login and buy something'
// };

// transporter.sendMail(mailOption,function(error,info){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("email sent "+info.response);
//     }
// })


//update password
app.post('/updatepass',(req,res)=>{
    var pass = req.body.password;

var passobj=crediantial.update(
        {password:pass},
        {where:{password:password}
    }
    ).save().then((data)=>{
        console.log("data is updated");
        res.status(200).send("updated")
    }).catch((err)=>{
        console.error("error is :"+err);
    });

app.get('/',(req,res)=>{
    console.log("at get of localhost:8000");
    res.send("hello.....")
})
})
app.listen(8000,()=>{
    console.log("8000");
})