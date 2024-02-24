const db = require("./db.js");

// Get product comments
async function getProductComments(productId) {
  const rows = await db.query(
    `SELECT * FROM comment WHERE posted_for=${productId}`
  );

  return rows;
}

// Add new comment
async function addComment(comment) {
  const result = await db.query(
    `INSERT INTO comment 
    (posted_by, posted_for, content) 
    VALUES 
    ('${comment.posted_by}', '${comment.posted_for}', '${comment.content}')`
  );

  let message = "Error in adding comment";

  if (result.affectedRows) {
    message = "Comment added successfully";
  }

  return { message };
}

// delete existing comment
async function deleteComment(id) {
  const result = await db.query(
    `DELETE FROM comment WHERE comment_id=${id}`
  );

  let message = "Error in deleting comment";

  if (result.affectedRows) {
    message = "Comment deleted successfully";
  }

  return { message };
}

module.exports = {
  getProductComments,
  addComment,
  deleteComment
};