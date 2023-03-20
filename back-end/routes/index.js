const { Router } = require("express");
const route = Router();
const mainEndpoint = "/api"

route.get(mainEndpoint, (req, res) => {
  res.status(200).json({
    message: "API for FS Applications",
  });
});

// Routes
const merkRoutes = require("./merk");
route.use(`${mainEndpoint}/merk`, merkRoutes);

const sparepartRoutes = require("./sparepart");
route.use(`${mainEndpoint}/sparepart`, sparepartRoutes);

// Endpoints

const typeRoutes = require("./type");
route.use(`${mainEndpoint}/type`, typeRoutes);

module.exports = route;