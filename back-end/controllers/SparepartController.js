const { Sparepart,Merk,Type } = require("../models");

class SparepartController {
  static async getSparepart(req, res) {
    //
    try {
      let sparepart = await Sparepart.findAll({
        include: [Merk,Type]
      });

      res.status(200).json(sparepart);
    } catch (err) {
      res.status(500).json(err);
    } 
  }
  static async add(req, res) {
    //
    try {
      const { name, stock, price, TypeId, MerkId } = req.body;

      let result = await Sparepart.create({
        name,
        stock,
        price,
        TypeId,
        MerkId,
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
      let result = await Sparepart.destroy({
        where: { id },
      });
      result
        ? res.status(200).json({ message: "Sparepart deleted" })
        : res.status(400).json({ message: "Sparepart not deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    //
    try {
      const id = Number(req.params.id);
      const { name, stock, price, TypeId, MerkId } = req.body

      let result = await Sparepart.update({
        name,
        stock,
        price,
        TypeId,
        MerkId,
      }, {
        where: { id }
      })

      result[0] === 1 ?
        res.status(200).json({ message: "Sparepart updated" }) :
        res.status(400).json({ message: "Sparepart not updated" })
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = SparepartController;
  

