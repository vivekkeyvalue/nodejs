const Roles = require('../models/roles');

exports.getAllRoles = (req, resp, next) => {
    Roles.findAll()
        .then(roles => {
            resp.status(200).json({
                message: 'roles retrieved successfully',
                roles
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Roles not found'
            });
        })
};

exports.getRoles = (req, resp, next) => {
    const id = req.params.id;

    Roles.findByPk(id)
        .then(roles => {
            resp.status(200).json({
                message: 'Roles retrieved successfully',
                roles
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Roles not found'
            });
        });
};

exports.postRoles = (req, resp, next) => {
    const name = req.body.name;

    Roles.create({
        name: name
    })
        .then(roles => {
            resp.status(200).json({
                message: 'Roles created successfully!',
                roles
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Role creation failed',
            });
        });
};

exports.editRoles = (req, resp, next) => {
    const id = req.params.id;
    const name = req.body.name;

    Roles.findByPk(id)
        .then(roles => {
            roles.name = name;
            return roles.save();
        })
        .then(roles => {
            resp.status(200).json({
                message: 'Department updated successfully',
                roles
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'Roles updation failed',
            });
        });
};

exports.deleteRoles = (req, resp, next) => {
    const id = req.params.id;

    Roles.findByPk(id)
        .then(roles => {
            return roles.destroy();
        })
        .then(() => {
            resp.status(200).json({
                message: 'roles deleted successfully',
            });
        })
        .catch(err => {
            console.log(err);
            resp.status(404).json({
                message: 'roles deletion failed',
            });
        });
};