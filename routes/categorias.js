const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController");

router.get("/", categoriasController.getAll);
router.post("/", categoriasController.create);
module.exports = router;
