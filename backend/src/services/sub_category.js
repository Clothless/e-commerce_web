const db = require("./db.js");
const helper = require("./helper.js");


// Get all sub_categories of a category
async function getSubCategories(category_name) {
    const rows = await db.query(
        `SELECT * FROM sub_category WHERE category_id=(SELECT category_id FROM category WHERE name='${category_name}')`
    );
    const data = helper.emptyOrRows(rows);
    return data;

}


// Add new sub_category
async function addSubCategory(sub_category) {
    const result = await db.query(
      `INSERT INTO sub_category 
      (name) 
      VALUES 
      ('${sub_category.name}')`
    );
  
    let message = "Error in adding category";
  
    if (result.affectedRows) {
      message = "Sub_Category added successfully";
    }
  
    return { message };
  }


// Count products in a sub categories
async function countProducts(sub_category) {
    const rows = await db.query(
        `SELECT COUNT(*) as data FROM product WHERE sub_category=(
            SELECT sub_id FROM sub_category WHERE name='${sub_category}'
        )`
    );
    const data = helper.emptyOrRows(rows);
    return data[0];

}


// Update sub_category
async function updateSubCategory(sub_category) {
    const result = await db.query(
      `UPDATE sub_category SET name='${sub_category.name}' WHERE sub_id=${sub_category.sub_id}`
    );
  
    let message = "Error in updating sub_category";
  
    if (result.affectedRows) {
      message = "Sub_Category updated successfully";
    }
  
    return { message };
}


// Delete sub_category
async function deleteSubCategory(sub_id) {
    const result = await db.query(
      `DELETE FROM sub_category WHERE sub_id=${sub_id}`
    );
  
    let message = "Error in deleting sub_category";
  
    if (result.affectedRows) {
      message = "Sub_Category deleted successfully";
    }
  
    return { message };
}


// Get all sub categories
async function getSubCategories() {
    const rows = await db.query(
        `SELECT * FROM sub_category`
    );
    const data = helper.emptyOrRows(rows);
    return data;

}


module.exports = {
    getSubCategories,
    addSubCategory,
    countProducts,
    updateSubCategory,
    deleteSubCategory,
    getSubCategories
}