const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Roles = sequelize.define('roles', {
    name: {
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Roles;