const { DataTypes } = require("sequelize");

const sequelize = require("../util/database");

const EmpAddress = sequelize.define("employee_address", {
  empId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  housename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pincode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = EmpAddress;