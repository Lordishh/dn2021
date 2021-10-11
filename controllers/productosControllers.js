const productosModel = require("../models/productosModel");
const categoriasModel = require("../models/categoriasModel");

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const productos = await productosModel.find().populate("categoria");
      res.json(productos);
    } catch (error) {
      next(error);
    }
  },
  getAllPaginate: async function (req, res, next) {
    try {
      let queryFind = {};
      if (req.query.buscar) {
        queryFind = {
          name: { $regex: ".*" + req.query.buscar + ".*", $options: "i" },
        };
      }
      const productos = await productosModel.paginate(queryFind, {
        sort: { title: 1 },
        populate: "categoria",
        limit: req.query.limit || 2,
        page: req.query.page || 1,
      });
      res.json(productos);
    } catch (error) {
      next(error);
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params;
      const producto = await productosModel.findById(id);
      res.json(producto);
    } catch (error) {
      next(error);
    }
  },
  create: async function (req, res, next) {
    //Insertar en base
    console.log(req.body); //recibir lo enviado en el body del request
    try {
      const producto = new productosModel({
        title: req.body.title,
        description: req.body.description,
        nutrientes: req.body.nutrientes,
        categoria: req.body.categoriaId,
      });
      const documento = await producto.save();
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
      const producto = await productosModel.updateOne(
        { _id: id },
        { $set: { title, description, nutrientes } }
      );
      res.json(producto);
    } catch (error) {
      next(error);
    }
  },
  delete: async function (req, res, next) {
    //Insertar en base
    console.log(req.params.id); //recibe parametros por url
    try {
      const { id } = req.params;
      const producto = await productosModel.deleteOne({ _id: id });
      res.json(producto);
    } catch (error) {
      next(error);
    }
  },
};
