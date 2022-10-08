const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idClie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_clie",
      autoIncrement: true
    },
    nombres: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombres",
      autoIncrement: false
    },
    apellidos: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "apellidos",
      autoIncrement: false
    },
    tipoDni: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipo_dni",
      autoIncrement: false
    },
    dni: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "dni",
      autoIncrement: false
    },
    sexo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sexo",
      autoIncrement: false
    },
    municipio: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "municipio",
      autoIncrement: false
    },
    direccion: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "direccion",
      autoIncrement: false
    },
    tel: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tel",
      autoIncrement: false
    },
    fecNac: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "fec_nac",
      autoIncrement: false
    },
    email: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false
    },
    password: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
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
    tableName: "clientes",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'
  };

  const ClientesModel = sequelize.define("clientesModel", attributes, options);

  ClientesModel.associate = function (models) {
    ClientesModel.hasMany(models.citasModel, {
      foreignKey: 'id_clie'
    });
  };

  return ClientesModel;
};