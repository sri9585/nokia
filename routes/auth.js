const User = require("../model/User.js")
const express = require('express')
const jwt = require("jsonwebtoken");
const authprocess = express();

authprocess.post('/auth/user/signin',async(req, res) =>
    {
        try {
            const { nokiaid } = req.body;
            const student = await User.findOne({ nokiaid });
            if (!student) {
                return res
                .status(400)
                .json({ msg: "student with this register no does not exist!" });
            }
            const token = jwt.sign({ id: student._id }, "passwordKey", {
                algorithm: "HS256",
            });
            res.json({ token, ...student._doc });
        } catch (error) {
            console.error(error); // Log the error for debugging
            res.status(500).json({ error: "Something went wrong" });
        }
    });



module.exports = authprocess;