const { Router } = require("express");
const router = Router();
const users = require("../services/users.js");
const passport = require("../configs/passport.js");
const auth = require("../controllers/auth.js");
const multer = require("multer");
const upload = multer();
const imgbbUploader = require("imgbb-uploader");

require("../configs/passport.js");

// Get all users
router.get("/", async function (req, res, next) {
  try {
    res.json(await users.getAllUsers(req.query));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

// Add a user
router.post("/add", async function (req, res, next) {
  try {
    res.json(await users.addUser(req.body));
  } catch (err) {
    console.error(`Error while adding user`, err.message);
    next(err);
  }
});

//Login success
router.get("/login-success", async function (req, res, next) {
  res.json({ message: "Login success" });
});

//Login failure
router.get("/login-failure", (req, res) => {
  res.json({ message: "Login failed, but why?? No one knows!!!!" });
});

//Login a user
router.post("/login", auth.isLogged, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    // Authentication successful, log in the user
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      // Set the session cookie in the response headers
      const sessionCookie = req.session.id;
      res.setHeader("Set-Cookie", `session=${sessionCookie}`);
      res.setHeader("Set-Cookie", `user=${user}`);

      return res.json({ session: sessionCookie, user: user, });
    });
  })(req, res, next);
});

//logout route
router.get("/logout", auth.isNotLogged, (req, res) => {
  req.session.destroy();
  req.cookies = null;
  res.json({ message: "Logged out" });
});

// Update a user
router.put("/edit/:id", async function (req, res, next) {
  try {
    res.json(await users.updateUser(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
});

// Add profile image
router.put(
  "/addProfileImage/:id",
  upload.single("image"),
  async function (req, res, next) {
    try {
      const { file } = req;

      if (file.length === 0) {
        return res.status(400).json({ message: "No image data provided" });
      }

      const options = {
        apiKey: process.env.IMGBB_KEY,
        base64string: file.buffer.toString("base64"),
      };
      const result = await imgbbUploader(options);

      req.imageUrl = result.url;
      res.json(await users.addProfileImage(req.params.id, req.imageUrl));
    } catch (err) {
      console.error(`Error while adding profile image`, err.message);
      next(err);
    }
  }
);

// Number of users
router.get("/count", async function (req, res, next) {
  try {
    res.json(await users.countUsers());
  } catch (err) {
    console.error(`Error while getting number of users`, err.message);
    next(err);
  }
});

// Get specific user
router.get("/:id", async function (req, res, next) {
  try {
    res.json(await users.getSpecificUser(req.params.id));
  } catch (err) {
    console.error(`Error while getting user`, err.message);
    next(err);
  }
});

// Delete a user
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await users.deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});

// Get user's products
router.get("/:id/products", async function (req, res, next) {
  try {
    res.json(
      await users.getProductsByUser(
        req.params.id,
        req.query.page,
        req.query.listPerPage
      )
    );
  } catch (err) {
    console.error(`Error while getting user's products`, err.message);
    next(err);
  }
});

// Get the logged in user
router.get("/profile/me", async (req, res) => {
  res.json(req.user);
});

// Session endpoint
router.get("/api/session", async (req, res) => {
  console.log({"session": req.session, "cookie": req.headers});
  if (req.session && req.user){
    return res.json({ session: req.session.id, user: user, });
  }
  res.json({"name": "cookie.sid", "value": req.headers, ...req.session});
});

// get wilaya by code
router.get("/wilaya/:id", async function (req, res, next) {
  try {
    res.json(await users.getWilayaById(req.params.id));
  } catch (err) {
    console.error(`Error while getting wilaya`, err.message);
    next(err);
  }
});


// Check user role
router.get("/role/:id", async function (req, res, next) {
  try {
    res.json(await users.checkUserRole(req.params.id));
  } catch (err) {
    console.error(`Error while getting user role`, err.message);
    next(err);
  }
});


module.exports = router;
