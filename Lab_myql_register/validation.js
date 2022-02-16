const Joi = require("joi");

// Register Validation  註冊相關格式
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(10).max(50).required().email({ minDomainSegments: 2, tlds: { allow: ["com","tw"] } }),
    password: Joi.string().min(8).max(12).required(),
    //telephone:Joi.string().length(10).pattern(/^[0-9]+$/).required()
  });

  return schema.validate(data); // 直接 return schema.validate(data)的結果
};

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(50).required().email({minDomainSegments : 2 ,tlds: {allow: ["com","net","tw"]}}),
        password:Joi.string().min(8).max(12).required(),
    });

    return schema.validate(data);
}

module.exports = {
    // 註冊相關格式
    registerValidation,
    loginValidation
};