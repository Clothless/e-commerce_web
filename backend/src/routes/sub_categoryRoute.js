const {Router} = require('express');
const router = Router();
const products = require('../services/sub_category.js');


// Get sub_categories of a category
router.get('/:category_name', async function (req, res, next) {
    try {
        res.json(await products.getSubCategories(req.params.category_name));
    } catch (err) {
        console.error(`Error while getting sub_categories `, err.message);
        next(err);
    }
});


// Add new sub_category
router.post('/add', async function (req, res, next) {
    try {
        res.json(await products.addSubCategory(req.body));
    } catch (err) {
        console.error(`Error while adding sub_category`, err.message);
        next(err);
    }
});


// Count products in a sub category
router.get('/count/:sub_category', async function (req, res, next) {
    try {
        res.json(await products.countProducts(req.params.sub_category));
    } catch (err) {
        console.error(`Error while getting product count`, err.message);
        next(err);
    }
});


module.exports = router;