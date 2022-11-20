const notFoundMiddleware = (req, res, next) => {
  return res.status(404).json({
    path: req.pathname,
    message: "Route not found on the server.",
  });
};
module.exports = notFoundMiddleware;
