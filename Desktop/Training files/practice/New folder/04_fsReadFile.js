const fs=require("fs")
fs.readFile("04_data.txt",function(err,data){
   if(err){
      console.log(err)
   }else{
    console.log(data.toString())
   }
})