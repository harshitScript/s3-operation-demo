const globalErrorHandlerMiddleware = (error, req, res, next) => {
  return res.status(error?.status || 500).json({
    message: error.message,
  });
};

module.exports = globalErrorHandlerMiddleware;
