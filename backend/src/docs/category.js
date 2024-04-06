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
 *        image:
 *          type: string
 *          description: The image path of the category
 *      example:
 *        category_id: 1
 *        name: Electronics
 *        image: "image.jpg"
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