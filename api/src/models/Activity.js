const { DataTypes, Op } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        [Op.between]: [1, 5], //RANGE me permite validar los numero en esos rangos.
      },
      duration: {
        type: DataTypes.INTEGER,
        [Op.between]: [1, 90],
      },
      season: {
        type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
      },
    },
    {
      timestamps: false,
    }
  );
};
