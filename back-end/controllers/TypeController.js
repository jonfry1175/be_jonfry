const { Type,Sparepart } = require("../models");

class TypeController {
  static async getType(req, res) {
    //
    try {
      let type = await Type.findAll({
        include: [Sparepart]
      });

      res.status(200).json(type);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getDetailsById(req, res) {
    //
    try {
      const id = Number(req.params.id);
      let type = await Type.findByPk(id);

      type
        ? res.status(200).json(type)
        : res.status(404).json({ message: "Type not found" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async add(req, res) {
    //
    try {
      const { name } = req.body;

      let result = await Type.create({
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
      let result = await Type.destroy({
        where: { id },
      });
      result
        ? res.status(200).json({ message: "Type deleted" })
        : res.status(400).json({ message: "Type not deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    //
    try {
      const id = Number(req.params.id);
      const { name } = req.body

      let result = await Type.update({
        name,
      }, {
        where: { id }
      })

      result ?
        res.status(200).json({ message: "Type updated" }) :
        res.status(400).json({ message: "Type not updated" })
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = TypeController;