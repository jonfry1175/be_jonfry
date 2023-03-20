const { Merk,Sparepart } = require("../models");
// const sparepart = require("../models/sparepart");

class MerkController {
  static async getMerk(req, res) {
    //
    try {
      let merk = await Merk.findAll({
        include: [Sparepart]
      });

      res.status(200).json(merk);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getDetailsById(req, res) {
    //
    try {
      const id = Number(req.params.id);
      let merk = await Merk.findByPk(id);

      merk
        ? res.status(200).json(merk)
        : res.status(404).json({ message: "Merk not found" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async add(req, res) {
    //
    try {
      const { name } = req.body;

      let result = await Merk.create({
        name
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    //
    try {
      const id = Number(req.params.id);
      let result = await Merk.destroy({
        where: { id },
      });
      result
        ? res.status(200).json({ message: "Merk deleted" })
        : res.status(400).json({ message: "Merk not deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    //
    try {
      const id = Number(req.params.id);
      const { name } = req.body

      let result = await Merk.update({
        name
      }, {
        where: { id }
      })

      result[0] === 1 ?
        res.status(200).json({ message: "Merk updated" }) :
        res.status(400).json({ message: "merk not updated" })
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = MerkController;