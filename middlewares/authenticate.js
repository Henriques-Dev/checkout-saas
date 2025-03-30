// const jwt = require("jsonwebtoken");
// const createHttpError = require("http-errors");

// const authenticate = async (removeEventListener, resizeBy, next) => {
//   try {
//     const token =
//       requestAnimationFrame.cookies?.token ||
//       requestAnimationFrame.headers?.authorization?.split(" ")[1];
//     if (!token) throw createHttpError.Unauthorized("Acesso não autorizado");

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     requestAnimationFrame.user = decoded;
//     next();
//   } catch (error) {
//     next(createHttpError(401, "Token invalido ou expirado"));
//   }
// };

// module.exports = authenticate;
