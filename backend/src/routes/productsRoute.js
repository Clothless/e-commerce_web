const { Router } = require("express");
const router = Router();
const products = require("../services/products.js");
const { isAuthenticated } = require("../controllers/auth.js");
const multer = require("multer");
const upload = multer();
const imgbbUploader = require("imgbb-uploader");




// Search route
router.get("/search", async function (req, res, next) {
  try {
    res.json(await products.searchProductByName(req.query.page, req.query.listPerPage, req.query.name));
  } catch (err) {
    console.error(`Error while searching products `, err.message);
    next(err);
  }
});


// Pending Search route
router.get("/search/pending", async function (req, res, next) {
  try {
    res.json(await products.searchPendingProductByName(req.query.page, req.query.listPerPage, req.query.name));
  } catch (err) {
    console.error(`Error while searching products `, err.message);
    next(err);
  }
});


// Approved Search route
router.get("/search/approved", async function (req, res, next) {
  try {
    res.json(await products.searchApprovedProductByName(req.query));
  } catch (err) {
    console.error(`Error while searching products `, err.message);
    next(err);
  }
});


// Get all products
router.get("/", async function (req, res, next) {
  try {
    res.json(await products.getAllProducts(req.query.page, req.query.listPerPage));
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


// Get products by sub_category
router.get("/sub_category/:sub_category", async function (req, res, next) {
  try {
    res.json(await products.getProductsBySubCategory(req.params.sub_category));
  } catch (err) {
    console.error(`Error while getting products by sub_category `, err.message);
    next(err);
  }
});


// Get product by wilaya
router.get("/wilaya/:wilaya", async function (req, res, next) {
  try {
    res.json(await products.getProductsByWilaya(req.params.wilaya));
  } catch (err) {
    console.error(`Error while getting products by wilaya `, err.message);
    next(err);
  }
});


// Add a product
router.post("/add", upload.array("images"), async function (req, res, next) {
  try {
    res.json(await products.addProduct(req.body));
  } catch (err) {
    console.error(`Error while adding product`, err.message);
    next(err);
  }
});


// Update Product
router.put("/edit/:id", upload.array("images"), async function (req, res, next) {
  try {
    res.json(await products.updateProduct(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating product`, err.message);
    next(err);
  }
});


// Delete an image from a product
router.delete("/deleteImage/:id", async function (req, res, next) {
  try {
    res.json(await products.deleteImage(req.params.id, req.query.image));
  } catch (err) {
    console.error(`Error while deleting image`, err.message);
    next(err);
  }
});


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
    console.error(`Error while getting approved products`, error.message);
    next(error);
  }
})


// Get all approved products
router.get("/approved", async function(req, res, next) {
  try {
    res.json(await products.getApprovedProducts(req.query.page, req.query.listPerPage))
  } catch (error) {
    console.error(`Error while getting approved products`, error.message);
    next(error);
  }
})


// Get all pending products
router.get("/pending", async function(req, res, next) {
  try {
    res.json(await products.getPendingProducts(req.query.page, req.query.listPerPage))
  } catch (error) {
    console.error(`Error while getting pending products`, error.message);
    next(error);
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


// Filter products
router.get("/filter", async function (req, res, next) {
  try {
    res.json(await products.filterProducts(req.query));
  } catch (err) {
    console.error(`Error while filtering products `, err.message);
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
