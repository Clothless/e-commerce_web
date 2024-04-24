const {Router} = require('express');
const router = Router();
const products = require('../services/category.js');




// Get all categories and sub category of each one
router.get('/all', async function(req, res, next) {
  try {
    res.json(await products.getCategoriesWithSubCategories());
  } catch (err) {
    console.error(`Error while getting categories `, err.message);
    next(err);
  }
});



// get all categories
router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getAllCategories());
  } catch (err) {
    console.error(`Error while getting categories `, err.message);
    next(err);
  }
});


// Get category by sub category id
router.get('/sub_category/:id', async function(req, res, next) {
  try {
    res.json(await products.getCategoryBySubCategory(req.params.id));
  } catch (err) {
    console.error(`Error while getting category `, err.message);
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


// Get a category
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await products.getCategory(req.params.id));
  } catch (err) {
    console.error(`Error while getting category `, err.message);
    next(err);
  }
});


// count products in a category
router.get('/count/:name', async function(req, res, next) {
  try {
    res.json(await products.countProductsInCategory(req.params.name));
  } catch (err) {
    console.error(`Error while getting number of categories `, err.message);
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