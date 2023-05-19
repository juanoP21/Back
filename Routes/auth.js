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

module.exports = router;
