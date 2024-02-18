const {Router} = require('express');
const router = Router();
const products = require('../services/products.js');

// Get all products
router.get('/', async function(req, res, next) {
  try {
    res.json(await products.getAllProducts(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

// Add a product
router.post('/', async function(req, res, next) {
  try {
    res.json(await products.addProduct(req.body));
  } catch (err) {
    console.error(`Error while adding product`, err.message);
    next(err);
  }
});

// Update a product
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await products.updateProduct(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating product`, err.message);
    next(err);
  }
});

// Delete a product
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await products.deleteProduct(req.params.id));
  } catch (err) {
    console.error(`Error while deleting product`, err.message);
    next(err);
  }
});

module.exports = router;