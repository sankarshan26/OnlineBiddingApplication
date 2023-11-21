const express = require("express")
const mongoose = require("mongoose")
const core = require("cors")
const UserModel = require("./models/Users")

const app = express()
app.use(core())
app.use(express.json())

mongoose.connect("mongodb+srv://sankarshan:sankarshan@cluster0.5tiy4jr.mongodb.net/?retryWrites=true&w=majority")

app.get("/getallusers",(req,res) => {
    UserModel.find({}).then(users=>res.json(users))
    .catch(err => console.log(err))
})


app.post("/createuser",(req,res)=>{
    console.log(req.body);
    UserModel.create(req.body.signupState).then(users=>res.json(users))
    .catch(err => res.json(err))
})

app.post("/userloginauthentication",(req,res)=>{

})
app.listen(8000,()=>{
    console.log("Server is running ");
})