const express = require('express');
const { signup, login,refresh } = require('../controller/authController');

const authRouter = express.Router();

authRouter.route("/signup").post(signup);
authRouter.route("/login").post(login);
authRouter.route("/refresh").post(refresh);

module.exports = authRouter;