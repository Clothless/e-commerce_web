const {Router} = require('express');
const router = Router();
const adminService = require('../services/admin.js');

// Get all admins
router.get('/', async function(req, res, next) {
  try {
    res.json(await adminService.getAllAdmins(req.query.page));
  } catch (err) {
    console.error(`Error while getting admins `, err.message);
    next(err);
  }
});

// Get specific admin
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await adminService.getAdminById(req.params.id));
  } catch (err) {
    console.error(`Error while getting admin `, err.message);
    next(err);
  }
});

// Add a admin
router.post('/add', async function(req, res, next) {
  try {
    res.json(await adminService.addAdmin(req.body));
  } catch (err) {
    console.error(`Error while adding admin`, err.message);
    next(err);
  }
});

// Update a admin
router.put('/edit/:id', async function(req, res, next) {
  try {
    res.json(await adminService.updateAdmin(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating admin`, err.message);
    next(err);
  }
});

// Delete a admin
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await adminService.deleteAdmin(req.params.id));
  } catch (err) {
    console.error(`Error while deleting admin`, err.message);
    next(err);
  }
});

module.exports = router;