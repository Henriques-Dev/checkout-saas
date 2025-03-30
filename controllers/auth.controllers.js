const supabase = require("../config/supabase");
const createHttpError = require("http-errors");

const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    // Usa a autenticação nativa do Supabase (sem criar tabela customizada)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }, // Dados extras do usuário
      },
    });

    if (error) throw createHttpError.BadRequest(error.message);

    res.status(201).json({
      id: data.user.id,
      email: data.user.email,
      name: data.user.user_metadata.name,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw createHttpError.Unauthorized("Credenciais inválidas");

    res.json({
      id: data.user.id,
      email: data.user.email,
      name: data.user.user_metadata.name,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  await supabase.auth.signOut();
  res.status(204).end();
};

module.exports = {
  register,
  login,
  logout,
};
