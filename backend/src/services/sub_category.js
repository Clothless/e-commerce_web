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

module.exports = {
    getSubCategories,
    addSubCategory
}