const categoriasModel = require("../models/categoriasModel");
module.exports = {
  getAll: async function (req, res, next) {
    try {
      const categorias = await categoriasModel.find();
      res.json(categorias);
    } catch (error) {
      next(error);
    }
  },
  create: async function (req, res, next) {
    try {
      console.log(req.body);
      console.log(req.body.name);

      const document = new categoriasModel({
        name: req.body.name,
      });

      const response = await document.save();

      res.json(response);
    } catch (error) {
      next(error);
    }
  },
};
