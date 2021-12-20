const fs = require('fs');
const requireFile = async () => {
   const data = fs.readFileSync('data.txt', 'utf-8');
   const len = data.length;
//    var fs = require('fs'); 
    // data = process.argv[2];
    //  fileBuffer = fs.data;   
    // to_string = fileBuffer.toString();
    //  split_lines = to_string.split("\n"); console.log(split_lines.length-1);

   return 'number of charactors :' +len
//    const dataa = fs.readFileSync('data.txt');
//    const lenn = length;
   
//    return lenn;
};
requireFile().then(res => console.log(res)).catch(err => {
   console.log('some error occured');
})