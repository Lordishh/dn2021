var express = require("express");
var router = express.Router();

const batidosControllers = require("../controllers/batidosControllers");

//Obtener batidos
router.get("/", batidosControllers.getAll);

//Paginate
router.get("/paginate", batidosControllers.getAllPaginate);
//Obtener un batido por ID
router.get("/:id", batidosControllers.getById);

//Crear nuevo batido
router.post("/", batidosControllers.create);

//Actualizar batido
router.put("/:id", batidosControllers.update);

//Eliminar un producto
router.delete("/:id", batidosControllers.delete);

module.exports = router;
