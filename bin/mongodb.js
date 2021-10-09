const mongoose = require("mongoose");
require("dotenv").config();
const mongoosePaginate = require("mongoose-paginate-v2");
// mongodb connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error(error));
mongoosePaginate.paginate.options = {
  limit: 1,
  lean: false,
};
mongoose.mongoosePaginate = mongoosePaginate;
module.exports = mongoose;
