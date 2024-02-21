const db = require("./db.js");
const helper = require("./helper.js");

// Get all admins
async function getAllAdmins(page = 1) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM admin LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
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

// Add new admin
async function addAdmin(admin) {
  const result = await db.query(
    `INSERT INTO admin 
    (first_name, last_name, email, password, role) 
    VALUES 
    ('${admin.first_name}', '${admin.last_name}', '${admin.email}', '${admin.password}, '${admin.role})`
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
    `UPDATE admin 
    SET first_name='${admin.first_name}', last_name='${admin.last_name}',
    email='${admin.email}', password='${admin.password}', role='${admin.role}'
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
  deleteAdmin
};