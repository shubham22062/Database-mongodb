//this way we create out data base in  monodb.. these command aare complsory beacause it decide our schema...
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shubhamawasthi021:25062002june@cluster0.wt11st0.mongodb.net/usernappnew")

const User = mongoose.model('Users', { name: String, email: String, password: String });


app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;


    const existingUser = await User.findOne({ email: username });
    //CRUD=> create ,update, delete,read
    if (existingUser) {
        return res.status(400).send("Username already exists");
    }
    const user = new user({
        name: "Shubham Awasthi",
        email: "Shubhamawasthi@gmail.com",
        password: '123456'
    });



    user.save();
    res.json({
        msg: "user created sucessfully"
    })

})
