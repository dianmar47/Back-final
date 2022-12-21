const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "variables.env" });

exports.authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check that user exists
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "El usuario no existe" });
    }

    // check if password is correct
    const passwordCorrect = await bcryptjs.compare(password, user.password);
    if (!passwordCorrect) {
      return res.status(400).json({ msg: "El password es incorrecto" });
    }

    // generate token
    const payload = {
      user: { id: user.id },
    };
    // res.json(payload);
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: "30d" },
      (error, token) => {
        if (error) throw error;

        // confirmation message
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.userAuthenticated = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Hubo un error" });
  }
};
