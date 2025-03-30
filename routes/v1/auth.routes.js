const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth.controllers");
const {
  registerSchema,
  loginSchema,
} = require("../../validators/auth.validator");
const validate = require("../../middlewares/validate");

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.post("/logout", authController.logout);

// Rota opcional para pegar sessão atual (útil para o Bubble)
router.get("/session", async (req, res) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  res.json(user);
});
// const {
//   registerSchema,
//   loginSchema,
// } = require("../../validations/auth.validation");

// router.post("/register", validate(registerSchema), authController.register);
// router.post("/login", validate(loginSchema), authController.login);
// router.post("/logout", authController.logout);

module.exports = router;
