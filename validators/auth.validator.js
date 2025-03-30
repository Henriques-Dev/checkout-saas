const Joi = require("joi");

// Validação mínima para MVP (foco em evitar spam)
const registerSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(), // Senha mais simples para facilitar testes
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
