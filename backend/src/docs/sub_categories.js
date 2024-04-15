// Swagger API model for sub_categories

/**
 * @swagger
 *  components:
 *   schemas:
 *    Sub_Category:
 *     type: object
 *     required:
 *      - name
 *     properties:
 *      sub_id:
 *       type: integer
 *       description: The auto-generated id of the sub_category
 *      name:
 *       type: string
 *       description: The name of the sub_category
 *      image:
 *       type: string
 *       description: The image path of the sub_category
 *      category_id:
 *       type: integer
 *       description: The category id of the sub_category
 *     example:
 *      sub_id: 1
 *      name: "Phone"
 *      image: "image.jpg"
 *      category_id: 1
 * 
 */

/**
 * @swagger
 * /sub_categories/{category_name}:
 *  get:
 *   summary: Get all sub_categories of a category
 *   tags: [Sub_Category]
 *   parameters:
 *    - in: path
 *      name: category_name
 *      schema:
 *        type: string
 *      required: true
 *      description: The name of the category
 *   responses:
 *    200:
 *     description: The sub_categories of the category
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Sub_Category'
 * 
 * 
 * /sub_categories/add:
 *   post:
 *     summary: Add new sub_category
 *     tags: [Sub_Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the sub_category
 *               image:
 *                 type: string
 *                 description: The image path of the sub_category
 *               category_id:
 *                 type: integer
 *                 description: The category id of the sub_category
 *     responses:
 *       200:
 *         description: Sub_Category added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the response
 *               example:
 *                 message: Sub_Category added successfully
 * 
 * 
 * /sub_categories/count/{sub_category}:
 *   get:
 *     summary: Count products in a sub category
 *     tags: [Sub_Category]
 *     parameters:
 *       - in: path
 *         name: sub_category
 *         schema:
 *           type: string
 *         required: true
 *         description: The id of the sub_category
 *     responses:
 *       200:
 *         description: The product count of the sub_category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   description: The product count of the sub_category
 *               example:
 *                 count: 10
 * 
 * 
 * /sub_categories/update:
 *   put:
 *     summary: Update sub_category
 *     tags: [Sub_Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               sub_id:
 *                 type: integer
 *                 description: The id of the sub_category
 *               name:
 *                 type: string
 *                 description: The name of the sub_category
 *     responses:
 *       200:
 *         description: Sub_Category updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the response
 *                   example:
 *                     message: Sub_Category updated successfully
 * 
 * 
 * /sub_categories/delete/{sub_id}:
 *   delete:
 *     summary: Delete sub_category
 *     tags: [Sub_Category]
 *     parameters:
 *       - in: path
 *         name: sub_id
 *         schema:
 *           type: integer
 *           required: true
 *         description: The id of the sub_category
 *     responses:
 *       200:
 *         description: Sub_Category deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the response
 *               example:
 *                 message: Sub_Category deleted successfully
 * 
 * 
 * /sub_categories:
 *   get:
 *     summary: Get all sub_categories
 *     tags: [Sub_Category]
 *     responses:
 *       200:
 *         description: The list of all sub_categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sub_Category'
 * 
 *         
 *          
 */  