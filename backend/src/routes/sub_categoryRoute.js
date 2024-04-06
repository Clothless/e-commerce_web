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

module.exports = router;