

module.exports.isLogged = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.status(403).json({ message: "Already logged in" });
  }
  next();
};


module.exports.isNotLogged = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(403).json({ message: "Not logged in" });
  }
  next();
};



module.exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Not authenticated" });
};

// module.exports.isAdmin = (req, res, next) => {
//   if (req.isAuthenticated() && req.user.role === "admin") {
//     return next();
//   }
//   res.status(403).json({ message: "Not authorized" });
// };

// module.exports.isSuperAdmin = (req, res, next) => {
//   if (req.isAuthenticated() && req.user.role === "moderator") {
//     return next();
//   }
//   res.status(403).json({ message: "Not authorized" });
// };