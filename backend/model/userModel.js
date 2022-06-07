const mongoose = require("mongoose");
const { isEmail } = require('validator');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name can not be empty"]
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        require: [true, 'Email cannot be Empty'],
        validate: [isEmail, "Invalid Email"],
    },
    password: {
        type: String,
        minlength: [8, 'Password must be Greater than 8 letters'],
        required: [true, 'Password cannot be empty'],
    },
    verified: {
        type: Boolean,
        required: true,
        default: true
    },
    ResetToken: { type: String },
    ExpirationToken: { type: Date },
    role: {
        type: String,
        enum: ['teacher', 'student'],
        default: 'student'
    },
    courses: [{
        type: [mongoose.Schema.Types.ObjectId]
    }]
});


module.exports = mongoose.model("UserModel", userSchema);