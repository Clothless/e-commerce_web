const verifyAPIKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== API_KEY) {
      return res.status(403).json({ error: 'Invalid API key' });
    }
    next();
  };


  module.exports = verifyAPIKey;