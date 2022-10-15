const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_ventanilla: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_ventanilla",
      autoIncrement: true
    },
    nom_ventanilla: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nom_ventanilla",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "ventanillas",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };

  const VentanillasModel = sequelize.define("ventanillasModel", attributes, options);

  VentanillasModel.associate = function (models) {
    VentanillasModel.hasMany(models.citasModel, {
      foreignKey: 'id_ventanilla'
    });
  };

  return VentanillasModel;
};