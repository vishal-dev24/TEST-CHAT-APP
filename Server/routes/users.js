const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/myDatabase');
mongoose.connect('mongodb+srv://spancovishal:HzLLrkUjyhrqFz3X@cluster0.bre00kg.mongodb.net/chatapp')
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log("DB Error:", err);
    });

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    image: String
}, { timestamps: true }); // Ye timestamps add karega

module.exports = mongoose.model('User', userSchema);