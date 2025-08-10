const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/task1")

const userSchema = mongoose.Schema({
    
    username: String,
    name: String,
    email:String,  
    age: Number,
    password: String
})

module.exports = mongoose.model('user', userSchema)