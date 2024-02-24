const {Router} = require('express');
const router = Router();
const products = require('../services/category.js');

// get all categories
router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getAllCategories());
  } catch (err) {
    console.error(`Error while getting categories `, err.message);
    next(err);
  }
});

// add a category
router.post('/add', async function(req, res, next) {
  try {
    res.json(await products.addCategory(req.body));
  } catch (err) {
    console.error(`Error while adding category`, err.message);
    next(err);
  }
});

// update a category
router.put('/edit/:id', async function(req, res, next) {
  try {
    res.json(await products.updateCategory(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating category`, err.message);
    next(err);
  }
});

// delete a category
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await products.deleteCategory(req.params.id));
  } catch (err) {
    console.error(`Error while deleting category`, err.message);
    next(err);
  }
});


module.exports = router;