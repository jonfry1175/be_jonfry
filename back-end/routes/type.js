const typeRoute = require("express").Router();
const { TypeController } = require("../controllers");

typeRoute.get("/", TypeController.getType);
typeRoute.post("/add", TypeController.add);
typeRoute.put("/edit/:id", TypeController.update);
typeRoute.delete("/delete/:id", TypeController.delete);


module.exports = typeRoute;