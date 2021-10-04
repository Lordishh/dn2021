var express = require("express");
var router = express.Router();

/* GET products listing. */
router.get("/", function (req, res, next) {
  const productos = [
    {
      id: 1,
      name: "Megapinturon",
      description:
        "Este producto consta de un cuerpo de rotulador pero con una punta mas fina especialmente diseñada para los niños. Capuchón aireado auto alienante que evita dañar la punta.",
      imgURL: "http://www.trabi-carti.com.ar/wp-content/uploads/614-90x90.jpg",
    },
    {
      id: 2,
      name: "RESALTADORES PHARAOH",
      description:
        "Ideal para resaltar en papel común, fotocopias, papel fax y enfatizar textos. Tintas de colores fluorescentes de alta intensidad.",
      imgURL: "http://www.trabi-carti.com.ar/wp-content/uploads/1115-90x90.jpg",
    },
  ];
  res.json(productos);
});

//Crear nuevo producto
router.post("/", function (req, res, next) {
  //Insertar en base
  console.log(req.body); //recibir lo enviado en el body del request
  res.json(req.body);
});

//Actualizar producto
router.put("/:id", function (req, res, next) {
  //Insertar en base
  console.log(req.params.id); //recibe parametros por url
  console.log(req.body); //recibir lo enviado en el body del request
  res.json(req.body);
});

//Eliminar un producto
router.delete("/:id", function (req, res, next) {
  //Insertar en base
  console.log(req.params.id); //recibe parametros por url
  res.json(req.body);
});

module.exports = router;
