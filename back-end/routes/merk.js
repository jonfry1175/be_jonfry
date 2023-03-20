const merkRoute = require("express").Router();
const { MerkController } = require("../controllers");

merkRoute.get("/", MerkController.getMerk);
merkRoute.post("/add", MerkController.add);
merkRoute.put("/edit/:id", MerkController.update);
merkRoute.delete("/delete/:id", MerkController.delete);


module.exports = merkRoute;