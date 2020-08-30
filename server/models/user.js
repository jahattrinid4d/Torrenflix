const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const { Schema } = mongoose;
const userSchema = new Schema({
  user : {type : String, required : true},
  email: { type: String, require: true },
  password: { type: String, require: true },
});
userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.comparePassword = function (password) {
   return  bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("users", userSchema);