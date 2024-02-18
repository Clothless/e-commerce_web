const db = require("./db.js");
const helper = require("./helper.js");
const listPerPage = require("../configs/db_connect.js").listPerPage;

// Get all products
async function getAllProducts(page = 1) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM product LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

// Add new product
async function addProduct(product) {
  const result = await db.query(
    `INSERT INTO product 
    (name, description, price, posted_by, category, images) 
    VALUES 
    ('${product.name}', '${product.description}', '${product.price}', '${product.posted_by}', '${product.category}', '${product.images}')`
  );

  let message = "Error in adding product";

  if (result.affectedRows) {
    message = "Product added successfully";
  }

  return { message };
}

// Update existing product
async function updateProduct(id, product) {
  const result = await db.query(
    `UPDATE product 
    SET name='${product.name}', description='${product.description}',
    price='${product.price}',
    category='${product.category}', images='${product.images}'
    WHERE id=${id}`
  );

  let message = "Error in updating product";

  if (result.affectedRows) {
    message = "Product updated successfully";
  }

  return { message };
}

// Delete existing product
async function deleteProduct(id) {
  const result = await db.query(
    `DELETE FROM product WHERE id=${id}`
    );

  let message = "Error in deleting product";

  if (result.affectedRows) {
    message = "Product deleted successfully";
  }

  return { message };
}


module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
