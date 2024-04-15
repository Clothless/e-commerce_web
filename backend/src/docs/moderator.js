/**
 * @swagger
 * components:
 *  schemas:
 *    moderator:
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
 *          description: The auto-generated id of the moderator
 *        first_name:
 *          type: string
 *          description: The first name of the moderator
 *        last_name:
 *          type: string
 *          description: The last name of the moderator
 *        address:
 *          type: string
 *          description: The address of the moderator
 *        phone_number:
 *          type: string
 *          description: The phone number of the moderator
 *        email:
 *          type: string
 *          description: The email of the moderator
 *        password:
 *          type: string
 *          description: The password of the moderator
 *        role:
 *          type: string
 *          description: The role of the moderator
 *      example:
 *        first_name: Mnawar
 *        last_name: Lma7ros
 *        address: Trig lka7la
 *        phone_number: 0665234678
 *        email: massita@gmail.com
 *        password: MnawarLka7la
 *        role: moderator
 */


/**
 * @swagger
 * tags:
 *  name: moderator
 *  description: The moderator managing API
 * 
 * /moderators:
 *  get:
 *    summary: Returns the list of all the moderators
 *    tags: [moderator]
 *    requestBody:
 *      required: false
 *    responses:
 *      200:
 *        description: The list of the moderators
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/moderator'
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 *  post:
 *    summary: Add a new moderator
 *    tags: [moderator]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/moderator'
 *    responses:
 *      200:
 *        description: The moderator was successfully added
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 *  put:
 *    summary: Update an existing moderator
 *    tags: [moderator]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The moderator ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/moderator'
 *    responses:
 *      200:
 *        description: The moderator was successfully updated
 *      404:
 *        description: The moderator was not found
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 *  delete:
 *    summary: Remove the moderator
 *    tags: [moderator]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The moderator ID
 *    responses:
 *      200:
 *        description: The moderator was deleted
 *      404:
 *        description: The moderator was not found
 *      500:
 *        description: Some server error
 * 
 * 
 * 
 * /moderators/{id}:
 *  get:
 *    summary: Get the moderator by id
 *    tags: [moderator]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: The moderator ID
 *    responses:
 *      200:
 *        description: The moderator
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/moderator'
 *      404:
 *        description: The moderator was not found
 *      500:
 *        description: Some server error
 * 
 */