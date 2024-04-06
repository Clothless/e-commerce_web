/**
 * @swagger
 * components:
 *  schemas:
 *    Admin:
 *      type: object
 *      required:
 *        - first_name
 *        - last_name
 *        - address
 *        - phone_number
 *        - email
 *        - password
 *      properties:
 *        user_id:
 *          type: integer
 *          description: The auto-generated id of the admin
 *        first_name:
 *          type: string
 *          description: The first name of the admin
 *        last_name:
 *          type: string
 *          description: The last name of the admin
 *        address:
 *          type: string
 *          description: The address of the admin
 *        phone_number:
 *          type: string
 *          description: The phone number of the admin
 *        email:
 *          type: string
 *          description: The email of the admin
 *        password:
 *          type: string
 *          description: The password of the admin
 *        role:
 *          type: string
 *          description: The role of the admin
 *      example:
 *        first_name: Mnawar
 *        last_name: Lma7ros
 *        address: Trig lka7la
 *        phone_number: 0665234678
 *        email: massita@gmail.com
 *        password: MnawarLka7la
 */


/**
 * @swagger
 * tags:
 *  name: Admin
 *  description: The Admin managing API
 * 
 * /admins:
 *  get:
 *    summary: Returns the list of all the admins
 *    tags: [Admin]
 *    requestBody:
 *      required: false
 *    responses:
 *      200:
 *        description: The list of the admins
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Admin'
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 *  post:
 *    summary: Add a new admin
 *    tags: [Admin]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Admin'
 *    responses:
 *      200:
 *        description: The admin was successfully added
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 *  put:
 *    summary: Update an existing admin
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The admin ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Admin'
 *    responses:
 *      200:
 *        description: The admin was successfully updated
 *      404:
 *        description: The admin was not found
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 *  delete:
 *    summary: Remove the admin
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The admin ID
 *    responses:
 *      200:
 *        description: The admin was deleted
 *      404:
 *        description: The admin was not found
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 * /admins/{id}:
 *  get:
 *    summary: Get the admin by id
 *    tags: [Admin]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The admin ID
 *    responses:
 *      200:
 *        description: The admin
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Admin'
 *      404:
 *        description: The admin was not found
 *      500:
 *        description: Some server error
 * 
 */