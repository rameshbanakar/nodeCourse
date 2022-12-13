const events=require("events")
eventEmitter=new events.EventEmitter
eventEmitter.on("ring bell",()=>{
    console.log("bell ringing....")
})
eventEmitter.emit("ring bell")