const db = require("./db.js");
const helper = require("./helper.js");


// Get all categories
async function getAllCategories(page = 1) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM category LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
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



module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};