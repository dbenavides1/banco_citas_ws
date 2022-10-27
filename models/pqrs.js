const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id_pqrs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_pqrs",
      autoIncrement: true
    },
    id_clie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_clie",
      autoIncrement: false,
      references: {
        key: "id_clie",
        model: "clientesModel"
      }
    },
    tipo: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipo",
      autoIncrement: false
    },
    estado: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "estado",
      autoIncrement: false
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "mensaje",
      autoIncrement: false
    },
    fec_reg: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      comment: null,
      primaryKey: false,
      field: "fec_reg",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "pqrs",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };

  const PqrsModel = sequelize.define("pqrsModel", attributes, options);

  PqrsModel.associate = function (models) {
    PqrsModel.belongsTo(models.clientesModel, {
      foreignKey: 'id_clie'
    });
  };

  return PqrsModel;
};