const db = require("./db.js");
const helper = require("./helper.js");
const bcrypt = require("bcrypt");


// Check user role
async function checkUserRole(id) {
  const rows = await db.query(
    `SELECT role FROM user WHERE user_id=${id}`
  );
  const data = helper.emptyOrRows(rows);
  return data[0];
}


// Get all users
async function getAllUsers(search) {
  const name = search.name ? search.name : "";
  const page = search.page ? search.page : 1;
  const listPerPage = search.listPerPage ? search.listPerPage : 10;
  const offset = helper.getOffset(page, listPerPage);
  if (name) {
    const rows = await db.query(
      `SELECT * FROM user WHERE first_name like '%${name}%' or last_name like '%${name}%' or email like '%${name}%' LIMIT ${offset},${listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return data;
  }
  const rows = await db.query(
    `SELECT * FROM user WHERE name like  LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return data;
}

// Get specific user
async function getSpecificUser(id) {
  const rows = await db.query(
    `SELECT * FROM user WHERE user_id=${id}`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}

// Add new user
async function addUser(user) {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const checkUser = await getUserByEmail(user.email);
    if (checkUser.length) {
        return { message: "User already exists" };
    }
  const result = await db.query(
    `INSERT INTO user 
    (first_name, last_name, address, phone_number, email, password) 
    VALUES 
    ('${user.first_name}', '${user.last_name}', '${user.address}', '${user.phone_number}', '${user.email}', '${hashedPassword}')`
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
    phone_number='${user.phone_number}', email='${user.email}', password='${user.password}', wilaya=${user.wilaya}
    WHERE user_id=${id}`
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
    `DELETE FROM user WHERE user_id=${id}`
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

// Log in user
async function loginUser(user) {
  const checkUser = await getUserByEmail(user.email);
  if (!checkUser.length) {
    return { message: "User does not exist" };
  }
  const hashedPassword = checkUser[0].password;
  const match = await bcrypt.compare(user.password, hashedPassword);
  if (!match) {
    return { message: "Wrong email or password" };
  }
  return checkUser;
}

// count all users
async function countUsers() {
  const rows = await db.query(
    `SELECT COUNT(*) as count FROM user`
  );
  const count = rows[0].count;
  return count;
}


// Get all products posted by specific user
async function getProductsByUser(id, page = 1, listPerPage = 10) {
  const offset = helper.getOffset(page, listPerPage);
  const rows = await db.query(
    `SELECT * FROM product WHERE posted_by=${id} LIMIT ${offset},${listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}


// Add profile image
async function addProfileImage(user_id, image) {
  const result = await db.query(
    `UPDATE user 
    SET image='${image}'
    WHERE user_id=${user_id}`
  );

  let message = "Error in adding profile image";

  if (result.affectedRows) {
    message = "Profile image added successfully";
  }

  return { message };
}


// Get users favorite products
async function getFavoriteProducts(user_id) {
  const rows = await db.query(
    `SELECT * from product WHERE product_id IN (SELECT product_id FROM favorite_products WHERE user_id=${user_id})`
  );
  const data = helper.emptyOrRows(rows);
  return data;
}


// Get wilaya by id
async function getWilayaById(id) {
  const rows = await db.query(
    `SELECT * FROM algeria_cities WHERE wilaya_code=${id}`
  );
  const data = helper.emptyOrRows(rows);
  return data[0];
}


module.exports = {
  getAllUsers,
  getSpecificUser,
  addUser,
  updateUser,
  deleteUser,
  getUserByEmail,
  loginUser,
  countUsers,
  getProductsByUser,
  addProfileImage,
  getWilayaById,
  checkUserRole,
  getFavoriteProducts
};


