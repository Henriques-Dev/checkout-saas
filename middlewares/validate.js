const createHttpError = require("http-errors");

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const message = error.details[0].message.replace(/"/g, "");
    next(createHttpError.BadRequest(message));
  }
  next();
};

module.exports = validate;
