const { Router } = require("express");
const router = Router();
const products = require("../services/products.js");
const { isAuthenticated } = require("../controllers/auth.js");





// Swagger API model for product
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
 *  name: Product
 *  description: The products managing API
 * 
 * /products:
 *   get:
 *     summary: Get all products
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
 * 
 * /products/add:
 *   post:
 *     summary: Add a new product
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
 *     description: Delete an existing product by its ID
 *     parameters:
 *      - in: path
 *        name: prod_id
 *        required: true
 *        description: The ID of the product to delete
 *        schema:
 *          type: integer
 *     responses:
 *       200: 
 *         description: The product was successfully deleted
 * 
 * 
 * 
 * /products/count:
 *   get:
 *     summary: Get number of products
 *     description: Retrieve the number of products
 *     responses:
 *        200:
 *          description: The number of products
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  count:
 *                    type: integer
 *                    example: 10
 * 
 * 
 * 
 * /products/favorite/count/{product_id}:
 *   get:
 *     summary: Get number of users who added a product to their favorites
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
 










// Get all products
router.get("/", async function (req, res, next) {
  try {
    res.json(await products.getAllProducts(req.query.page));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

// get number of products
router.get("/count", async function (req, res, next) {
  try {
    res.json(await products.getProductsCount());
  } catch (err) {
    console.error(`Error while getting number of products `, err.message);
    next(err);
  }
});

// Get products by category
router.get("/category/:category", async function (req, res, next) {
  try {
    res.json(await products.getProductsByCategory(req.params.category));
  } catch (err) {
    console.error(`Error while getting products by category `, err.message);
    next(err);
  }
});



const multer = require("multer");
const upload = multer();
const imgbbUploader = require("imgbb-uploader");

// Add a product
router.post("/add", upload.array("images"), async function (req, res, next) {
  try {
    const { files } = req;

    
    if (files.length === 0) {
      return res.status(400).json({ message: "No image data provided" });
    }
    
    const urls = [];
    for (const file of files) {
      const options = {
        apiKey: process.env.IMGBB_KEY,
        base64string: file.buffer.toString("base64"),
      };
      const result = await imgbbUploader(options);
      urls.push(result.url);
    }
    
    req.body.images = urls;



    res.json(await products.addProduct(req.body));
  } catch (err) {
    console.error(`Error while adding product`, err.message);
    next(err);
  }
});


// Update Product
router.put("/edit/:id", upload.array("images"), async function (req, res, next) {
  try {
    const { files } = req;
    const urls = [];
    for (const file of files) {
      const options = {
        apiKey: process.env.IMGBB_KEY,
        base64string: file.buffer.toString("base64"),
      };
      const result = await imgbbUploader(options);
      urls.push(result.url);
    }
    req.body.images = urls;
    res.json(await products.updateProduct(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating product`, err.message);
    next(err);
  }
});

// Update a product
// router.put("/edit/:id", async function (req, res, next) {
//   try {
//     res.json(await products.updateProduct(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating product`, err.message);
//     next(err);
//   }
// });

// Delete a product
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await products.deleteProduct(req.params.id));
  } catch (err) {
    console.error(`Error while deleting product`, err.message);
    next(err);
  }
});


//Approve product
router.put("/approve/:id", async function(req, res, next) {
  try {
    res.json(await products.approveProduct(req.params.id))
  } catch (error) {
    console.error(`Error while getting approved products`, err.message);
    next(err);
  }
})


// Get all approved products
router.get("/approved", async function(req, res, next) {
  try {
    res.json(await products.getApprovedProducts())
  } catch (error) {
    console.error(`Error while getting approved products`, err.message);
    next(err);
  }
})


// Get all pending products
router.get("/pending", async function(req, res, next) {
  try {
    res.json(await products.getPendingProducts())
  } catch (error) {
    console.error(`Error while getting pending products`, err.message);
    next(err);
  }
})



// Get user favorite products
router.get('/favorite', isAuthenticated, async function(req, res, next) {
  try {
    res.json(await products.getFavoriteProducts(req.user.user_id));
  } catch (err) {
    console.error(`Error while getting favorite products`, err.message);
    next(err);
  }
});


//count how many user added a specific product to their favorites
router.get('/favorite/count/:id', async function(req, res, next) {
  try {
    res.json(await products.getFavoriteCount(req.params.id));
  } catch (err) {
    console.error(`Error while getting favorite count`, err.message);
    next(err);
  }
});


// add product to user favorite list
router.post('/favorite/:id', isAuthenticated, async function(req, res, next) {
  try {
    res.json(await products.addFavoriteProduct(req.user.user_id, req.params.id));
  } catch (err) {
    console.error(`Error while adding favorite product`, err.message);
    next(err);
  }
});

// remove product from user favorite list
router.delete('/favorite/:id', isAuthenticated, async function(req, res, next) {
  try {
    res.json(await products.removeFavoriteProduct(req.user.user_id, req.params.id));
  } catch (err) {
    console.error(`Error while removing favorite product`, err.message);
    next(err);
  }
});

// Get specific product
router.get("/:id", async function (req, res, next) {
  try {
    res.json(await products.getProductById(req.params.id));
  } catch (err) {
    console.error(`Error while getting product `, err.message);
    next(err);
  }
});

module.exports = router;
