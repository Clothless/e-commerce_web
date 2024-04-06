/**
 * @swagger
 * components:
 *   schemas:
 *     Image:
 *       type: object
 *       required:
 *         - image
 *       properties:
 *         image:
 *           type: string
 *           format: binary
 *       example:
 *         image: "image.jpg"
 */

// Swagger API operation for uploading image
/**
 * @swagger
 * tags:
 *   name: Image
 *   description: Image management
 *
 * /images/upload:
 *   post:
 *     summary: Upload an image
 *     tags: [Image]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Image uploaded successfully
 *                   example: Image uploaded successfully
 *       400:
 *         description: No image data provided
 *       500:
 *         description: Internal server error
 */