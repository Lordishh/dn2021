const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage");

const batidosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_requerido],
    maxlength: [30, errorMessage.GENERAL.maxlength],
  },
  description: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_requerido],
  },
  nutrientes: String,
  categoria: {
    type: mongoose.Schema.ObjectId,
    ref: "categorias",
  },
});

module.exports = mongoose.model("batidos", batidosSchema);
