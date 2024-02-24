const db = require("./db.js");
const helper = require("./helper.js");
const bcrypt = require("bcrypt");

// Get all admins
async function getAllAdmins(page = 1) {
  const rows = await db.query(
    `SELECT * FROM admin`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };
}

// Get specific admin
async function getAdminById(id) {
  const rows = await db.query(
    `SELECT * FROM admin WHERE admin_id=${id}`
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

// Get admin by email
async function getAdminByEmail(email) {
  const rows = await db.query(
    `SELECT * FROM admin WHERE email='${email}'`
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
    `INSERT INTO admin (first_name, last_name, email, password, role) 
    VALUES 
    ('${admin.first_name}', '${admin.last_name}', '${admin.email}', '${hashedPassword}', '${admin.role}')`
  );

  let message = "Error in adding admin";

  if (result.affectedRows) {
    message = "Admin added successfully";
  }

  return { message };
}

// Update existing admin
async function updateAdmin(id, admin) {
  const hashedPassword = await bcrypt.hash(admin.password, 10);
  const result = await db.query(
    `UPDATE admin 
    SET first_name='${admin.first_name}', last_name='${admin.last_name}',
    email='${admin.email}', password='${hashedPassword}', role='${admin.role}'
    WHERE admin_id=${id}`
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
    `DELETE FROM admin WHERE admin_id=${id}`
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