const { Router } = require("express");
const router = Router();
const moderatorService = require("../services/moderator.js");




// Get all moderators
router.get("/", async function (req, res, next) {
  try {
    res.json(await moderatorService.getAllmoderators(req.query.page));
  } catch (err) {
    console.error(`Error while getting moderators `, err.message);
    next(err);
  }
});

// Add an moderator
router.post("/add", async function (req, res, next) {
  try {
    res.json(await moderatorService.addmoderator(req.body));
  } catch (err) {
    console.error(`Error while adding moderator`, err.message);
    next(err);
  }
});

// Update an moderator
router.put("/edit/:id", async function (req, res, next) {
  try {
    res.json(await moderatorService.updatemoderator(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating moderator`, err.message);
    next(err);
  }
});

// Delete an moderator
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await moderatorService.deletemoderator(req.params.id));
  } catch (err) {
    console.error(`Error while deleting moderator`, err.message);
    next(err);
  }
});


// Get specific moderator
router.get("/:id", async function (req, res, next) {
  try {
    res.json(await moderatorService.getmoderatorById(req.params.id));
  } catch (err) {
    console.error(`Error while getting moderator `, err.message);
    next(err);
  }
});

module.exports = router;
