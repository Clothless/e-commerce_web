const db = require("./db.js");
const helper = require("./helper.js");
const bcrypt = require("bcrypt");

// Get all admins
async function getAllAdmins(page = 1, listPerPage = 10) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM user where role='admin' LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return data;
}

// Get specific admin
async function getAdminById(id) {
  const rows = await db.query(
    `SELECT * FROM user WHERE user_id=${id} AND role='admin'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

// Get admin by email
async function getAdminByEmail(email) {
  const rows = await db.query(
    `SELECT * FROM user WHERE email='${email} AND role='admin'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

// Add new admin
async function addAdmin(admin) {
  const hashedPassword = await bcrypt.hash(admin.password, 10);
  const checkUser = await getAdminByEmail(admin.email);
  if (checkUser.length) {
    return { message: "User already exists" };
  }
  const result = await db.query(
    `INSERT INTO user (first_name, last_name, address, phone_number, email, password, role) 
    VALUES 
    ('${admin.first_name}', '${admin.last_name}', "", "", '${admin.email}', '${hashedPassword}', '${admin.role}')`
  );

  let message = "Error in adding admin";

  if (result.affectedRows) {
    message = "Admin added successfully";
  }

  return { message };
}

// Update existing admin
async function updateAdmin(id, admin) {
  const result = await db.query(
    `UPDATE user 
    SET first_name='${admin.first_name}', last_name='${admin.last_name}',
    email='${admin.email}', role='${admin.role}', address='${admin.address}', phone_number='${admin.phone_number}'
    WHERE user_id=${id}`
  );

  let message = "Error in updating admin";

  if (result.affectedRows) {
    message = "Admin updated successfully";
  }

  return { message };
}

// Delete existing admin
async function deleteAdmin(id) {
  const result = await db.query(
    `DELETE FROM user WHERE user_id=${id} AND role='admin'`
  );

  let message = "Error in deleting admin";

  if (result.affectedRows) {
    message = "Admin deleted successfully";
  }

  return { message };
}

module.exports = {
  getAllAdmins,
  getAdminById,
  addAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminByEmail
};