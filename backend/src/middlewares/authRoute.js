const { Router } = require("express");
const router = Router();
const auth = require("../controllers/auth.js");

// user is logged in
router.get("/", auth.isAuthenticated, async (req, res) => {
  res.json({ message: "User is logged in" });
});


// user is admin
router.get("/admin", auth.isAdmin, async (req, res) => {
  res.json({ message: "User is admin" });
});

// user is sub-admin
router.get("/moderator", auth.isSubAdmin, async (req, res) => {
  res.json({ message: "User is moderator" });
});


module.exports = router;