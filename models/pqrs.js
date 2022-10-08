const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPqrs: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_pqrs",
      autoIncrement: true
    },
    idClie: {
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
    fecReg: {
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
  return PqrsModel;
};