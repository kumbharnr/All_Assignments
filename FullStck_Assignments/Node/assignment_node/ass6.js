var fs=fs.readFile('data.txt', function (err, data) {
    if (err) throw err;
    if(data.indexOf('these') >= 0){
     console.log(data) //Do Things
    }
  });