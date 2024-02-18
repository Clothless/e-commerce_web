const db = require("./db.js");
const helper = require("./helper.js");


// Get all users
async function getAllUsers(page = 1) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM user LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

// Add new user
async function addUser(user) {
  const result = await db.query(
    `INSERT INTO user 
    (first_name, last_name, address, phone_number, email, password) 
    VALUES 
    ('${user.first_name}', '${user.last_name}', '${user.address}', '${user.phone_number}', '${user.email}', '${user.password}')`
  );

  let message = "Error in adding user";

  if (result.affectedRows) {
    message = "User added successfully";
  }

  return { message };
}

// Update existing user
async function updateUser(id, user) {
  const result = await db.query(
    `UPDATE user 
    SET first_name='${user.first_name}', last_name='${user.last_name}',
    address='${user.address}',
    phone_number='${user.phone_number}', email='${user.email}', password='${user.password}'
    WHERE id=${id}`
  );

  let message = "Error in updating user";

  if (result.affectedRows) {
    message = "User updated successfully";
  }

  return { message };
}

// Delete existing user
async function deleteUser(id) {
  const result = await db.query(
    `DELETE FROM user WHERE id=${id}`
  );

  let message = "Error in deleting user";

  if (result.affectedRows) {
    message = "User deleted successfully";
  }

  return { message };
}

// Get user by email
async function getUserByEmail(email) {
  const rows = await db.query(
    `SELECT * FROM user WHERE email='${email}'`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}

// Get user by id
async function getUserById(id) {
  const rows = await db.query(
    `SELECT * FROM user WHERE id=${id}`
  );
    const data = helper.emptyOrRows(rows);
    return data;
}


module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getUserByEmail,
  getUserById
};


