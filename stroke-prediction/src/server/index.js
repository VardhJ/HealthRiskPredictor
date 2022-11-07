const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const UserModel = require('./User')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://vardh:vardh@cluster0.0b7wpvy.mongodb.net/users?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});


app.post('/insert', async (req, res) => {

    const currUserName = req.body.userName
    const currStrokeStatus = req.body.strokeStatus
    //const currStrokeStatus = req.body.strokeStatus
    const user = new UserModel({ userName: currUserName, strokeStatus: currStrokeStatus })
    console.log(user)
    try {
        //await user.save();
        UserModel.insertMany(user, function (err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Successfully added to database.")
            }
        })
    }
    catch (err) {
        console.log(err);
    }
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
});