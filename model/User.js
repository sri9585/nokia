const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    teamname: {
        required: true,
        type: String,
        trim: true,
    },
    nokiaid: {
        required: true,
        type: String,
    },
    firstname: {
        required: true,
        type: String,
        trim: true,
    },
    lastname: {
        required: true,
        type: String,
    },
    mentor: {
        required: true,
        type: String,
    },
    captain:{
        type: String,
        required: true,
    },
    vcaptainone: {
        type: String,
        required: true,
    },
    vcaptaintwo: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
