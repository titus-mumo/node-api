const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter email"],
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: function (value) {
                    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                },
                message: "Please enter a valid email address"
            },      
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps:true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User