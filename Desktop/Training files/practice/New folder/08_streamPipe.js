const fs=require("fs")
var readStream=fs.createReadStream("07_data.txt","utf-8")
var writeStream=fs.createWriteStream("08_data.txt")
readStream.pipe(writeStream)