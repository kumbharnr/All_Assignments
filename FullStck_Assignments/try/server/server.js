const express = require('express');
const Sequelize = require('sequelize');
const dbconfig = require('./db.config');
const cors = require('cors');
const PORT = 8001;

const app = express();
app.use(express.json());
app.use(cors());

//creating a sequelize object with database parameters to connect to it
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host : dbconfig.HOST,
  dialect : dbconfig.dialect,
  pool : {
    max : dbconfig.pool.max,
    min : dbconfig.pool.min,
    acquire : dbconfig.pool.acquire,
    idle : dbconfig.pool.idle
  }
});

let crediantial = sequelize.define('Registration',{

    fullname:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING

},{
    timestamps:false,
    freezeTableName:true
 });
//  crediantial.sync({force:true}).then(()=>{
//         console.log("table is created ");
//     }).finally(()=>{
//         sequelize.close();
//     })

 //register the users
app.post("/register",(req,res)=>{
    var fullname = req.body.fullname;
    var email = req.body.email;
    var password = req.body.password;
    
    // var orderid = req.body.orderid

    var empObj = crediantial.build({fullname:fullname,email:email,password:password});
    empObj.save().then(data=>{
        var strMsg = 'record is inserted ';
        res.status(201).send(strMsg);
    }).catch(err=>{
        console.error("error is :"+err);
        res.status(400).send(err);
    })
})

app.post('/login', (req,res)=>{
  //find the user in the database with the email and password using Sequelize
  users.findAll({raw:true}).then( (data)=>{

    var bFlag = false;
    for(var i=0;i<data.length;i++){
      if(data[i].userEmail == req.body.email && data[i].password == req.body.password){
        bFlag = true;
        break;
      }
    }

    if(bFlag == true){
      console.log("Valid User");
      res.status(200).send("valid user");
    }
    else{
      console.log("Invalid User");
      res.status(200).send("invalid user");
    }

  })
  .catch( (error)=>{
    console.log(error);
    res.status(400).send(error);
  });

});

// app.get('/', (req,res)=>{
//   console.log("Hello to empty request");
//   res.send("Hello to the request '/' ");
// });




app.listen(PORT, ()=>{
  console.log(`Server is running at port ${PORT}`);
});