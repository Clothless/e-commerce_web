// Swagger API model for sub_categories
//sub_id | name     | image | category_id
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
 */  