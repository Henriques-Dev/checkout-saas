const createHttpError = require("http-errors");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  let statusCode = 500;
  let message = "Erro interno do servidor";

  if (err instanceof createHttpError.HttpError) {
    statusCode = err.status;
    message = err.message;
  }

  if (process.env.NODE_ENV === "development") {
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
