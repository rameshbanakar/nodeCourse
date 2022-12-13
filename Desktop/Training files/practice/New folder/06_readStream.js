const fs=require("fs")
const readSream=fs.createReadStream("04_data.txt","utf-8")
readSream.on("data",chunk=>{
    console.log(chunk)
})