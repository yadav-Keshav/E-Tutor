const userModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { KEY } = require('../config/config');
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !password || !email) {
        return res.json({ sucess: false, error: "Please submit all required field" });
    }

    const user = await userModel.findOne({ email: email });
    if (user) {
        return res.send({ sucess: false, error: "This Email Is Already Used !" });
    }
    hashedPassword = await bcrypt.hash(password, 10);
    userModel.create({ name, email, password: hashedPassword })
        .then(() => {
            return res.json({ sucess: true, message: "Saved successfully " });
        })
        .catch((err) => {
            return res.json({ sucess: false, error: err.message });
        })
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.json({ sucess: false, error: "Please submit all required field" });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.json({ sucess: false, error: "Please Enter valid email and password !" });
    }
    const isVerified = await bcrypt.compare(password, user.password);
    if (isVerified) {
        const token = jwt.sign({ user_id: user._id, email }, KEY);
        res.cookie("token", token);
        return res.json({ sucess: true, message: "Login Sucessfully !", token: token, name: user.name });
    } else {
        return res.json({ sucess: false, message: "Please Enter valid email and password !" });
    }

}

exports.refresh = async (req, res) => {
    const { token } = req.body;
    const { email } = jwt.verify(token, KEY);
    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.json({ susess: false, error: "Please Enter valid email and password !" });
    }
    else {
        const token = jwt.sign({ user_id: user._id, email }, KEY);
        res.cookie("token", token);
        return res.json({ susess: true, message: "Login Sucessfully !", token: token, name: user.name });
    }
}