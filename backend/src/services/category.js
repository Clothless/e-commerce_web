const db = require("./db.js");
const helper = require("./helper.js");


// Get all categories
async function getAllCategories() {
  const rows = await db.query(
    `SELECT * FROM category`
  );

  const data = helper.emptyOrRows(rows);
  return data;
}


//Get category
async function getCategory(id) {
  const rows = await db.query(
    `SELECT * FROM category WHERE category_id=${id}`
  );
  const data = helper.emptyOrRows(rows);
  return data;
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


// Get category by sub category id
async function getCategoryBySubCategory(sub_id) {
  const rows = await db.query(
    `SELECT * FROM category WHERE category_id=(
      SELECT category_id FROM sub_category WHERE sub_id="${sub_id}"
    )`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}


// Get categories and sub category of each one
async function getCategoriesWithSubCategories() {
  const rows = await db.query(
    `SELECT
    c.category_id, c.name AS category_name, c.image,
    JSON_ARRAYAGG(JSON_OBJECT("sub_id", sc.sub_id, "name", sc.name, "image", sc.image)) AS subcategories
  FROM
    category c
  LEFT JOIN
    sub_category sc ON sc.category_id = c.category_id
  GROUP BY
    c.category_id;`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  countProductsInCategory,
  getCategory,
  getCategoryBySubCategory,
  getCategoriesWithSubCategories
};