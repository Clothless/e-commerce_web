const { Router } = require("express");
const router = Router();
const products = require("../services/products.js");
const { isAuthenticated } = require("../controllers/auth.js");

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
router.get("/approve/:id", async function(req, res, next) {
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
