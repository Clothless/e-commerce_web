

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
    next();
  }else{
    return res.status(401).json({ message: "Not authenticated" });
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "admin") {
    return next();
  }
  res.status(403).json({ message: "You are not an Admin, not authorized" });
};

module.exports.isSubAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "moderator") {
    return next();
  }
  res.status(403).json({ message: "You are not a Moderator, not authorized" });
};