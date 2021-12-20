var os = require("os");

console.log("Architecture :"+os.arch());
console.log("Number of CPUS "+JSON.stringify(os.cpus()));
console.log("free memory :"+os.freemem() + "bytes");
console.log("home dir :"+os.homedir());
console.log("network interface :"+JSON.stringify(os.networkInterfaces()));
console.log("release of the os :"+os.platform());
console.log("temp dire :"+os.tmpdir());
console.log("total memory  :"+os.totalmem()+ "bytes");
console.log("Total uptme of CPU in seconds  :"+os.uptime());
console.log("This method returns the operating system name  :"+ os.type());
