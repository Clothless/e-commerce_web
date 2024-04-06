/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - address
 *         - phone_number
 *         - email
 *         - password
 *       properties:
 *         user_id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         first_name:
 *           type: string
 *           description: First name of the user
 *         last_name:
 *           type: string
 *           description: Last name of the user
 *         address:
 *           type: string
 *           description: Address of the user
 *         phone_number:
 *           type: string
 *           description: Phone number of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *         role:
 *           type: string
 *           description: Role of the user
 *       example:
 *         first_name: John
 *         last_name: Doe
 *         address: 1234 Elm Street
 *         phone_number: 555-555-5555
 *         email: kach.haja@gmail.com
 *         password: password
 *         role: user
 *
 *
 *
 */

// Swagger API operations for user
// (getAllUsers, getSpecificUser, addUser, updateUser, deleteUser, loginUser, logoutUser, addProductToFavorite, removeProductFromFavorite, getFavoriteProducts, countUsers, getProductsByUser)
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The Users managing API
 *
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *
 *
 * /users/{id}:
 *  get:
 *   summary: Get the user by id
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: The user id
 *   responses:
 *    '200':
 *     description: The user description by id
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/User'
 *
 * 
 * 
 * /users/add:
 * post:
 *  summary: Add a user
 *  tags: [Users]
 *  requestBody:
 *   required: true
 *   content:
 *    application/json:
 *     schema:
 *      $ref: '#/components/schemas/User'
 *  responses:
 *   200:
 *    description: The user was successfully added
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        message:
 *         type: string
 *         example: User added successfully
 * 
 * 
 * 
 * /users/edit/{id}:
 *  put:
 *   summary: Update a user
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: The user id
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    200:
 *     description: The user was updated
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: User updated successfully
 * 
 *
 * /users/{user_id}:
 *  delete:
 *   summary: Remove the user by id
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: user_id
 *      schema:
 *        type: integer
 *      required: true
 *      description: The user id
 *   responses:
 *    200:
 *     description: The user was deleted
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: User deleted successfully
 * 
 * 
 * /users/login:
 *  post:
 *   summary: Login a user
 *   tags: [Users]
 *   requestBody:
 *    required: true
 *    content:
 *     x-www-form-urlencoded:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *        password:
 *         type: string
 *   responses:
 *    200:
 *     description: The user was logged in
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: User logged in successfully
 *
 * 
 * /users/logout:
 *  get:
 *   summary: Logout a user
 *   tags: [Users]
 *   responses:
 *    200:
 *     description: The user was logged out
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: User logged out successfully
 * 
 * 
 * 
 * /products/favorite/{product_id}:
 *  post:
 *   summary: Add a product to favorite
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: product_id
 *      schema:
 *        type: integer
 *      required: true
 *      description: The product id
 *   responses:
 *    200:
 *     description: The product was added to favorite
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: Product added to favorite successfully
 *    401:
 *     description: Unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: Not authenticated
 * 
 * 
 * /products/favorite/{prod_id}:
 *  delete:
 *   summary: Add a product to favorite
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: prod_id
 *      schema:
 *        type: integer
 *      required: true
 *      description: The product id
 *   responses:
 *    200:
 *     description: The product was removed from favorite
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: Product removed fron favorite successfully
 *    401:
 *     description: Unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: Not authenticated
 * 
 * 
 * /products/favorite:
 *  get:
 *   summary: Get favorite products
 *   tags: [Users]
 *   responses:
 *    200:
 *     description: The list of favorite products
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Product'
 *    401:
 *     description: Unauthorized
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 *          example: Not authenticated
 * 
 * 
 * 
 * /users/count:
 *  get:
 *   summary: Get the number of users
 *   tags: [Users]
 *   responses:
 *    200:
 *     description: The number of users
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         count:
 *          type: integer
 *          example: 54
 * 
 * 
 * /users/{id}/products:
 *  get:
 *   summary: Get the products of a user
 *   tags: [Users]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: The user id
 *   responses:
 *    200:
 *     description: The list of the user's products
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/Product'
 * 
 * 
 * 
 * 
 * 
 */