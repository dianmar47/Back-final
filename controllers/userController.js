const User = require("../models/user");
const bcryptjs = require("bcryptjs");

exports.createUser = async (req, res) => {
  //console.log(req.body);
  const { email, password } = req.body;

  try {
    // check for existing email
    let user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({ msg: "El usuario ya existe" });
    }
    // create user
    user = new User(req.body);

    // hash password
    user.password = await bcryptjs.hash(password, 10);

    // save on database
    const userStored = await user.save();
    res.json(userStored);
  } catch (error) {
    console.log(error);
  }
};
