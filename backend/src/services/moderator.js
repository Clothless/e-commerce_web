const db = require("./db.js");
const helper = require("./helper.js");
const bcrypt = require("bcrypt");

// Get all moderators
async function getAllmoderators(page = 1, listPerPage = 10) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM user where role='moderator' LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return data;
}

// Get specific moderator
async function getmoderatorById(id) {
  const rows = await db.query(
    `SELECT * FROM user WHERE user_id=${id} AND role='moderator'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

// Get moderator by email
async function getmoderatorByEmail(email) {
  const rows = await db.query(
    `SELECT * FROM user WHERE email='${email} AND role='moderator'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

// Add new moderator
async function addmoderator(moderator) {
  const hashedPassword = await bcrypt.hash(moderator.password, 10);
  const checkUser = await getmoderatorByEmail(moderator.email);
  if (checkUser.length) {
    return { message: "User already exists" };
  }
  const result = await db.query(
    `INSERT INTO user (first_name, last_name, address, phone_number, email, password) 
    VALUES 
    ('${moderator.first_name}', '${moderator.last_name}', "", "", '${moderator.email}', '${hashedPassword}', 'moderator')`
  );

  let message = "Error in adding moderator";

  if (result.affectedRows) {
    message = "moderator added successfully";
  }

  return { message };
}

// Update existing moderator
async function updatemoderator(id, moderator) {
  const hashedPassword = await bcrypt.hash(moderator.password, 10);
  const result = await db.query(
    `UPDATE user 
    SET first_name='${moderator.first_name}', last_name='${moderator.last_name}',
    email='${moderator.email}', password='${hashedPassword}', role='${moderator.role}'
    WHERE user_id=${id}`
  );

  let message = "Error in updating moderator";

  if (result.affectedRows) {
    message = "moderator updated successfully";
  }

  return { message };
}

// Delete existing moderator
async function deletemoderator(id) {
  const result = await db.query(
    `DELETE FROM user WHERE user_id=${id} AND role='moderator'`
  );

  let message = "Error in deleting moderator";

  if (result.affectedRows) {
    message = "moderator deleted successfully";
  }

  return { message };
}

module.exports = {
  getAllmoderators,
  getmoderatorById,
  addmoderator,
  updatemoderator,
  deletemoderator,
  getmoderatorByEmail
};