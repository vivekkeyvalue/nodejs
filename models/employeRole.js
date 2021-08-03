const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const EmpRole = sequelize.define('employee_role', {
    empId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    roleId: {
        type: Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = EmpRole;