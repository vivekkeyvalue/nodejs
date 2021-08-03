const express = require('express');
const validate = require('express-validation');
const rolesController = require('../controller/roles');
const {
  postRolesBodySchema,
  editRolesBodySchema
} = require('../validation/joiRequestValidation');

const router = express.Router();

// GET => /roles
router.get('/', rolesController.getAllRoles);

// GET => /roles/id
router.get('/:id', rolesController.getRoles);

// POST => /roles
router.post('/', validate(postRolesBodySchema), rolesController.postRoles);

// PUT => /roles/id
router.put('/:id', validate(editRolesBodySchema), rolesController.editRoles);

// DELETE => /roles/id
router.delete('/:id', rolesController.deleteRoles);

module.exports = router;