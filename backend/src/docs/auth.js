/**
* @swagger
* tags:
*   name: Auth
*   description: Authentication and authorization API
* /auth:
*  get:
*   summary: Check if user is authenticated
*   tags: [Auth]
*   responses:
*    200:
*     description: User is authenticated
*     content:
*      application/json:
*       schema:
*        type: object
*        properties:
*         message:
*          type: string
*          example: User is authenticated
*    401:
*     description: User is not authenticated
*     content:
*      application/json:
*       schema:
*        type: object
*        properties:
*         message:
*          type: string
*          example: User is not authenticated

* /auth/admin:
*  get:
*   summary: Check if user is admin
*   tags: [Auth]
*   responses:
*    200:
*     description: User is admin
*     content:
*      application/json:
*       schema:
*        type: object
*        properties:
*         message:
*          type: string
*          example: User is admin
*    403:
*     description: Not authorized
*     content:
*      application/json:
*       schema:
*        type: object
*        properties:
*         message:
*          type: string
*          example: Not authorized

* /auth/moderator:
*  get:
*   summary: Check if user is moderator
*   tags: [Auth]
*   responses:
*    200:
*     description: User is moderator
*     content:
*      application/json:
*       schema:
*        type: object
*        properties:
*         message:
*          type: string
*          example: User is moderator
*    403:
*     description: Not authorized
*     content:
*      application/json:
*       schema:
*        type: object
*        properties:
*         message:
*          type: string
*          example: Not authorized
* 
* 
*/