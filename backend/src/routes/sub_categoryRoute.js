const {Router} = require('express');
const router = Router();
const products = require('../services/sub_category.js');
const category = require('../services/category.js');


// Get all sub_categories
router.get('/', async function (req, res, next) {
    try {
        res.json(await products.getAllSubCategories());
    } catch (err) {
        console.error(`Error while getting sub_categories `, err.message);
        next(err);
    }
});


// Get sub_categories of a category
router.get('/:category_name', async function (req, res, next) {
    try {
        res.json(await products.getSubCategories(req.params.category_name));
    } catch (err) {
        console.error(`Error while getting sub_categories `, err.message);
        next(err);
    }
});


// Get sub_category by id
router.get('/sub_id/:sub_id', async function (req, res, next) {
    try {
        res.json(await products.getSubCategory(req.params.sub_id));
    } catch (err) {
        console.error(`Error while getting sub_category `, err.message);
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


// Update sub_category
router.put('/update', async function (req, res, next) {
    try {
        res.json(await products.updateSubCategory(req.body));
    } catch (err) {
        console.error(`Error while updating sub_category`, err.message);
        next(err);
    }
});


// Delete sub_category
router.delete('/delete/:sub_id', async function (req, res, next) {
    try {
        res.json(await products.deleteSubCategory(req.params.sub_id));
    } catch (err) {
        console.error(`Error while deleting sub_category`, err.message);
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


// Get category by sub category id
router.get('/category/:sub_id', async function (req, res, next) {
    try {
        res.json(await category.getCategoryBySubCategory(req.params.sub_id));
    } catch (err) {
        console.error(`Error while getting category`, err.message);
        next(err);
    }
});


module.exports = router;