const mongoose=require('mongoose')
const url="mongodb+srv://disha_server:disha_server@cluster0.ouaulou.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("Database connected ")
})
module.exports=mongoose