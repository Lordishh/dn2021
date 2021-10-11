const mongoose = require("../bin/mongodb");
const errorMessage = require("../util/errorMessage");

const productoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_requerido],
    maxlength: [30, errorMessage.GENERAL.maxlength],
  },
  description: {
    type: String,
    required: [true, errorMessage.GENERAL.campo_requerido],
  },
  price: Number,
  categoria: {
    type: mongoose.Schema.ObjectId,
    ref: "categorias",
  },
});

productoSchema.plugin(mongoose.mongoosePaginate);
module.exports = mongoose.model("producto", productoSchema);
