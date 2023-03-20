'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sparepart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sparepart.belongsTo(models.Merk)
      Sparepart.belongsTo(models.Type)
    }
  }
  Sparepart.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    TypeId: DataTypes.INTEGER,
    MerkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sparepart',
  });
  return Sparepart;
};