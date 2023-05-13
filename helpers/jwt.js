const jwt = require("jsonwebtoken");

const generateJWT = (uid, username) => {
  return new Promise((resolve, reject) => {
    const payload = { uid: uid, username: username };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      { expiresIn: "2h" },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("no se puede generar token ");
        }
        resolve(token);
      }
    );
  });
};

module.exports = { generateJWT };
