const batidosModel = require("../models/batidosModel");
const categoriasModel = require("../models/categoriasModel");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const batidos = await batidosModel.find().populate("categoria");
      res.json(batidos);
    } catch (error) {
      next(error);
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params;
      const batido = await batidosModel.findById(id);
      res.json(batido);
    } catch (error) {
      next(error);
    }
  },
  create: async function (req, res, next) {
    //Insertar en base
    console.log(req.body); //recibir lo enviado en el body del request
    try {
      const batido = new batidosModel({
        title: req.body.title,
        description: req.body.description,
        nutrientes: req.body.nutrientes,
        categoria: req.body.categoriaId,
      });
      const documento = await batido.save();
      res.json(documento);
    } catch (error) {
      console.log(error);
      // res.json({ error: true, message: error.message });
      next(error);
    }
  },
  update: async function (req, res, next) {
    //Insertar en base
    console.log(req.params.id); //recibe parametros por url
    console.log(req.body); //recibir lo enviado en el body del request

    try {
      const { id } = req.params;
      const { title, description, nutrientes } = req.body;
      const batido = await batidosModel.updateOne(
        { _id: id },
        { $set: { title, description, nutrientes } }
      );
      res.json(batido);
    } catch (error) {
      next(error);
    }
  },
  delete: async function (req, res, next) {
    //Insertar en base
    console.log(req.params.id); //recibe parametros por url
    try {
      const { id } = req.params;
      const batido = await batidosModel.deleteOne({ _id: id });
      res.json(batido);
    } catch (error) {
      next(error);
    }
  },
};
