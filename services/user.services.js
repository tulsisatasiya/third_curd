const { userSchema } = require("../model");

const getUser = () => {
  return userSchema.find();
};

const addUser = (body) => {
//   const user = new userSchema({
//     firstname: body.firstname,
//     lastname: body.lastname,
//     email: body.email,
//     password: body.password,
//     age: body.age,
//   });

//   return user.save(body);
  return userSchema.create(body);
};

module.exports = { getUser, addUser };
