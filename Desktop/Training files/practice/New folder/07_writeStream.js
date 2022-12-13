const fs = require("fs");
var writeStream=fs.createWriteStream("07_data.txt")
writeStream.write("hello this is ramesh","utf-8");
writeStream.end()
writeStream.on("finish",()=>{console.log("writting file is done")})