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

module.exports = {
    getSubCategories
}