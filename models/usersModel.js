const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage");
const validators = require("../util/validators");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_requerido],
  },
  email: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_requerido],
    unique: true,
  },
  password: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_requerido],
    validate: {
      validator: function (value) {
        return validators.isGoodPassword(value);
      },
      message: errorMessage.USERS.passwordIncorrecto,
    },
  },
});
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});
module.exports = mongoose.model("users", userSchema);
