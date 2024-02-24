const {Router} = require('express');
const router = Router();
const comments = require('../services/comment.js');


// Get product comments
router.get("/:productId", async (req, res, next) => {
  try {
    res.json(await comments.getProductComments(req.params.productId));
  } catch (err) {
    console.error(`Error while getting comments `, err.message);
    next(err);
  }
});

// Add new comment
router.post("/add", async (req, res, next) => {
  try {
    res.json(await comments.addComment(req.body));
  } catch (err) {
    console.error(`Error while adding comment `, err.message);
    next(err);
  }
});

// delete existing comment
router.delete("/:id", async (req, res, next) => {
  try {
    res.json(await comments.deleteComment(req.params.id));
  } catch (err) {
    console.error(`Error while deleting comment `, err.message);
    next(err);
  }
});

module.exports = router;