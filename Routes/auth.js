const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-token");
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../Controllers/auth");
const { validarCampos } = require("../middlewares/validator-campos");

router.post("/login", loginUsuario);

router.post(
  "/new",
  [
    check("name", "el nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  crearUsuario
);
router.get("/renew", validarJWT, revalidarToken);

router.get("/userinfo", validarJWT, (req, res) => {
  // Obtener el nombre del usuario desde req.name (extraído en el middleware validarJWT)
  const userName = req.name;

  // Devolver la información del usuario como respuesta
  res.json({ name: userName });
});

module.exports = router;
