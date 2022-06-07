const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { KEY } = require('../config/config');
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !password || !email) {
        return res.json({ error: "Please submit all required field" });
    }

    const user = await userModel.findOne({ email: email });
    if (user) {
        return res.send({ error: "This Email Is Already Used !" });
    }
    hashedPassword = await bcrypt.hash(password, 10);
    userModel.create({ name, email, password: hashedPassword })
        .then(() => {
            return res.json({ message: "Saved successfully " });
        })
        .catch((err) => {
            return res.json({ error: err.message });
        })
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.json({ error: "Please submit all required field" });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.json({ error: "Please Enter valid email and password !" });
    }
    const isVerified = await bcrypt.compare(password, user.password);
    if (isVerified) {
        const token = jwt.sign({ user_id: user._id, email }, KEY);
        res.cookie("token", token);

        return res.json({ error: "Login Sucessfully !" });
    } else {
        return res.json({ error: "Please Enter valid email and password !" });
    }

}