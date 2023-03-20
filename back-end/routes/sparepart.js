const sparepartRoute = require("express").Router();
const { SparepartController } = require("../controllers");

sparepartRoute.get("/", SparepartController.getSparepart);
sparepartRoute.post("/add", SparepartController.add);
sparepartRoute.put("/edit/:id", SparepartController.update);
sparepartRoute.delete("/delete/:id", SparepartController.delete);

module.exports = sparepartRoute;