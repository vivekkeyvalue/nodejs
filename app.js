require('./config/appConfig');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const { notFound, convertError } = require('./middleware/errorMiddleware')

const Employee = require('./models/employees');
const Department = require('./models/departments');
const EmpDept = require('./models/employeeDepartment');
const Roles=require('./models/roles');
const EmpRole=require('./models/employeRole');

const empRoutes = require('./routes/employees');
const depRoutes = require('./routes/departments');
const loginRoute = require('./routes/login');
const rolesRoutes=require('./routes/roles');


/**
* Express instance
* @public
*/
const app = express();

// parse body params and attaches them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/employees', empRoutes);
app.use('/departments', depRoutes);
app.use('/login', loginRoute);
app.use('/roles',rolesRoutes);

// Error Middlewares
app.use(notFound);
app.use(convertError);

// Employee.hasMany(EmpDept);
EmpDept.belongsTo(Employee, {
    foreignKey: {
        name: 'empId'
    },
    onDelete: 'CASCADE'
});

// Department.hasMany(EmpDept);
EmpDept.belongsTo(Department, {
    foreignKey: {
        name: 'deptId'
    },
    onDelete: 'CASCADE'
});
// Employee hasMany(EmpRoles)
EmpRole.belongsTo(Employee, {
    foreignKey: {
        name: 'empId'
    },
    onDelete: 'CASCADE'
});


// Roles.hasMany(EmpRole);
EmpRole.belongsTo(Roles, {
    foreignKey: {
      name: 'roleId',
    },
    onDelete: 'CASCADE',
  })
  
  // Employee.hasMany(EmpRole);
//   EmpRole.belongsTo(Role, {
//     foreignKey: {
//       name: 'roleId',
//     },
//     onDelete: 'CASCADE',
//   })



sequelize
    .sync()
    .then(result => {
        console.log('Listening for requests at http://localhost:7001');
        app.listen(7001);
    })
    .catch(err => {
        console.log(err);
    });
