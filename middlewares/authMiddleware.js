const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // lets read the token inside the header
  const token = req.header("x-auth-token");
  // console.log(token);

  // check if there is no input token
  if (!token) {
    return res.status(400).json({ msg: "No hay un token" });
  }

  // validate token
  try {
    const cypher = jwt.verify(token, process.env.SECRET);
    req.user = cypher.user;
    //console.log(cypher.user);
    next();
  } catch (error) {
    res.status(400).json({ msg: "Token no valido" });
  }
};
