const {Router} = require('express');
const router = Router();
const users = require('../services/users.js');

// Get all users
router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getAllUsers(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

// Get specific user
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await users.getSpecificUser(req.params.id));
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
});

// Add a user
router.post('/add', async function(req, res, next) {
  try {
    res.json(await users.addUser(req.body));
  } catch (err) {
    console.error(`Error while adding user`, err.message);
    next(err);
  }
});

// Update a user
router.put('/edit/:id', async function(req, res, next) {
  try {
    res.json(await users.updateUser(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});

// Delete a user
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await users.deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

module.exports = router;