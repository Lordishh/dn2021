var express = require("express");
var router = express.Router();

const productosControllers = require("../controllers/productosControllers");

//Obtener productos
router.get("/", productosControllers.getAll);

//Paginate
router.get("/paginate", productosControllers.getAllPaginate);
//Obtener un producto por ID
router.get("/:id", productosControllers.getById);

//Crear nuevo producto
//router.post("/", productosControllers.create);
router.post(
  "/",
  (req, res, next) => {
    req.app.validateUser(req, res, next);
  },
  productosControllers.create
);

//Actualizar producto
router.put("/:id", productosControllers.update);

//Eliminar un producto
router.delete("/:id", productosControllers.delete);

module.exports = router;
