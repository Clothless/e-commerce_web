/**
 * @swagger
 * components:
 *  schemas:
 *    Comment:
 *      type: object
 *      required:
 *        - posted_by
 *        - posted_for
 *        - content
 *      properties:
 *        comment_id:
 *          type: integer
 *          description: The auto-generated id of the comment
 *        posted_by:
 *          type: integer
 *          description: The id of the user
 *        posted_for:
 *          type: integer
 *          description: The id of the product
 *        content:
 *          type: string
 *          description: The comment
 *        post_time:
 *          type: string
 *          description: The date of the comment
 *      example:
 *        posted_by: 1
 *        posted_for: 1
 *        content: I like this product
 */

// Swagger API operations for comment
/**
 * @swagger
 * tags:
 *  name: Comment
 *  description: The comment managing API
 * /comments/{productId}:
 *  get:
 *    summary: Returns the list of all the comments for a product
 *    tags: [Comment]
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema:
 *          type: integer
 *        required: true
 *        description: The id of the product
 *    responses:
 *      200:
 *        description: The list of the comments
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Comment'
 * 
 * /comments/add:
 *  post:
 *    summary: Add a new comment
 *    tags: [Comment]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Comment'
 *    responses:
 *      200:
 *        description: The comment was successfully added
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: The comment was successfully added
 * 
 * /comments/{id}:
 *  delete:
 *    summary: Delete an existing comment
 *    tags: [Comment]
 *    responses:
 *      200:
 *        description: The comment was successfully deleted
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: The comment was successfully deleted
 */