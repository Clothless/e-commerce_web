const {Router} = require('express');
const router = Router();
const users = require('../services/users.js');
const passport = require('passport');
const auth = require('../controllers/auth.js');
  
require('../configs/passport.js');



// Get all users
router.get('/', async function(req, res, next) {
  try {
    res.json(await users.getAllUsers(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
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

//Login success
router.get('/login-success', async function(req, res, next) {
  res.json({message: 'Login successful'})
});

//Login failure
router.get('/login-failure', (req, res) => {
  res.json({message: 'Login failed, but why?? No one knows!!!!'})
});

//Login a user
router.post('/login', auth.isLogged, passport.authenticate('local', {failureRedirect: 'login-failure', successRedirect: 'login-success'}));

//logout route
router.get('/logout', auth.isNotLogged, (req, res) => {
  req.session.destroy();
  req.cookies = null;
  res.json({message: 'Logged out'})
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

// Number of users
router.get('/count', async function(req, res, next) {
  try {
    res.json(await users.countUsers());
  } catch (err) {
    console.error(`Error while getting number of users`, err.message);
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

// Delete a user
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await users.deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});


// Get user's products
router.get('/:id/products', async function(req, res, next) {
  try {
    res.json(await users.getProductsByUser(req.params.id));
  } catch (err) {
    console.error(`Error while getting user's products`, err.message);
    next(err);
  }
});




module.exports = router;