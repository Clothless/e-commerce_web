const {Router} = require('express');
const router = Router();
const products = require('../services/category.js');


// Swagger API model for category
/**
 * @swagger
 * components:
 *  schemas:
 *    Category:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *        category_id:
 *          type: integer
 *          description: The auto-generated id of the category
 *        name:
 *          type: string
 *          description: The name of the category
 *      example:
 *        name: Electronics
 * 
 *    
 */

// Swagger API operations for category
/**
 * @swagger
 * tags:
 *  name: Category
 *  description: The category managing API
 * /categories:
 *  get:
 *    summary: Returns the list of all the categories
 *    tags: [Category]
 *    responses:
 *      200:
 *        description: The list of the categories
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Category'
 * 
 * /categories/add:
 *  post:
 *    summary: Add a new category
 *    tags: [Category]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: The category was successfully added
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: The category was added successfully
 * 
 * /categories/count/{name}:
 *  get:
 *    summary: Returns the number of products in a category
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: The name of the category
 *    responses:
 *      200:
 *        description: The number of products in the category
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                count:
 *                  type: integer
 *                  description: The number of products in the category
 * 
 * /categories/edit/{id}:
 *  put:
 *    summary: Update an existing category
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the category
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *    responses:
 *      200:
 *        description: The category was successfully updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: The category Updated successfully
 * 
 * /categories/{id}:
 *  delete:
 *    summary: Remove the category
 *    tags: [Category]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The category ID
 *    responses:
 *      200:
 *        description: The category was deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: The category deleted successfully
 * 
 *                  
 * 
 */




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