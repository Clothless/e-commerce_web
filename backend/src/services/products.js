const db = require("./db.js");
const helper = require("./helper.js");
const listPerPage = require("../configs/db_connect.js").listPerPage;

// Get all products
async function getAllProducts(page = 1) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM product ORDER BY created_at DESC LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}



// Get products by category
async function getProductsByCategory(category) {
  const rows = await db.query(
    `SELECT * FROM product WHERE category=(SELECT category_id FROM category WHERE name='${category}') ORDER BY created_at DESC`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}


// Get products by sub_category
async function getProductsBySubCategory(sub_category) {
  const rows = await db.query(
    `SELECT * FROM product WHERE sub_category=
        (SELECT sub_id FROM sub_category WHERE name='${sub_category}') ORDER BY created_at DESC`
  );
  const data = helper.emptyOrRows(rows);
  return {
    data,
  };
}


// Get product by Wilaya
async function getProductsByWilaya(wilaya) {
  const rows = await db.query(
    `SELECT * FROM product WHERE posted_by IN
        (SELECT user_id FROM user WHERE wilaya IN
            (SELECT wilaya_code FROM algeria_cities WHERE wilaya_name="${wilaya}")
        ) ORDER BY created_at DESC
    `
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}


// Get specific product
async function getProductById(id) {
  const productRows = await db.query(
    `SELECT * FROM product WHERE product_id=${id}`
  );
  const commentsRows = await db.query(
    `SELECT * FROM comment WHERE posted_for=${id}`
  );
  const product = helper.emptyOrRows(productRows);
  const comments = helper.emptyOrRows(commentsRows);

  return {
    product,
    comments,
  };
}

// Add new product
async function addProduct(product) {
  const imagesJson = JSON.stringify(product.images); // Convert images array to JSON string
  const result = await db.query(
    `INSERT INTO product 
    (name, description, price, posted_by, category, images) 
    VALUES 
    ('${product.name}', '${product.description}', '${product.price}', '${product.posted_by}', '${product.category}', '${imagesJson}')`
  );

  let message = "Error in adding product";

  if (result.affectedRows) {
    message = "Product added successfully";
  }

  return { message };
}

// Update existing product
async function updateProduct(id, product) {
  const productData = await getProductById(id);
  const images = JSON.parse(productData.product[0].images);
  const imagesJs = images.concat((product.images));
  const imagesJson = JSON.stringify(imagesJs); // Convert images array to JSON string


  const result = await db.query(
    `UPDATE product 
    SET name='${product.product.name}', description='${product.product.description}',
    price=${product.product.price},
    category='${product.product.category}', images='${imagesJson}'
    WHERE product_id=${id}`
  );

  let message = "Error in updating product";

  if (result.affectedRows) {
    message = "Product updated successfully";
  }

  return { message };
}


// Delete given image from product
async function deleteImage(id, image) {
  const productData = await getProductById(id);
  const images = JSON.parse(productData.product[0].images);
  const imagesJs = images.filter((img) => img !== image);
  const imagesJson = JSON.stringify(imagesJs); // Convert images array to JSON string

  const result = await db.query(
    `UPDATE product 
    SET images='${imagesJson}'
    WHERE product_id=${id}`
  );

  let message = "Error in deleting image";

  if (result.affectedRows) {
    message = "Image deleted successfully";
  }

  return { message };
}

// Delete existing product
async function deleteProduct(id) {
  const result = await db.query(`DELETE FROM product WHERE product_id=${id}`);

  let message = "Error in deleting product";

  if (result.affectedRows) {
    message = "Product deleted successfully";
  }

  return { message };
}

// add product to user favorite list
async function addFavoriteProduct(user_id, product_id) {
  const result = await db.query(
    `INSERT INTO favorite_products 
    (user_id, product_id) 
    VALUES 
    ('${user_id}', '${product_id}')`
  );

  let message = "Error in adding product to favorite list";

  if (result.affectedRows) {
    message = "Product added to favorite list successfully";
  }

  return { message };
}

// remove product from user favorite list
async function removeFavoriteProduct(user_id, product_id) {
  const result = await db.query(
    `DELETE FROM favorite_products 
    WHERE user_id=${user_id} AND product_id=${product_id}`
  );

  let message = "Error in removing product from favorite list";

  if (result.affectedRows) {
    message = "Product removed from favorite list successfully";
  }

  return { message };
}

// get user favorite products
async function getFavoriteProducts(user_id) {
  const rows = await db.query(
    `SELECT * FROM favorite_products WHERE user_id=${user_id} ORDER BY created_at DESC`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

// get products count
async function getProductsCount() {
  const rows = await db.query(`SELECT COUNT(*) AS count FROM product`);
  const count = rows[0].count;
  return {
    count
  };
}

//count how many user added a specific product to their favorites
async function getFavoriteCount(product_id) {
  const rows = await db.query(
    `SELECT COUNT(*) AS count FROM favorite_products WHERE product_id=${product_id}`
  );
  const count = rows[0].count;
  return {
    count
  };
}

//Get approved products only
async function getApprovedProducts(page=1) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(`SELECT * FROM product WHERE pending = 0 ORDER BY created_at DESC LIMIT ${offset},${listPerPage}`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };
  return {
    data,
    meta,
  };
}

//Get pending products only
async function getPendingProducts(page=1) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(`SELECT * FROM product WHERE pending <> 0 ORDER BY created_at DESC LIMIT ${offset},${listPerPage}`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };
  return {
    data,
    meta,
  };
}


//Approve product
async function approveProduct(id) {
  const rows = await db.query(`UPDATE product SET pending = 0 WHERE product_id=${id}`);
  const data = helper.emptyOrRows(rows);

  let message = "Error while approving product";

  if (data.affectedRows) {
    message = "Product approved successfully";
  }

  return {
    message
  };
}


// Filter products by date, wilaya, price, category, sub_category
async function filterProducts(filter) {
  let date = "";
  let wilaya = "";
  let price = "";
  let category = "";
  let sub_category = "";
  if (filter.from && filter.to){
    date = `created_at BETWEEN "${filter.from}" AND "${filter.to}" AND`;
  }
  if (filter.wilaya){
    wilaya = `posted_by IN
        (SELECT user_id FROM user WHERE wilaya IN
            (SELECT wilaya_code FROM algeria_cities WHERE wilaya_name="${filter.wilaya}")
        ) AND`;
  }
  if (filter.priceFrom && filter.priceTo){
    price = `price >= "${filter.priceFrom}" AND price <= "${filter.priceTo}" AND`;
  }
  if (filter.category){
    category = `category=(SELECT category_id FROM category WHERE name="${filter.category}") AND`;
  }
  if (filter.sub_category){
    sub_category = `sub_category=(SELECT sub_id FROM sub_category WHERE name="${filter.sub_category}") AND`;
  }
  
  const rows = await db.query(
    `SELECT * FROM product WHERE ${date} ${wilaya} ${price} ${category} ${sub_category} product_id > 0 ORDER BY created_at DESC`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}


// Search for product by name
async function searchProductByName(name) {
  const rows = await db.query(
    `SELECT * FROM product WHERE name LIKE '%${name}%' ORDER BY created_at DESC`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

// Search for product by name in the pending
async function searchPendingProductByName(name) {
  const rows = await db.query(
    `SELECT * FROM product WHERE pending <> 0 AND name LIKE '%${name}%' ORDER BY created_at DESC`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}


module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getProductsByCategory,
  addFavoriteProduct,
  removeFavoriteProduct,
  getFavoriteProducts,
  getProductsCount,
  getFavoriteCount,
  getApprovedProducts,
  getPendingProducts,
  approveProduct,
  getProductsByWilaya,
  getProductsBySubCategory,
  filterProducts,
  searchProductByName,
  deleteImage,
  searchPendingProductByName
};
