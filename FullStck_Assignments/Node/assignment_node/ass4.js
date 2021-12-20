const { log } = require('console');
var fs = require('fs');

var fileData = "";

var readerStream = fs.createReadStream('readfile.txt');

readerStream.on('data',function (readData){
    fileData = readData;

})

readerStream.on('end',function(){
    console.log("read data :"+fileData);

})

readerStream.on('error',function(err){
    console.log("Something is error :"+err);
})