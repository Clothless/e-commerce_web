//Error handler middleware

function errorHandler(err, req, res, next) {
    //switch case for all errors status
    switch (err.status) {
        case 400:
            res.status(400).json({ message: "Bad request" });
            break;
        case 401:
            res.status(401).json({ message: "Unauthorized" });
            break;
        case 403:
            res.status(403).json({ message: "Forbidden" });
            break;
        case 404:
            res.status(404).json({ message: "Not found" });
            break;
        case 500:
            res.status(500).json({ message: "Internal Server Error" });
            break;
        default:
            res.status(500).json({ message: "Error Occured" });
    }
}

module.exports = errorHandler;