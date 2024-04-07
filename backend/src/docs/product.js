/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - posted_by
 *         - category
 *         - price
 *       properties:
 *         product_id:
 *           type: integer
 *           description: The auto-generated ID of the product
 *         name:
 *           type: string
 *           description: The name of the product
 *         posted_by:
 *           type: integer
 *           description: The ID of the user who posted the product
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the product was created
 *         category:
 *           type: integer
 *           description: The ID of the category the product belongs to
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: The URLs of the product images
 *         pending:
 *           type: boolean
 *           description: Indicates if the product is pending approval
 *         old_price:
 *           type: number
 *           format: double
 *           description: The old price of the product
 *         description:
 *           type: string
 *           description: The description of the product
 *         price:
 *           type: number
 *           format: double
 *           description: The current price of the product
 *       example:
 *         name: Product Name
 *         posted_by: 1
 *         category: 2
 *         images:
 *           - https://example.com/image1.jpg
 *           - https://example.com/image2.jpg
 *         pending: true
 *         old_price: 19.99
 *         description: This is a sample product description.
 *         price: 14.99
 */


// Swagger API operations for product
/**
 * @swagger
 * tags:
 *   name: Product
 *   description: The products managing API
 * 
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Product]
 *     description: Retrieve a list of all products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * 
 * 
 * 
 * /products/{product_id}:
 *   get:
 *     summary: Get specific product
 *     tags: [Product]
 *     description: Retrieve a specific product by its ID
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         description: The ID of the product to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: The specific product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * 
 * 
 * 
 * /products/category/{name}:
 *   get:
 *     summary: Get products by category
 *     tags: [Product]
 *     description: Retrieve a list of products by category ID
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: The ID of the category to filter products by
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *
 * 
 * /products/sub_category/{sub_category_name}:
 *   get:
 *     summary: Get all products in a specific sub category
 *     tags: [Product]
 *     description: Retrieve a list of all products in a specific sub category
 *     parameters:
 *       - in: path
 *         name: sub_category_name
 *         required: true
 *         description: The name of the sub category
 *         schema:
 *         type: string
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * 
 * 
 * /products/wilaya/{wilaya_name}:
 *   get:
 *     summary: Get all products in a specific wilaya
 *     tags: [Product]
 *     description: Retrieve a list of all products in a specific wilaya
 *     parameters:
 *       - in: path
 *         name: wilaya_name
 *         required: true
 *         description: The name of the wilaya
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * 
 * 
 * 
 * 
 * /products/add:
 *   post:
 *     summary: Add a new product
 *     tags: [Product]
 *     description: Add a new product to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The newly added product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * 
 * 
 * 
 * /products/edit/{product_id}:
 *   put:
 *     summary: Update a specific product
 *     tags: [Product]
 *     description: Update a specific product by its ID
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The updated product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * 
 * 
 * /products/{prod_id}:
 *   delete:
 *     summary: Delete an existing product
 *     tags: [Product]
 *     description: Delete an existing product by its ID
 *     parameters:
 *       - in: path
 *         name: prod_id
 *         required: true
 *         description: The ID of the product to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200: 
 *         description: The product was successfully deleted
 * 
 * 
 * 
 * /products/count:
 *   get:
 *     summary: Get number of products
 *     tags: [Product]
 *     description: Retrieve the number of products
 *     responses:
 *       200:
 *         description: The number of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 10
 * 
 * 
 * 
 * /products/favorite/count/{product_id}:
 *   get:
 *     summary: Get number of users who added a product to their favorites
 *     tags: [Product]
 *     description: Retrieve the number of users who added a specific product to their favorites
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         description: The ID of the product
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: The number of users who added the product to their favorites
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 10
 * 
 * 
 * 
 * /products/approved:
 *   get:
 *     summary: Get all approved products
 *     tags: [Product]
 *     description: Retrieve a list of all approved products
 *     responses:
 *       200:
 *         description: A list of approved products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * 
 * 
 * 
 * /products/pending:
 *   get:
 *     summary: Get all approved products
 *     tags: [Product]
 *     description: Retrieve a list of all pending products
 *     responses:
 *       200:
 *         description: A list of pending products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * 
 * 
 * 
 * /products/approve/{product_id}:
 *   put:
 *     summary: Approve a product
 *     tags: [Product]
 *     description: Approve a product by its ID
 *     parameters:
 *       - in: path
 *         name: product_id
 *         required: true
 *         description: The ID of the product to approve
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: The product was successfully approved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: The product was successfully approved
 * 
 * 
 * 
 * 
 */