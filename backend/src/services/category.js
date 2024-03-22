const db = require("./db.js");
const helper = require("./helper.js");


// Get all categories
async function getAllCategories() {
  const rows = await db.query(
    `SELECT * FROM category`
  );

  const data = helper.emptyOrRows(rows);
  return { data };
}

// Add new category
async function addCategory(category) {
  const result = await db.query(
    `INSERT INTO category 
    (name) 
    VALUES 
    ('${category.name}')`
  );

  let message = "Error in adding category";

  if (result.affectedRows) {
    message = "Category added successfully";
  }

  return { message };
}

// Update existing category
async function updateCategory(id, category) {
  const result = await db.query(
    `UPDATE category 
    SET name='${category.name}'
    WHERE category_id=${id}`
  );

  let message = "Error in updating category";

  if (result.affectedRows) {
    message = "Category updated successfully";
  }

  return { message };
}

// Delete existing category
async function deleteCategory(id) {
  const result = await db.query(
    `DELETE FROM category WHERE category_id=${id}`
  );

  let message = "Error in deleting category";

  if (result.affectedRows) {
    message = "Category deleted successfully";
  }

  return { message };
}

// count products in a category
async function countProductsInCategory(category_name) {
  const rows = await db.query(
    `SELECT COUNT(*) as count FROM product WHERE category=(
      SELECT category_id FROM category WHERE name="${category_name}"
    )`
  );
  const count = rows[0].count;
  return count;
}

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  countProductsInCategory
};